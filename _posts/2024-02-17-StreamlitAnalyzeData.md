---
layout: post
title:  "Data Analysis Website"
---

# Preparation
(1)Prepare Your Environment <br/>
(1)-1 Access to the streamlit website and navigate to Quickstart<br/>
https://docs.streamlit.io/streamlit-community-cloud/get-started <br/>
(1)-2 Create an environment using venv <br/>
```
D: 
python -m venv venv 
```
![QuickWebsite6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/2e1afeda-8d8d-4e2d-b0a2-7e49d4eefa29) <br/>
(1)-3 Activate Your Virtual Environment
```
# Windows Command Prompt
venv\Scripts\activate.bat
```
(1)-4 Install streamlit library <br/>
```
pip install streamlit
```
(1)-5 Confirm whether streamlit library is properly installed <br/>
```
streamlit hello
```
![DataWebsite1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/eb126a7d-2575-4585-a36d-d30ad8ae5e55) <br/>
(1)-6 Create new python file 
![QuickWebsite3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/fa0ca907-5249-4ab0-9b53-8c9b91780246) <br/>
Right click mouse > +새로 만들기 > 텍스트 문서> Change the file name to dataapp.py <br/>
(1)-7 Open up the script using the preferred text editor <br/>
![QuickWebsite4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/35a24d2b-7e9d-49da-9d61-03b152782dbe) <br/>
Opened the script using visual studio code <br/>
(Right click file > 연결 프로그램 > Select Visual Studio Code) <br/>
(1)-8 Install Required Libraries <br/>
```
pip install pandas #Required
pip install seaborn  #Required
pip install matplotlib  #Required
pip install numpy #Required
pip install requests
pip install streamlit_lottie
pip install streamlit_option_menu
```
(1)-8 <br/>
Underlying code I used <br/>
```
import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import requests
from streamlit_lottie import st_lottie
from streamlit_option_menu import option_menu


#Set basic page configurations such as page_title, icon, and layout
#Places for finding Emojis: https://www.webfx.com/tools/emoji-cheat-sheet/
st.set_page_config(page_title="Play with Data", page_icon = ":heart_hands:", layout="wide") 
#If user selects one of the options, will be stored in my variable "selected"
if selected == "Home":
    # --Header Section--
    # Wrap this section with streamlite container to organize the code (Optional)
    with st.container():
        st.subheader("Explore Data Analysis, and DL without writing a single line of code")
        st.title("Welcome to growingpenguin data analysis site")
        st.write("[Github Account >](https://growingpenguin.github.io/)")
        #Insert two columns
        left_column1, right_column1 = st.columns(2)
        with left_column1:
            st_lottie(lottie_coding2, height=300, key="coding1")
        with right_column1:
            st_lottie(lottie_coding, height=300, key="coding2")

if selected == "Contact":
    st.title(f"Feel free to {selected} me anytime")
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

```


(1)-9 Additional css file I used for the contact form <br/>
Create folder style > Copy and paste the style.css file <br/>

(1)-10 Additional .toml file used for changing theme <br/>
Create folder .streamlit > Copy and paste the style.css file <br/>

