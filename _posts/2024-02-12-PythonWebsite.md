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
Caution: Make sure you are on the same directory as your python file <br/>

Reference: <br/>
https://blog.naver.com/jooeun0502/221956294941 <br/>
https://docs.streamlit.io/get-started/installation/command-line <br/>
