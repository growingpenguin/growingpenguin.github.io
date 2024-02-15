---
layout: post
title:  "Insert Navigation Bar"
---

# Insert Navigation Bar
## Place Navigation Bar inside the Sidebar <br/>
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


