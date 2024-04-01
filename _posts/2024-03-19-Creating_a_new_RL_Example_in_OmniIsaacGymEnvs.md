---
layout: post
title:  "Creating a new RL Example in OmniIsaacGymEnvs"
---

# Creating a new RL Example in OmniIsaacGymEnvs
A collection of reinforcement learning environments are provided at OmniIsaacGymEnvs, which can be used as examples and baselines to build new RL environments with Isaac Sim <br/>
Details of the tasking framework for running a RL environment <br/>

## Learning Objectives
(1)Introduce the tasking framework <br/>
(2)Implement a Cartpole task <br/>
(3)Register the task to the OIGE framework <br/>
(4)Understand config files for the task <br/>
(5)Run the Cartpole task <br/>

## Getting Started
-Default Python Environment <br/>
Learn about Isaac Sim’s python environment and locate the python executable in Isaac Sim <br/>
```
./python.sh path/to/script.py
```
Run the following from the Isaac Sim root folder to start a Python script in this environment <br/>
```
./python.sh -m pip install name_of_package_here
```
Install additional packages via pip <br/>
Note <br/>
Can open a terminal directly at the Isaac Sim root folder from the Isaac Sim App Selector <br/>
Ref: https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_python.html#isaac-sim-install-python-default <br/>

