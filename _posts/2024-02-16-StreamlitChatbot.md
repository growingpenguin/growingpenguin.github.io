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
(3)EchoBot <br/>
```
if selected == "Chatbot":
    #Build a bot that mirrors your input
    #Bot will respond to your input with the same message
    #st.chat_message: Display the user's input
    #st.chat_input: Accept user input
    #session_state: Store the chat history so we can display it in the chat message container
    #What should we build?
    #(1)Two chat message containers to display messages from the user and the bot, respectively
    #(2)Way to store the chat history so we can display it in the chat message containers
    #Use a list to store the messages > Append to it every time the user or bot sends a message 
    #(Each entry in the list will be a dictionary with the following keys: role(the author of the message), and content(the message content))

    st.title("Echo Bot")
    # Initialize chat history
    if "messages" not in st.session_state:
        st.session_state.messages = []
    # Display chat messages from history on app rerun
    for message in st.session_state.messages: #For loop to iterate through the chat history and display each message in the chat message container (with the author role and message content)
        with st.chat_message(message["role"]):
            st.markdown(message["content"])
    #Check to see if the messages key is in st.session_state. 
    #If it's not, we initialize it to an empty list. 
    #This is because we'll be adding messages to the list later on, and we don't want to overwrite the list every time the app reruns

    # React to user input(:= operator to assign the user's input to the prompt variable and checked if it's not None in the same line)
    if prompt := st.chat_input("What is up?"): 
        # Display user message in chat message container
        with st.chat_message("user"):
            st.markdown(prompt)
        # Add user message to chat history
        st.session_state.messages.append({"role": "user", "content": prompt})
        #If the user has sent a message, we display the message in the chat message container and append it to the chat history.
        response = f"Echo: {prompt}"
        # Display assistant response in chat message container
        with st.chat_message("assistant"):
            st.markdown(response)
        # Add assistant response to chat history(Display the bot's response in the chat message container and add it to the history)
        st.session_state.messages.append({"role": "assistant", "content": response})
```
-session_state features help keep a record of the conversation <br/>
Feature allow your app to remember data between user interactions like a web browser's memory during a browsing session <br/>
(4)ChatGPT AI Clone <br/>
How? <br/>
Instead of returning the same prompt as the answer, want to use chatgpt <br/>
(1)Prepare Your Environment <br/>
(1)-1 Activate Your Virtual Environment
```
# Windows Command Prompt
venv\Scripts\activate.bat
```
(1)-2 Install the Required Library <br/>
```
pip install openai
```
![QuickWebsite57](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/f825d336-34e7-413b-84d1-246f3b860f82) <br/>
Reference: https://docs.streamlit.io/knowledge-base/tutorials/build-conversational-apps <br/>
(2) Create Chatgpt open-ai key <br/>
(2)-1 Login to website <br/>
![QuickWebsite58](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e2661c7a-0b69-478c-82ca-0c13928b4b0a) <br/>
Link: https://platform.openai.com/api-keys <br/>
(2)-2 Click on Create new secret key <br/>
![QuickWebsite59](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9074fb0c-111f-41e2-ba2e-e417b5690e4c) <br/>
Copy and paste it and store it elsewhere <br/>
(3) Add OpenAI API key to Streamlit secrets <br/>
(3)-1 Make a new folder called .streamlit <br/>
![QuickWebsite60](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/3e46a0d4-5ddf-43ee-aaa7-cef7c34f6a4c) <br/>
(3)-2 In the file, create a new file named secrets.toml <br/>
![QuickWebsite61](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1b222de8-d7a3-4a86-9848-c3959bb81440) <br/>
+새로 만들기 > 텍스트 문서 > Type in secrets.toml <br/>
(3)-3 Store the open-api key in the secrets.toml file <br/>
![QuickWebsite62](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/cc724e13-8657-47a7-b3c4-8faa67056b0e) <br/>
Put your open-api key and give it a name <br/>
(4) Write app <br/>
(4)-1 Import library <br/>
```
import openai
```
(4)-2 Load the api key value <br/>
```
openai.api_key = st.secrets["OPENAI_API_KEY"]
```
(4)-3 Pick the model we want to use <br/>
```
if "openai_model" not in st.session_state:
        st.session_state["openai_model"] = "gpt-3.5-turbo"
```
(4)-4 Other code stays the same <br/>
```
    if "messages" not in st.session_state:
        st.session_state.messages = []
    # Display chat messages from history on app rerun
    for message in st.session_state.messages: #For loop to iterate through the chat history and display each message in the chat message container (with the author role and message content)
        with st.chat_message(message["role"]):
            st.markdown(message["content"])
    #Check to see if the messages key is in st.session_state. 
    #If it's not, we initialize it to an empty list. 
    #This is because we'll be adding messages to the list later on, and we don't want to overwrite the list every time the app reruns

    # React to user input(:= operator to assign the user's input to the prompt variable and checked if it's not None in the same line)
    if prompt := st.chat_input("What is up?"): 
        # Display user message in chat message container
        with st.chat_message("user"):
            st.markdown(prompt)
        # Add user message to chat history
        st.session_state.messages.append({"role": "user", "content": prompt})
```
(4)-5 Tweak the response code <br/>
```
if selected == "Chatbot":
    #Build a bot that mirrors your input
    #Bot will respond to your input with the same message
    #st.chat_message: Display the user's input
    #st.chat_input: Accept user input
    #session_state: Store the chat history so we can display it in the chat message container
    #What should we build?
    #(1)Two chat message containers to display messages from the user and the bot, respectively
    #(2)Way to store the chat history so we can display it in the chat message containers
    #Use a list to store the messages > Append to it every time the user or bot sends a message 
    #(Each entry in the list will be a dictionary with the following keys: role(the author of the message), and content(the message content))

    st.title("Cloned ChatGPT-3.5")
    openai.api_key = st.secrets["OPENAI_API_KEY"]
    if "openai_model" not in st.session_state:
        st.session_state["openai_model"] = "gpt-3.5-turbo"
    # Initialize chat history
    if "messages" not in st.session_state:
        st.session_state.messages = []
    # Display chat messages from history on app rerun
    for message in st.session_state.messages: #For loop to iterate through the chat history and display each message in the chat message container (with the author role and message content)
        with st.chat_message(message["role"]):
            st.markdown(message["content"])
    #Check to see if the messages key is in st.session_state. 
    #If it's not, we initialize it to an empty list. 
    #This is because we'll be adding messages to the list later on, and we don't want to overwrite the list every time the app reruns

    # React to user input(:= operator to assign the user's input to the prompt variable and checked if it's not None in the same line)
    if prompt := st.chat_input("What is up?"): 
        # Display user message in chat message container
        with st.chat_message("user"):
            st.markdown(prompt)
        # Add user message to chat history
        st.session_state.messages.append({"role": "user", "content": prompt})
        # Display assistant response in chat message container
        with st.chat_message("assistant"):
            message_placeholder = st.empty()
            full_response = "" #full_response to an empy string
            for response in openai.ChatCompletion.create( #Call the openai api 
                model=st.session_state["openai_model"], #Pass model saved in the session states
                messages=[ #Conversation so far
                    {"role": m["role"], "content": m["content"]}
                    for m in st.session_state.messages
                ],
                stream=True, #Slowly keep the gpt response and simulate typing effect to make app interactive
            ):
                full_response += response.choices[0].delta.get("content", "") #Add chatgpt response to full_response string
                message_placeholder.markdown(full_response + "🐇 ") #Use message_placeholder to show the response so far
            message_placeholder.markdown(full_response) #Display full response one more time
        st.session_state.messages.append({"role": "assistant", "content": response}) #Add chatgpt response to the messages list (Ensure response is saved)
```
(4)-6 Fixing Error <br/>
![QuickWebsite63](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/275b6910-31b8-42a3-a93f-df52fe925251) <br/>
Reference: https://github.com/openai/openai-python/discussions/742 <br/>
![QuickWebsite64](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2558ffef-0022-4d33-88f8-7fbfd4b1f160) <br/>
cmd > 관리자 권한으로 실행 <br/>
```
wsl --install
```
![QuickWebsite65](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/c0aa169b-7513-40b5-9079-c8043a47061a) <br/>
```
wsl
```
![QuickWebsite66](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/33354514-b04c-488d-bcdb-12d897c4b458) <br/>
Run wsl <br/>
![QuickWebsite67](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d1be2b4a-0b3a-44b5-be7f-c695662f7c6d) <br/>
```
cd /mnt/d/스터디/QuickWebsite/
```
![QuickWebsite68](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5c56b0cd-ae04-41b1-9273-50064ea72ccd) <br/>
Access Your WSL Environment <br/>
```
curl -fsSL https://docs.grit.io/install | bash
source /home/[Username]/.bashrc
grit install
grit apply openai
```
(4)-7 Fixing another error <br/>
![QuickWebsite69](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/caad66da-92e7-4372-ab1f-2e4f3b45b12e) <br/>
Need to add payment <br/>
![QuickWebsite71](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1b9f15ab-f287-44ff-81ee-77ff3184e4f4) <br/>

