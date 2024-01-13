---
layout: post
title:  "Ros2 For Beginners - Write your first Ros2 program"
---
# Write your first Ros2 program

## Create a ROS2 Workspace
Create and set up a Ros2 Workpace <br/>
-Ros2 Workpace: The place where you write all your code for a Ros2 application and where you will compile this code <br/> 
![Ros2_For_Beginners2-1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2293b509-fd56-40d6-a97d-07641d9249dc) <br/>
(1)Go to home directory and create a folder named ros2_ws & In this folder create a src folder (souce folder)<br/>
-src:All the code and packages created will be in the source folder <br/> 
(2)Build the workspace <br/>
![Ros2_For_Beginners2-2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/991a5ded-b22d-49f5-a981-9cab3e080eeb) <br/>
-Have a successful build and because we didn't put anything in the source, we have 0 packages installed <br/>
(3)After build, we have three more folders <br/>
![Ros2_For_Beginners2-3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b0dd7de0-4e63-4ee0-95bd-93fc58f8de1a) <br/>
-log: log of the build process 
(4)Inside the install, setup.bash script exists <br/>
![Ros2_For_Beginners2-4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/599343a7-410b-497f-9885-714121141872) <br/>
(5)Source either local_setup.bash or setup.bash <br/>
Source local_setup.bash <br/>
![Ros2_For_Beginners2-5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/aba7a754-b83e-4804-8399-1e714dda418b)<br/>
-Can use whatever I created in the workspace <br/>
-Difference between local_setup.bash and setup.bash: <br/>
local_setup.bash can simply source that workspace which we can overlay(ros2_ws/install) <br/>
setup.bash will set up the entire workspace (ros2_ws/install + global ros2 installation) <br/>
Source setup.bash <br/>
![Ros2_For_Beginners2-7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8c160ece-0bb4-46cf-afee-285a9ccb3d06)<br/>
![Ros2_For_Beginners2-6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d32aa15a-1666-4638-8b2f-b4e78e55f466)<br/>
-Can be sure own Ros2 functionalities can be used <br/>
-Can be sure use my own functionalities added in the workspace <br/>

## Create a Python package
To create a Ros2 node, a package is needed <br/>
Packages are allowed to seperate your code into reusable blocks <br/>
Each package is an independent unit <br/>
ex. <br/>
Camera pkg: package that handles a camera <br/>
Hardware Control pkg: package for wheels of a robot <br/>
Motion planning pkg: package that will handle motion planning for the robot in the environment <br/>
(1)Create a python pkg in your new ros2 ws <br/>
![Ros2_For_Beginners2-8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e7fde2e1-fbd8-4a43-b19e-5d83c3492010)<br/>
Navigate src dir of your workspace <br/>
![Ros2_For_Beginners2-9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2fc7d36a-d5b0-4641-b15b-86b5d515489f)<br/>
Create my_py_pkg and add an argument to specify which kind of package you want<br/>
ros2 pkg create <package name>: Command to create a package <br/>
--build-type ament_python <br/>
-There are differences between a python package and a c++ package <br/>
-Used a build type argument with ament's python <br/>
-ament is the build system and ament's python means you want a python package <br/>
--build-type ament_python <br/>
--dependencies <dependencies> <br/>
-dependencies: packages this new package relies on <br/>
-rclpy: Ros2 python library <br/>
-Many folders and files created <br/>
![Ros2_For_Beginners2-10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3f9e4b5b-1260-4404-94f5-a0efa08a7eac)<br/>
(2)See what's in the src folder <br/>
Opened the source directory of the ros2 workspace on vs code <br/>
my_py_pkg: we are going to put in all your python nodes <br/>
test: containing test files <br/>
![Ros2_For_Beginners2-11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/524a0a35-a957-414a-b694-a2226932214f)![Ros2_For_Beginners2-12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/85ad904e-6490-4c25-9e97-2b4e7e019584)<br/>
package.xml: C++ or Python package will contain a package.xml file <br/>
-First is the name of information  <br/>
Next, dependencies, rclpy specified when creating the pkg <br/>
-When wanting to create another dependency, add another dependency tag below that one <br/>
Last, ament_python build type for the pkg <br/>
setup.cfg & setup.py: when we create a ros2 node, it will be useful to install the node in your environment <br/>
(3)Building workspace <br/>
Error: <br/>
![Ros2_For_Beginners2-13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b469899c-5bfe-4c20-a762-a0ba233f51d7)<br/>
Solution: <br/>
![Ros2_For_Beginners2-14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/11ded559-9e61-4297-9414-80f919ad7bc2)<br/>
![Ros2_For_Beginners2-15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/aed9743b-e862-4367-9075-fca10d645061)<br/>
Previous setuptools version was 59.6.0, but things are not working right, so we need to downgrade it to 58.2.0 <br/>
Error resolved: <br/>
![Ros2_For_Beginners2-16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7008fc08-6194-4c05-8659-92a8d25f4d67)<br/>
(4)Build a particular package <br/>
![Ros2_For_Beginners2-17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/10e7cd4c-57e6-4835-9147-7a13c9447eed)<br/>
colcon build --packages-select <package name>: Build/Compile a certain package <br/>
(5)Python package is ready to host any Python node <br/>

## Create a C++ package
(1)Navigate src folder <br/>
![Ros2_For_Beginners2-18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/de7c7707-8acf-42a6-822e-eb6f8f18e008) <br/>
my_py_pkg, python package exists <br/>
my_py_pkg exists <br/>
(2)Create C++ package <br/>
![Ros2_For_Beginners2-19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/eae4d0c9-ea9b-4980-b045-024178ec7de1)<br/>
pkg create my_cpp_pkg: Where we put all our C++ code <br/>
--build-type ament_cmake: Will create a C++ pkg <br/>
--dependencies rclcpp: Add dependency rclcpp <br/>
rclpy for python and rclcpp for C++, which allows you to use all the ros2 functionalities <br/>
![Ros2_For_Beginners2-20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c4a7b5fb-db05-449d-8449-93e35c5dfca9)<br/>
New packages made <br/>
(3)See what's in the src folder <br/>
![Ros2_For_Beginners2-21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8297201e-2971-4665-952d-f5afeb941feb)<br/>
package.xml: C++ or Python package will contain a package.xml file <br/>
-First is the informations <br/>
Next, dependencies, rclcpp library specified when creating the pkg <br/>
-When wanting to create another dependency, add another dependency tag below that one <br/>
Last, ament_cmake build type flag for the pkg <br/>
CMakelists.txt: Where the code is compiled <br/>
We also have the dependency for rclcpp <br/>
If wanting to add a new dependency for your C++ pkg, you need to add it in packages.xml and CMakeLists.txt <br/>
(4)Building workspace <br/>
![Ros2_For_Beginners2-22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/04f10de3-54da-4b51-aecc-311adea00015)<br/>
(5)Build a particular package <br/>
![Ros2_For_Beginners2-23](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8955f9a1-b4d8-40b0-837b-70f7e2ce66ae)<br/>
Only build cpp package <br/>
(6)Ready to write your first node inside the packages <br/>


