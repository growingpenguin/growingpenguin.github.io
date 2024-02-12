---
layout: post
title:  "Build a website fast using python"
---

# Build a website fast using python
## Introduction to Building Website
Website is entirely written in python and mobile responsive <br/>
What will be used: Streamlit library <br/>
## Process
### Prerequisites
(1) Access to the streamlit website and navigate to Quickstart<br/>
https://docs.streamlit.io/streamlit-community-cloud/get-started <br/>
(2) Create an environment using venv <br/>
```
D: 
python -m venv venv 
```
![QuickWebsite6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2e1afeda-8d8d-4e2d-b0a2-7e49d4eefa29) <br/>
(3) Activate your environment <br/>
```
# Windows Command Prompt
venv\Scripts\activate.bat
```
(4)Install streamlit library <br/>
![QuickWebsite7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/7b19ef31-c436-4e3c-980f-e1c0819f329d) <br/>
(5)Confirm whether streamlit library is properly installed <br/>
```
(venv) D:\스터디\QuickWebsite>streamlit hello
```
![QuickWebsite9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2144f3cb-f11d-469c-93b0-0b4d32a9ba13) <br/>
![QuickWebsite10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/95c9d619-acbb-43f5-832c-44c1b98012d4) <br/>
(6)Deactivate Environment <br/>
```
(venv) D:\스터디\QuickWebsite>streamlit hello
```
### 1.Create new python file 
![QuickWebsite3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/fa0ca907-5249-4ab0-9b53-8c9b91780246) <br/>
Right click mouse > +새로 만들기 > 텍스트 문서> Change the file name to app.py <br/>
### 2.Open up the script using the preferred text editor
![QuickWebsite4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/35a24d2b-7e9d-49da-9d61-03b152782dbe) <br/>
Opened the script using visual studio code <br/>
(Right click file > 연결 프로그램 > Select Visual Studio Code) <br/>
### 3.Write Script (Header Part)
![QuickWebsite5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/148f3774-c66c-44e5-8ff4-a19cbf05f8ac) <br/>
### 4.Middle Check 
```
# Windows Command Prompt
venv\Scripts\activate.bat
```
Activate environment <br/>
```
(venv) D:\스터디\QuickWebsite>streamlit run app.py
```
![QuickWebsite12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5b0b03d3-6811-49cc-8553-7d54ff477530) <br/>
![QuickWebsite11](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/98e6df16-b542-4f4c-85f6-3b2deb7b08b7) <br/>
How the website looks like <br/>
Clicking learn more also redirects me to the respective website <br/>
Caution: Make sure you are on the same directory as your python file <br/>
### 5.Write Script (Left Column)
```
# ---- Where? ----
# Wrap the following elements in a seperate streamlite container to organize the code (Optional)
with st.container():
    # Insert divider using st.write() using three hyphens
    st.write("---")
    #Insert two columns
    left_column1, right_column1 = st.columns(2)
    with left_column1:
        st.header("Fabulous restraunts near ApgujeongRodeo")
        st.write("##")
        st.write(
            """
            Blue ribbon restraunts and elegant and lovely atmosphere, just what you need for Valentine's Day
            """
        )
        st.write("[Search for more in Naver >](https://map.naver.com/p/search/%EC%95%95%EA%B5%AC%EC%A0%95%20%EB%A7%9B%EC%A7%91?searchType=place)")
```
![QuickWebsite14](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c2f08028-ded6-4c00-846d-35bb25d5b675) <br/>
### 6.Middle Check 
![QuickWebsite15](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a223aeb5-9b95-4bf2-b23f-e7766abcb0bc) <br/>
### 7.Insert Animation next to the text
Insert Lottie file for animation <br/> 
Lottie file is a json based animation format. Files are small and welcome any device and scale up or down without any pixelation  <br/>
7-1. Visit the website:  <br/>
https://lottiefiles.com/ <br/>
7-2. Search for the animation you like:  <br/>
![QuickWebsite16](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ce322b94-9a6b-4aa2-a3de-555ac5b16a26) <br/>
7-3. Copy link from the Asset link & Embed corner <br/>
![QuickWebsite17](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5f80068a-b359-4e82-8eaa-8ab7a3dfbf87) <br/>
7-4. Copy and paste the asset link to the script <br/>
```
# ---- LOAD ASSETS ----
lottie_coding = "https://lottie.host/embed/efbad0ce-60c5-47ba-89dc-cee400fdb3d9/AI3dWyvZav.json"
```
![QuickWebsite18](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/44cab0d4-d595-4bb6-ad43-f06c7bd3b1ee) <br/>
7-5. Install dependencies for lottie
```
# Windows Command Prompt
venv\Scripts\activate.bat
```
Activate your environment <br/>
```
(venv) D:\스터디\QuickWebsite>pip install streamlit-lottie
```
![QuickWebsite19](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1d4e9c36-9168-4afd-a374-6d190faa1698) <br/>
Install lottie library <br/>
![QuickWebsite20](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2404b167-7848-41c7-9c92-82f1fa7dc858) <br/>
Install requests library <br/>
7-6. Write the dependencies import in the script
```
import requests
from streamlit_lottie import st_lottie
```
![QuickWebsite21](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/fb7eea7d-5cfd-44f5-93e5-cb44db4c8415) <br/>
7-7. Create a new function to access the json file of the lottie information <br/>
```
# Function to access the json data of the lottie animation 
def load_lottieurl(url):
    r = requests.get(url) # Get request of the url
    if r.status_code != 200: # If the request is successful, it will return a status code of 200
        return None # If something goes wrong, return nothing
    return r.json() # Otherwise, return the json data of the lottie animation
         
# ---- LOAD ASSETS ----
lottie_coding = load_lottieurl("https://lottie.host/embed/efbad0ce-60c5-47ba-89dc-cee400fdb3d9/AI3dWyvZav.json")
```
![QuickWebsite22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/83952482-cea2-41f0-801c-47936efe7944)




Reference: <br/>
https://blog.naver.com/jooeun0502/221956294941 <br/>
https://docs.streamlit.io/get-started/installation/command-line <br/>
