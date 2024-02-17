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
(1)-5 Install Required Libraries <br/>
```
pip install pandas
pip install seaborn
pip install matplotlib
```
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
(3) Load Data Function <br/>