## Introduction to the Tasking Framework
-The main entry script for OmniIsaacGymEnvs is rlgames_train.py, which can be found [here](https://github.com/NVIDIA-Omniverse/OmniIsaacGymEnvs/blob/main/omniisaacgymenvs/scripts/rlgames_train.py) <br/>
-This script parses input parameters using the Hydra Framework, which is a framework used to handle configuration parameters <br/>
Note <br/>
hyperparameters: Parameters, which are are configuration variables, whose values are set before the learning process begins <br/>


All tasks in OIGE define config files in .yaml files, which are then parsed using Hydra <br/>

The script is also responsible for initializing our Environment object. In Isaac Sim, we define a VecEnvBase class in the omni.isaac.gym extension as an interface for connecting RL libraries with the simulation in Isaac Sim and our task. In OIGE, we extend the VecEnvBase class for the rlgames RL library, which is a vectorized GPU-based RL library we use for training in OIGE. This new environment object, VecEnvRLGames, is responsible for passing actions from the RL library to our task, stepping simulation, and retrieving observations, rewards, and resets buffers for the RL library.

When launching a task in OIGE, we use the following command: <br/>

## Task Implementation Walk-through - Cartpole
Look at one of the simple examples in OmniIsaacGymEnvs, the Cartpole environment <br/>
Look at each section of the Cartpole task and understand the various APIs used for defining the task <br/>
Code for the Cartpole environment: https://github.com/NVIDIA-Omniverse/OmniIsaacGymEnvs/blob/main/omniisaacgymenvs/tasks/cartpole.py <br/>
Goal of the Cartpole task: <br/>
To balance the pole of the robot to stay in an upright position by gently sliding the cart along the rail <br/>
(1)Define a new class for the task <br/>
This task class will be responsible for performing resets, applying actions, collecting observations and computing rewards <br/>
In this example, we will define a class called CartpoleTask to implement our Cartpole environment <br/>
```
class CartpoleTask(RLTask):
    def __init__(self, name, sim_config, env, offset=None) -> None:
```
**Arguments** <br/>
-name <br/>
The first argument is the name of the class, which will be parsed from the task config file <br/>
-sim_config <br/>
The second argument is a SimConfig object, which contains task and physics parameters parsed from the task config file <br/>
The SimConfig object will generally contain task information, such as the number of environments used for the task, and physics parameters, including simulation dt, GPU buffer dimensions, and physics properties for individual assets used in the task <br/>
-env <br/>
The third argument is the environment object, which in our case, will be a VecEnvRLGames object defined by the rlgames_train.py script <br/>
All of these parameters will be parsed and processed automatically by the task_util.py script, which is called when a training run is launched from command line <br/>
**Constructor method** <br/>
```
class CartpoleTask(RLTask):
    def __init__(self, name, sim_config, env, offset=None) -> None:
        self.update_config(sim_config)
        self._max_episode_length = 500

        # these must be defined in the task class
        self._num_observations = 4
        self._num_actions = 1

        # call the parent class constructor to initialize key RL variables
        RLTask.__init__(self, name, env)
```
**Initialize Key Variable** <br/>
In our constructor method, we will intialize a few key variables <br/>
self._num_observations and self._num_actions are required variables that must be set by the task implementation <br/>
For our Cartpole task, we will use 4 observations to represent the joint positions and velocities for the cart and pole joints, and 1 action to apply as the force to the cart <br/>
Call the base RLTask class constructor to initialize some key variables that are common to all task classes <br/>
These variables include setups for domain randomization, defining action and observation spaces if not specified by the task class, initializing the Cloner for environment set up, and defining the reward, obervation, and reset buffers for our task <br/>

```
def update_config(self, sim_config):
    # extract task config from main config dictionary
    self._sim_config = sim_config
    self._cfg = sim_config.config
    self._task_cfg = sim_config.task_config

    # parse task config parameters
    self._num_envs = self._task_cfg["env"]["numEnvs"]
    self._env_spacing = self._task_cfg["env"]["envSpacing"]
    self._cartpole_positions = torch.tensor([0.0, 0.0, 2.0])

    # reset and actions related variables
    self._reset_dist = self._task_cfg["env"]["resetDist"]
    self._max_push_effort = self._task_cfg["env"]["maxEffort"]
```
-In the first line of the constructor, we called self.update_config(sim_config), which is a utility method for parsing the SimConfig object, as defined above <br/>
In this method, we can extract the task config dictionary from the main config dictionary, allowing for easier access to task-related parameters, such as number of environments, spacing between environments, the distance that should trigger a reset, and the effort scaling we should apply to our actions <br/>
**Methods for setting up simulation World** <br/>
Next, we will define our methods for setting up our simulation world <br/>
This is where we will define our robot asset, apply physics parameters to the robot, and clone it multiple times to build our vectorized environment <br/>
```
def set_up_scene(self, scene) -> None:
    # first create a single environment
    self.get_cartpole()

    # call the parent class to clone the single environment
    super().set_up_scene(scene)

    # construct an ArticulationView object to hold our collection of environments
    self._cartpoles = ArticulationView(
        prim_paths_expr="/World/envs/.*/Cartpole", name="cartpole_view", reset_xform_properties=False
    )

    # register the ArticulationView object to the world, so that it can be initialized
    scene.add(self._cartpoles)

def get_cartpole(self):
    # add a single robot to the stage
    cartpole = Cartpole(
        prim_path=self.default_zero_env_path + "/Cartpole", name="Cartpole", translation=self._cartpole_positions
    )

    # applies articulation settings from the task configuration yaml file
    self._sim_config.apply_articulation_settings(
        "Cartpole", get_prim_at_path(cartpole.prim_path), self._sim_config.parse_actor_config("Cartpole")
    )
```
-Note that each task class should define a set_up_scene method, as this will be triggered automatically by the Isaac Sim framework when initializing the world <br/>

(1)Construct a single environment <br/>
First construct a single environment (a single Cartpole robot), by calling get_cartpole() <br/>
This method creates an instance of the Cartpole robot class, which simply adds a Cartpole asset into the scene <br/>
Then, we use the SimConfig utilities to apply physics settings to the robot <br/>
(2)Call the RLTask super().set_up_scene(scene) method  <br/>
Once the single environment has been constructed, we call the RLTask super().set_up_scene(scene) method to further construct our stage <br/>
RLTask implements common utilities that are used by all tasks defined in OIGE <br/>
In set_up_scene, RLTask applies the Cloner to duplicate the single environment based on the number of environments variable defined in the task <br/>
It also processes settings from the config file to add a ground plane and additional light prims to the stage <br/>
In addition, collision filtering is applied to all clones of the envrionments to avoid interference across environments <br/>
**post_reset method** <br/>
After the environment setup is complete, we can then define our post_reset method, which will also be automatically triggered by the Isaac Sim framework at the very beginning of simulation <br/>
```
def post_reset(self):
    # retrieve cart and pole joint indices
    self._cart_dof_idx = self._cartpoles.get_dof_index("cartJoint")
    self._pole_dof_idx = self._cartpoles.get_dof_index("poleJoint")

    # randomize all envs
    indices = torch.arange(self._cartpoles.count, dtype=torch.int64, device=self._device)
    self.reset_idx(indices)
```
In this method, we perform initializations with APIs that require simulation to be running, such as the vectorized tensor APIs available in ArticulationView <br/>
Here, we retrieve the joint indices of the cart and pole joints to be used when computing the observations and rewards <br/>
Then, we perform an initial reset for all of the environments to initialize them into a starting state for a new episode of RL training <br/>

```
def reset_idx(self, env_ids):
    num_resets = len(env_ids)

    # randomize DOF positions
    dof_pos = torch.zeros((num_resets, self._cartpoles.num_dof), device=self._device)
    dof_pos[:, self._cart_dof_idx] = 1.0 * (1.0 - 2.0 * torch.rand(num_resets, device=self._device))
    dof_pos[:, self._pole_dof_idx] = 0.125 * math.pi * (1.0 - 2.0 * torch.rand(num_resets, device=self._device))

    # randomize DOF velocities
    dof_vel = torch.zeros((num_resets, self._cartpoles.num_dof), device=self._device)
    dof_vel[:, self._cart_dof_idx] = 0.5 * (1.0 - 2.0 * torch.rand(num_resets, device=self._device))
    dof_vel[:, self._pole_dof_idx] = 0.25 * math.pi * (1.0 - 2.0 * torch.rand(num_resets, device=self._device))

    # apply randomized joint positions and velocities to environments
    indices = env_ids.to(dtype=torch.int32)
    self._cartpoles.set_joint_positions(dof_pos, indices=indices)
    self._cartpoles.set_joint_velocities(dof_vel, indices=indices)

    # reset the reset buffer and progress buffer after applying reset
    self.reset_buf[env_ids] = 0
    self.progress_buf[env_ids] = 0
```
-Above, we show the reset method for the Cartpole task <br/>
-This method takes in one argument, env_ids, which contains a tensor holding the indices of the environments that should be reset <br/>
In this task, we reset the joint positions and velocities of the Cartpole robot to a randomized state to ensure that the RL policy can learn to perform the task from arbitrary starting states <br/>
-Note that both dof_pos and dof_vel tensors are initialized with dimensions covering all joints in the robot <br/>
This is required by the ArticulationView APIs set_joint_positions and set_joint_velocities, which are used to apply the reset states for the robots <br/>
-However, we can provide an additional indices argument to the APIs to specify the environment indices that need to be reset <br/>
Values for indices that do not need to be reset can be left as zeros <br/>
-Upon resetting the states of the environments, we also reset the reset buffer and progress buffer to zeros for the corresponding environments <br/>
The reset buffer reset_buf is a boolean tensor used to track which environments should be reset at each step and the progress buffer progress_buf is an integer tensor that tracks the number of steps each environment has simulated through since it was last reset <br/>
### Pre-physics step
Primarily about preparing and applying the agent's actions to the simulation environment before the physics simulation step occurs <br/>
```
def pre_physics_step(self, actions) -> None:
    # make sure simulation has not been stopped from the UI
    if not self._env._world.is_playing():
        return

    # extract environment indices that need reset and reset them
    reset_env_ids = self.reset_buf.nonzero(as_tuple=False).squeeze(-1)
    if len(reset_env_ids) > 0:
        self.reset_idx(reset_env_ids)

    # make sure actions buffer is on the same device as the simulation
    actions = actions.to(self._device)

    # compute forces from the actions
    forces = torch.zeros((self._cartpoles.count, self._cartpoles.num_dof), dtype=torch.float32, device=self._device)
    forces[:, self._cart_dof_idx] = self._max_push_effort * actions[:, 0]

    # apply actions to all of the environments
    indices = torch.arange(self._cartpoles.count, dtype=torch.int32, device=self._device)
    self._cartpoles.set_joint_efforts(forces, indices=indices)
```
At each step, before stepping the simulator, we should apply the actions from the RL policy to the robots so that they can be applied during the next physics step <br/>
Similarly, we should also reset any environments that are marked for reset by the reset_buf such that these environments will be in a fresh state after we step simulation <br/>
This logic is implemented in the pre_physics_step call, which takes in the actions from the RL policy as a parameter, and is called prior to stepping simulation each step <br/> 
(1)Check if the simulation is running: <br/>
The function first ensures that the simulation hasn't been stopped from the user interface (UI) <br/>
If the simulation has stopped (is_playing() returns False), the function returns immediately, doing nothing <br/>
Example: Just like making sure the race hasn't been paused before you signal the cars to start <br/>
(2)Handle environment resets: <br/>
It checks for environment instances that need to be reset <br/>
The reset_buf is a buffer that indicates which environments should be reset <br/>
The line reset_env_ids = self.reset_buf.nonzero(as_tuple=False).squeeze(-1) finds the indices of environments that are marked for a reset (non-zero values in reset_buf) <br/>
If there are any, it calls self.reset_idx(reset_env_ids) to reset those environments <br/>
Example: This is like arranging the cars at the starting line if any of them need to be reset for a new race <br/>
(3)Actions to device: <br/>
The actions provided by the RL policy are moved to the same computational device as the simulation, ensuring consistency across computations <br/>
This is necessary when working with PyTorch and CUDA, as all tensors involved in the computation should be on the same device (e.g., CPU or GPU) <br/>
Example: You're verifying that the race's rules and the remote control are working together without any glitches <br/>
(4)Compute forces from actions: <br/>
It initializes a tensor to hold the forces to be applied to the cart-poles <br/>
The shape of the tensor corresponds to the number of cart-poles and their degrees of freedom (DoF) <br/>
It then applies the actions (coming from the RL policy) to compute the forces <br/>
The actions are scaled by the maximum push effort (_max_push_effort), affecting only the specific degree of freedom for the cart (self._cart_dof_idx) <br/>
Example: This is when you use the remote control to signal your car to start racing <br/>
(5)Apply actions to environments: <br/>
It prepares indices for all cart-poles and applies the calculated forces to the joints by calling self._cartpoles.set_joint_efforts(forces, indices=indices) <br/>
The race begins, and as the cars move, they might collide, speed up, slow down, or change direction — these are the changes in the environment resulting from the actions <br/>
### Get Operations
```
def get_observations(self) -> dict:
    # retrieve joint positions and velocities
    dof_pos = self._cartpoles.get_joint_positions(clone=False)
    dof_vel = self._cartpoles.get_joint_velocities(clone=False)

    # extract joint states for the cart and pole joints
    cart_pos = dof_pos[:, self._cart_dof_idx]
    cart_vel = dof_vel[:, self._cart_dof_idx]
    pole_pos = dof_pos[:, self._pole_dof_idx]
    pole_vel = dof_vel[:, self._pole_dof_idx]

    # populate the observations buffer
    self.obs_buf[:, 0] = cart_pos
    self.obs_buf[:, 1] = cart_vel
    self.obs_buf[:, 2] = pole_pos
    self.obs_buf[:, 3] = pole_vel

    # construct the observations dictionary and return
    observations = {self._cartpoles.name: {"obs_buf": self.obs_buf}}
    return observations
```
Construct Observations Dictionary: <br/>
The function creates and returns a dictionary named observations <br/>
This dictionary maps the name of the cart-poles environment to the current observation buffer, which contains the state of the cart-pole system <br/>
### Calculate Metrics
```
def calculate_metrics(self) -> None:
    # use states from the observation buffer to compute reward
    cart_pos = self.obs_buf[:, 0]
    cart_vel = self.obs_buf[:, 1]
    pole_angle = self.obs_buf[:, 2]
    pole_vel = self.obs_buf[:, 3]

    # define the reward function based on pole angle and robot velocities
    reward = 1.0 - pole_angle * pole_angle - 0.01 * torch.abs(cart_vel) - 0.5 * torch.abs(pole_vel)
    # penalize the policy if the cart moves too far on the rail
    reward = torch.where(torch.abs(cart_pos) > self._reset_dist, torch.ones_like(reward) * -2.0, reward)
    # penalize the policy if the pole moves beyond 90 degrees
    reward = torch.where(torch.abs(pole_angle) > np.pi / 2, torch.ones_like(reward) * -2.0, reward)

    # assign rewards to the reward buffer
    self.rew_buf[:] = reward
```
**Extracting State Information** <br/>
cart_pos (Cart Position): <br/>
The position of the cart along the track <br/>
This value indicates how far the cart has moved from its starting position <br/>
cart_vel (Cart Velocity): <br/>
The speed at which the cart is moving <br/>
A higher value indicates faster movement <br/>
pole_angle (Pole Angle): <br/>
The angle of the pole with respect to the vertical axis <br/>
An angle close to 0 indicates that the pole is nearly upright <br/>
pole_vel (Pole Velocity): <br/>
The rate at which the pole's angle is changing <br/>
It reflects how quickly the pole is falling or being corrected <br/>
**Reward Function** <br/>
The reward function is a formula used to calculate how well the agent is performing <br/>
In this case: <br/>
The initial reward is set to 1.0, representing a perfect scenario where the pole remains upright, and the cart is stationary <br/>
Pole Angle Penalty: <br/>
The term - pole_angle * pole_angle penalizes deviations from the vertical position <br/>
Squaring the angle increases the penalty exponentially as the pole tilts further away from the vertical <br/>
Cart Velocity Penalty: <br/>
The term - 0.01 * torch.abs(cart_vel) penalizes the cart for moving too quickly, promoting smoother and more controlled movements <br/>
Pole Velocity Penalty: <br/>
The term - 0.5 * torch.abs(pole_vel) applies a significant penalty for rapid changes in the pole's angle, encouraging stability <br/>
**Penalizing Bad States** <br/>
Cart Position Penalty: <br/>
If the cart moves beyond a certain distance (self._reset_dist), it is penalized with a reward of -2.0. This discourages the agent from letting the cart stray too far from the start <br/>
Pole Angle Penalty: <br/>
If the pole tilts more than 90 degrees in either direction (measured as np.pi / 2 radians), the situation is considered irrecoverable, and a penalty of -2.0 is applied <br/>
**Assigning Rewards** <br/>
The calculated reward, after accounting for all the factors and penalties, is assigned to every instance in the self.rew_buf buffer <br/>
This buffer stores the rewards that will be used by the reinforcement learning framework to understand the performance of each action taken by the agent <br/>
From the observations, we can then also compute the reward for the task <br/>
-The reward function is defined in the calculate_metrics API, also following the interface from BaseTask <br/>
-In this method, we calculate the reward based on the angle of the pole <br/>
The closer it is to 0, meaning it is in an upright position, the higher the reward will be <br/>
-In addition, we add small penalty terms to penalize the cart and pole from moving too fast <br/> 
This is implemented by taking the absolute values of the cart and pole joint velocities <br/>
These terms will help ensure that actions from the RL policy provide smooth movements for the robots <br/>
-We also provide a larger penalty of -2 for when the robot reaches a bad state, such as for moving beyond the reset distance limit and if the pole goes beyond 90 degrees in either direction <br/>
-Finally, we assign the computed reward to the reward buffer, rew_buf, which will then be passed to the RL framework <br/>
### Is Done
```
def is_done(self) -> None:
    cart_pos = self.obs_buf[:, 0]
    pole_pos = self.obs_buf[:, 2]

    # check for which conditions are met and mark the environments that satisfy the conditions
    resets = torch.where(torch.abs(cart_pos) > self._reset_dist, 1, 0)
    resets = torch.where(torch.abs(pole_pos) > math.pi / 2, 1, resets)
    resets = torch.where(self.progress_buf >= self._max_episode_length, 1, resets)

    # assign the resets to the reset buffer
    self.reset_buf[:] = resets
```
-Lastly, we have a method for determining which environments need to be reset, which is implemented in is_done <br/>
We placed multiple conditions for when an environment is due for reset <br/>
(1)The first condition is when the robot moves beyond the preset limit of the reset distance <br/>
This means the robot has moved too far across the rail and has reached the end of the rail <br/>
In such a case, we reset the robot to be somewhere closer to the center of the rail <br/>
(2)The second condition is if the pole has gone too far away from the upright position <br/>
(3)If the environment has not been reset for the pre-defined max_episode_length number of steps, <br/>
we force a reset for the environment so that it can continue to learn from new initial states <br/>
This helpes the policy to explore beyond the local minimum <br/>
-Finally, we assign the resets to the reset buffer, reset_buf <br/>

Reference: <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/isaac_gym_tutorials/tutorial_gym_isaac_gym_new_oige_example.html <br/>
