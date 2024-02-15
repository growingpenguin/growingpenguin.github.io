---
layout: post
title:  "Chatbot Website"
---

# Check version of streamlit
(1)Prepare Your Environment <br/>
(1)-1 Activate Your Virtual Environment
```
# Windows Command Prompt
venv\Scripts\activate.bat
```
(1)-2 Install the Required Library <br/>
```
pip install streamlit --upgrade
```
![QuickWebsite54](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/72cadae0-e455-447f-a73c-a56515d9c26a) <br/>

(2)Simple Example <br/>
```
if selected == "Chatbot":
    st.title("Hello Bot")
    #Places for finding Emojis: https://www.webfx.com/tools/emoji-cheat-sheet/
    with st.chat_message("user"):
        st.write("Hello 👋")
```
![QuickWebsite55](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/780f8035-99d5-43b3-b1e7-14c77fff6b83) <br/>


