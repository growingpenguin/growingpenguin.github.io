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
streamlit hello
```
![QuickWebsite9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2144f3cb-f11d-469c-93b0-0b4d32a9ba13) <br/>
![QuickWebsite10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/95c9d619-acbb-43f5-832c-44c1b98012d4) <br/>
(6)Deactivate Environment <br/>
```
deactivate
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
7-8. Write the right column to insert the animation <br/>
```
with right_column1:
        st_lottie(lottie_coding, height=300, key="coding")
```
![QuickWebsite23](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/01f7412e-659e-49f8-9664-d25e132744ad) <br/>
7-9. Animation loaded <br/>
![QuickWebsite24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c8d8af31-84b6-49ef-9f85-dc322e2c5c0f) <br/>

### 8.Showcase work 
```
# ----Presents----
with st.container():
    # Insert divider using st.write() using three hyphens
    st.write("---")
    st.header("Sweets")
    st.write("##")
    #text column is twice as big as the image
    image_column, text_column = st.columns((1, 2))
    with image_column:
        # Insert image
    with text_column:
        # Paste information 
        # Display title in the subheader
        st.subheader("How to make a Bark Chocolate")
        # Description 
        st.write(
            """
            Learn how to use make Bark Chocolate
            Reference: 빈콩 Binkong Youtube Channel
            """
        )
        # Link for the respective video
        st.markdown("[Watch Video...](https://www.youtube.com/watch?v=LzyAsRrl5BA)")
```
![QuickWebsite25](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/47f74854-c42d-417f-9a10-d91b56760ab9) <br/>

### 9.Showcase work in script
![QuickWebsite26](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3c65e743-c2e1-40c9-b447-93e2e755d6bb) <br/>

