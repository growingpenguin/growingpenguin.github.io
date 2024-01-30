---
layout: post
title:  "Interactive Scripting"
---
# GUI
## Interactive Scripting
Every action in the GUI has its corresponding Python APIs <br/>
Everything that’s done in the GUI can be done with a Python command(but not the reverse, not all Python APIs have corresponding GUI) <br/>
Introduce the Script Editor inside the GUI environment and the Isaac Python REPL extension as the two interactive scripting options for running python while the stage is open <br/>
-Convenient tools for debugging and experimenting <br/>
-Will reproduce a few selected steps from previous GUI tutorials with Python snippets <br/>
### Learning Objectives 
-Script Editor window and python editing environment <br/>
-Isaac Python REPL extension <br/>
-Adding a Cube using USD API <br/>
-Adding a Cube using Isaac Sim API <br/>

### Getting Started
Prerequisites: <br/>
Complete Add Simple Objects to have a basic understanding of the process adding a simple object onto the stage <br/>

### Script Editor
Script Editor: <br/>
A python editing environment internal to Omniverse Kit <br/>
Can be used to run snippets of python code to interact with the stage <br/>
1)To open the script editor window, go to the Menu Bar and click Window > Script Editor <br/>
![Nvidia_ScriptEditor1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6eedc1de-b92c-4f56-82e5-b435f3fe55c6) <br/>
A window will pop up, and you can dock somewhere you find convenient <br/>
2)Can open multiple tabs by going to the Tab Menu under Script Editor <br/>
All the tabs share the same environment, so libraries that are imported or variables defined in one environment can be accessed and used in other environments <br/>
![Nvidia_ScriptEditor2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ad2c4842-1507-46ce-a350-35b6ff3a4bcd) <br/>
![Nvidia_ScriptEditor3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2bfc7f67-375e-412e-b869-2811883ba16b) <br/>
3)Example <br/>
![Nvidia_ScriptEditor4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c9501b29-8df3-48c2-97e3-6ce2fcf1953f) <br/>
![Nvidia_ScriptEditor5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c7f9554e-df7d-4e59-ade1-440a23bab876) <br/>
![Nvidia_ScriptEditor6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/505a5586-3b4b-48b8-b6a3-50d735598e2c) <br/>

### REPL Extension
REPL(“Read–Evaluate–Print loop”): <br/>
A programming shell that can read and evaluate small snippets of code and allow users to interactively query the state of the variables inside the environment <br/>
-IPython, or Jupyter Notebook, is an example of a REPL environment <br/>
-Access is provided to a REPL environment through the Isaac REPL Extension (Linux only) <br/> 
1)Make sure there is an instance of Isaac Sim already running <br/> 
2)Enable the REPL Extension <br/> 
Go to Windows > Extensions, search for Isaac Sim REPL, and enable it if it’s not already <br/> 
![Nvidia_ScriptEditor7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cfbdbbea-d9b9-43d1-a2f1-44153ba2a3a2) <br/> 
Check Autoload if you wish to have the extensions always enabled when you start Isaac Sim <br/> 
3)Open a new terminal, and on the command line run telnet localhost 8223. A python shell will start in the terminal, and you are all set to start interacting with the stage opened in Isaac Sim via Python. 
![Nvidia_ScriptEditor8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/506199ab-2551-45b0-9f98-e5c3a88782b6)<br/> 
Copy-paste the snippets below to test it out <br/>

### USD APIs
Underlying format in NVIDIA Omniverse is USD <br/>
Script to set up a ground plane, a default light, and a cuboid with physics and collision presets using raw USD APIs <br/>
Start with a fresh stage, copy and paste the code into the Script Editor window and run it, then press Play to simulate <br/>
Code: <br/>
https://drive.google.com/file/d/1QcKG6lgSgjjmBGKpdu4Znh042Q3Fiw1I/view?usp=sharing <br/>
Result: <br/>
![Nvidia_ScriptEditor10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/4e6d6c0b-dec1-4a4b-acca-ad3774d4bdc0) <br/>
https://drive.google.com/file/d/10K4n49ogRd6GV97J_lZmZrTzjOVwQdq2/view?usp=sharing <br/>
Can execute the whole block at once, or line-by-line <br/>
Exit the shell environment by Ctrl+D <br/>

### Isaac Sim Core APIs
Raw USD APIs are versatile and detailed but complex, especially for beginners <br/>
Omniverse Isaac Sim has a set of core APIs that simplifies some of the frequently used actions for robotics simulators and abstracts away default parameter settings <br/>
Here are the same actions of setting up the stage and adding a cuboid with physics and collision presets, as well as setting physics and visual material properties <br/>
Code: <br/>
![Nvidia_ScriptEditor9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8835f75f-8a42-41d3-8cdd-242aab8e9545) <br/>
https://drive.google.com/file/d/1ndRR1PW7UML8uY-QcfG3MMGGM6BoOEvP/view?usp=sharing <br/>
Result: <br/>
![Nvidia_ScriptEditor11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9cf183bf-1029-492b-a0db-e1f5ea42bf17) <br/>
https://drive.google.com/file/d/1vUXascrkeZTQDLdzPJGxo6v0xGkIPVEB/view?usp=sharing <br/>
Using Isaac Sim Core APIs produces code that is much more lightweight and readable, though you can always resort to using USD APIs to direct the stage whenever necessary <br/>

## Summary
The Script Editor window <br/>
The REPL extension <br/>
Using Python APIs to replace GUI commands <br/>
The difference between USD APIs and Isaac Sim Core APIs <br/>

Reference: <br/>
https://docs.omniverse.nvidia.com/isaacsim/latest/gui_tutorials/tutorial_gui_interactive_scripting.html <br/>