(2) Load Data Function <br/>
(2)-1 Load Data Function Main Function Code <br/>
```
def load_data():
    '''
    loads the selected file into a dataframe
    stores the selected file and dataframe in st.session_state
    '''
    # check if the dataframe df in st.session_state and is not blank
    if 'df' in st.session_state and st.session_state['df'] is not None: 
        #Checks if a DataFrame (df) already exists in st.session_state and is not None
        #Avoid reloading the DataFrame from the file if it's already been loaded previously.
        df=load_data_2_dataframe(st.session_state['selected_file'])        
   
    #If the df does not exist in sesssion state then populate it       
    else:
        file = st.file_uploader("Upload a file", type=['csv']) #File Uploader Widget(Creates a file uploader widget in the Streamlit app, allowing the user to upload a file of type CSV. The uploaded file is assigned to the variable file)
        if file is not None:
            st.session_state['selected_file'] = file #Store the uploaded file in st.session_state under the key 'selected_file' for future access
            df=load_data_2_dataframe(st.session_state['selected_file']) #Passing the newly uploaded file to load it into a DataFrame. The resulting DataFrame is stored in the variable df
```
(2)-2 Load Data to DataFrame Function Code <br/>
```
def load_data_2_dataframe(file):
    #Input Parameters
    #----------
    #file : the file needs to be of type CSV
    #Description
    #-------
    #Loads the data from the CSV file into a pandas dataframe 
    #Returns
    #-------
    #session_state containing dataframe df
    #''' 
    if 'df' not in st.session_state: #Checks if the df key (representing a DataFrame) does not already exist in Streamlit's session_state
        df= pd.read_csv(file) #Read csv file 
        st.session_state['df'] = df #Update session state
        st.dataframe(df) #Display Dataframe
    else: #Handling Already Loaded DataFrame
        st.dataframe(st.session_state['df'])
    return st.session_state['df']
```
(3) Data Visualization Function <br/>
```
# Display the data analysis page with an option to show a correlation graph (heatmap)
def data_page():
    """
    Display the data analysis page with an option to show a correlation graph.

    This version of the function filters the DataFrame to include only numeric columns
    before calculating the correlation matrix and generating the heatmap.
    It also displays which columns were dropped for not being numeric.
    """
    if 'df' in st.session_state and st.session_state['df'] is not None:  # Checking for DataFrame Existence
        df = st.session_state['df']
        
        # Identify numeric columns
        numeric_df = df.select_dtypes(include=[np.number])
        
        # Identify dropped (non-numeric) columns
        dropped_columns = df.select_dtypes(exclude=[np.number]).columns

        # Checkbox to choose whether to display the correlation graph
        graph_type = st.checkbox('Correlation graph')
        
        if graph_type:
            # Create a matplotlib figure for the heatmap
            fig, ax = plt.subplots(figsize=(10, 10))
            
            # Generate the heatmap for the numeric dataframe's correlation matrix
            sns.heatmap(numeric_df.corr(), annot=True, cmap="coolwarm", fmt=".2f", linewidths=.5, ax=ax)
            
            # Display the plot in Streamlit
            st.pyplot(fig)
            # Display dropped columns
            if dropped_columns.empty:
                st.write("No columns were dropped. All columns are numeric.")
            else:
                # Join the column names into a single string for a more compact, horizontal display
                dropped_columns_str = ", ".join(dropped_columns)
                st.write("The following non-numeric columns were dropped:")
                st.write(f"{dropped_columns_str}")
                
        graph_type2 = st.checkbox('Line graph')
        if graph_type2:
            # Allow users to select columns for plotting
          selected_columns = st.multiselect('Select columns to plot:', df.columns)
          if selected_columns:
              # Create a figure for the line plot
              fig, ax = plt.subplots()
            
              # Plot the data for each selected column
              for column in selected_columns:
                  ax.plot(df.index, df[column], label=column)  # Ensure df.index is used for the x-axis
            
              # Set the chart attributes
              ax.set_xlabel('X Axis')  # Adjust as necessary
              ax.set_ylabel('Y Axis')  # Adjust as necessary
              ax.set_title('Line Chart of Selected Columns')
              ax.legend()
            
              # Display the line plot in Streamlit
              st.pyplot(fig)
```
(4) Download plotted graph as png button <br/>
```
from io import BytesIO
# Function to download the plot as a png
def get_image_download_link(fig, filename="plot.png", caption="Download plot as PNG"):
    # Create a BytesIO buffer to save the plot
    buffer = BytesIO()
    fig.savefig(buffer, format="png", bbox_inches="tight")  # Save the plot to the buffer
    buffer.seek(0)  # Move to the beginning of the buffer

    # Create the download button
    return st.download_button(
        label=caption,
        data=buffer,
        file_name=filename,
        mime="image/png"
    )
```


Reference: <br/>
https://medium.com/@arshren/building-interactive-predictive-machine-learning-workflow-with-streamlit-330188c7ead0 <br/>