### 10. Insert images in web app
10-1. Activate your environment <br/>
```
# Windows Command Prompt
venv\Scripts\activate.bat
```
10-2. Install Pillow library <br/>
```
(venv) D:\스터디\QuickWebsite>pip install Pillow
```
![QuickWebsite27](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/18b83dd3-16d6-43b5-b67e-24e38ee9c0e4) <br/>
10-3. Navigate to work directory of my project <br/>
![QuickWebsite28](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b4c3c942-1427-4239-a5ac-ffcfe3b26aba) <br/>
10-4. Create a new folder called images <br/>
![QuickWebsite29](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d504cab5-f9af-4767-90d4-0faecfdbaa7c) <br/>
10-5. Add the images I want to add in the images folder <br/>
![QuickWebsite30](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1f049e6f-d5a9-4ed4-9f35-eeccc7993c8c) <br/>
10-6. Import Image from PIL  <br/>
```
img_chocolatebark = Image.open("images/chocolate_bark.jpg")
```
10-7. Load images  <br/>
```
with image_column:
  # Insert image
  st.image(img_chocolatebark)
```
Now ready to display images on the website <br/>
10-8. Result: <br/>
![QuickWebsite31](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b7ddc1d9-1935-496f-8e7e-1909f73d8b2e) <br/>
### 11. Create a contact form
11-1.Head into free service of formsubmit <br/>
Link:  https://getform.io <br/>
11-2.Sign Up and Create a New Form <br/>
![QuickWebsite32](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c11d1078-996a-4066-a053-e9c3945ef17b) <br/>
11-3.Copy the Form endpoint <br/>
![QuickWebsite33](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b12c4027-1921-4c49-9dbe-40d8bf56334a) <br/>
11-4. Insert fully functioning contact form <br/>
```
# ----Contact----
with st.container():
    # Insert divider using st.write() using three hyphens
    st.write("---")
    st.header("Get In Touch With Me!")
    st.write("##")
    # Documentation: 
    contact_form = """
    <form action="https://getform.io/f/9bea6965-f7ef-4386-8aa8-24e5b5b7f425" method="POST">
      <input type="text" name="name" placeholder="Your name" required>
      <!-- add hidden Honeypot input to prevent spams -->
      <input type="hidden" name="_gotcha" style="display:none !important">
      <input type="email" name="email" placeholder="Your email" required>
      <input type="text" name="message" placeholder="Your message here" required>
      <button type="submit">Send</button>
    </form>
    """
    #Avoid contact form to take the entire screen width
    left_column5, right_column5 = st.columns(2)
    with left_column5:
        #Use markdown field and insert the contact form
        st.markdown(contact_form, unsafe_allow_html=True)
    with right_column5:
        st.empty()
    """
```
11-5. Inject this html code to our web app <br/>
```
    #Avoid contact form to take the entire screen width
    left_column5, right_column5 = st.columns(2)
    with left_column5:
        st.markdown(contact_form, unsafe_allow_html=True)
    with right_column5:
        st.empty()
```
11-6. Result <br/>
![QuickWebsite34](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/ee1edd6e-fd5a-4dc9-b436-6db6d5642b2d) <br/>
11-7. Testing Form Submission <br/>
![QuickWebsite35](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a3449cf7-364e-49bb-b4a6-392298d3b783) <br/>
![QuickWebsite36](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9efe7a03-d8c2-4a75-9e74-6998baaf9e42) <br/>
![QuickWebsite37](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2b02c353-b0e3-4663-96b2-dab25f3e04a7) <br/>
Can see the new submission in my inbox with name, email, and message in https://app.getform.io/ <br/>
### 12. Styling
12-1. Create a new directory for styling <br/>
![QuickWebsite38](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5e5cfaa5-e42c-4d02-99ee-cfa70fe40be7) <br/>
Create a new folder called style <br/>
12-2. Paste a pre-written css file <br/>
![QuickWebsite39](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e9e4cdcd-284f-417d-8b50-73fa49ab24f5) <br/>
12-3. Inject the css code in our web app <br/>
(Option: Take the entire code and insert it into markdown field) <br/>
```
# Function to use local CSS
def local_css(file_name):
    with open(file_name) as f:
        st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)
```
![QuickWebsite40](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/322cd322-a9b2-4fb8-84bc-7e7fed14a163) <br/>
More elegant solution:  <br/>
Take file name as arg, open the file and insert the content in a html file tag <br/>
```
local_css("style/style.css")
```
![QuickWebsite41](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/45fa5bd1-4684-45e9-b69e-b3a149ed1d75) <br/>
Call the function with style.css file <br/>
12-4. Result <br/>
![QuickWebsite42](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e06a5d5f-ec87-45d5-a5a7-968a5f64febb) <br/>
Button looks much better than before and the button has a hover effect as well <br/>
### 13. Change theme
13-1. Create a new directory for theme <br/>
![QuickWebsite43](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/96668376-825d-42ff-9d75-c4b3f0c51ee9) <br/>
Create a .streamlit directory in the root folder of your application <br/>
13-2. Create a config.toml app file <br/>
![QuickWebsite44](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/6343bc1b-fff4-4ccc-a855-41f5769631a8) <br/>
13-3. Copy paste from the streamlit <br/>
![QuickWebsite45](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a9027732-d180-4e83-958a-3a55063716bb) <br/>
Grab the code from the streamlit blog and paste it to the config file <br/>
Reference: https://blog.streamlit.io/introducing-theming/ <br/>
13-4. Adjust the color codes <br/>
![QuickWebsite46](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/719abf00-365a-487b-aa7b-d4652554a3f9) <br/>
Use pink color the interactive elements <br/>
13-5. Restart the session <br/>
(Nothing will happen after reload) <br/>
![QuickWebsite47](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/137de900-7b57-4a27-b144-8d0ee6fb25d0) <br/>
Stop current session by pressing ctrl+c <br/>
13-6. Restart the app <br/>
![QuickWebsite48](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5e4b8e0e-2b12-4fbd-a258-57b69cd2a0ef) <br/>


Reference: <br/>
https://blog.naver.com/jooeun0502/221956294941 <br/>
https://docs.streamlit.io/get-started/installation/command-line <br/>
https://www.youtube.com/watch?app=desktop&v=VqgUkExPvLY <br/>