(5) Entire code <br/>
```
from PIL import Image
import requests
import streamlit as st
from openai import OpenAI

if selected == "Chatbot":
    #Build a bot that mirrors your input
    #Bot will respond to your input with the same message
    #st.chat_message: Display the user's input
    #st.chat_input: Accept user input
    #session_state: Store the chat history so we can display it in the chat message container
    #What should we build?
    #(1)Two chat message containers to display messages from the user and the bot, respectively
    #(2)Way to store the chat history so we can display it in the chat message containers
    #Use a list to store the messages > Append to it every time the user or bot sends a message 
    #(Each entry in the list will be a dictionary with the following keys: role(the author of the message), and content(the message content))

    st.title("Cloned ChatGPT-3.5")
    if "openai_model" not in st.session_state:
        st.session_state["openai_model"] = "gpt-3.5-turbo"
    # Initialize chat history
    if "messages" not in st.session_state:
        st.session_state.messages = []
    # Display chat messages from history on app rerun
    for message in st.session_state.messages: #For loop to iterate through the chat history and display each message in the chat message container (with the author role and message content)
        with st.chat_message(message["role"]):
            st.markdown(message["content"])
    #Check to see if the messages key is in st.session_state. 
    #If it's not, we initialize it to an empty list. 
    #This is because we'll be adding messages to the list later on, and we don't want to overwrite the list every time the app reruns

    # React to user input(:= operator to assign the user's input to the prompt variable and checked if it's not None in the same line)
    if prompt := st.chat_input("What is up?"): 
        # Display user message in chat message container
        with st.chat_message("user"):
            st.markdown(prompt)
        # Add user message to chat history
        st.session_state.messages.append({"role": "user", "content": prompt})
        # Display assistant response in chat message container
        with st.chat_message("assistant"):
            message_placeholder = st.empty()
            full_response = "" #full_response to an empy string
            for response in client.chat.completions.create(#Call the openai api 
                model=st.session_state["openai_model"], #Pass model saved in the session states
                messages=[ #Conversation so far
                    {"role": m["role"], "content": m["content"]}
                    for m in st.session_state.messages
                ],
                stream=True):
                full_response += response.choices[0].delta.get("content", "") #Add chatgpt response to full_response string
                message_placeholder.markdown(full_response + "🐇 ") #Use message_placeholder to show the response so far
            message_placeholder.markdown(full_response) #Display full response one more time
        st.session_state.messages.append({"role": "assistant", "content": response}) #Add chatgpt response to the messages list (Ensure response is saved)
```

Reference: https://www.youtube.com/watch?v=sBhK-2K9bUc <br/>
