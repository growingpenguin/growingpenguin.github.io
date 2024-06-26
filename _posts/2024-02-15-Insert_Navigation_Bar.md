---
layout: post
title:  "Insert Navigation Bar"
---

# Insert Navigation Bar
## Place Navigation Bar inside the Sidebar 
(1)Prepare Your Environment <br/>
(1)-1 Activate Your Virtual Environment
```
# Windows Command Prompt
venv\Scripts\activate.bat
```
(1)-2 Install the Required Library <br/>
```
pip install streamlit-option-menu
```
(2) Set Up the Navigation Bar <br/> 
(2)-1 Import the Option Menu <br/>
```
from streamlit_option_menu import option_menu
```
![QuickWebsite49](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f966dbcf-3c33-4960-b5af-960795d94d6c) <br/>
(2)-2 Integrate the Navigation Bar <br/>
Sample code snippet <br/>
```
# ---- As sidebar menu ----
with st.sidebar:
    selected = option_menu(
        menu_title="Want to know more?",  # required
        options=["Home", "Projects", "Contact"]  # required
    )
```
Utilize the option_menu within the Streamlit sidebar to create your navigation bar. <br/>
(3) Display Content Based on Selection <br/>
Implement Conditional Displays <br/>
```
if selected == "Home":
    # --Header Section--
    # Wrap this section with streamlite container to organize the code (Optional)
    with st.container():
        st.subheader("Discover everything about me here!")
        st.title("Hi~ I'm growingpenguin!:penguin:")
        st.image(img_profile, width=300)
        st.write("I'm a senior undergraduate student specializing in Artificial Intelligence at Sungshin Women's University")
```
(4) Specify icon for each item in your options list <br/>
(4)-1 Go find the icons on the bootstrap website <br/>
Link: https://icons.getbootstrap.com/ <br/>
![QuickWebsite50](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ab23f79e-1e51-4a40-a040-f33bffcaf9d1) <br/>
All you need is the icon's name <br/>
(4)-2 Fix the code <br/>
```
# ---- As sidebar menu ----
with st.sidebar:
    selected = option_menu(
        menu_title="Want to know more?",  # required
        options=["Home", "Projects", "Contact"],  # required
        icons = ["house", "pencil", "envelope-paper-heart-fill"],
        menu_icon = "cast",
        #Index starts at 0, which is the default value for arg
        default_index=0
    )
```
(4)-3 Result <br/>
![QuickWebsite51](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a73b562f-12de-4bc0-a8d6-71555af81624) <br/>
(5) Change Orientation <br/>
```
orientation = "horizontal"
```
![QuickWebsite52](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d6eb68f9-90c6-4725-95de-48b431a65304) <br/>
(5) Add style parameters <br/>
```
styles={
        #"container": {"padding": "0!important", "background-color": "#fafafa"},
        "icon": {"color": "#white", "font-size": "14px"}, 
        "nav-link": {"font-size": "14px", "text-align": "left", "margin":"0px", "--hover-color": "#eee"},
        "nav-link-selected": {"background-color": "lightpurple"},
        }
```
![QuickWebsite53](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/99bc4691-380f-4ad3-8602-cd1cfdcf4978) <br/>
Reference: https://github.com/victoryhb/streamlit-option-menu <br/>

Reference: <br/>
https://www.youtube.com/watch?v=hEPoto5xp3k <br/>
