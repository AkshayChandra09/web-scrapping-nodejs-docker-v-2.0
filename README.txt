
*******************************************************  READ ME  *********************************************************

Student Name: Akshay Chandrachood
Github repo: https://github.com/AkshayChandra09/web-scrapping-nodejs-docker-v-2.0



******************************************************************************************************************************
							
						Project Description

******************************************************************************************************************************

This is a Web-Scraping project.
I have collected data from eBay website. Here is the link: https://www.ebay.com/b/Cell-Phones-Smartphones/9355/bn_320094?_ipg=25
I collected data for cellphone category under eBay website. This data can be further used for analytics purpose.
For example, if you want to analyse how many iphone 10 are available on eBay website or how many Samsung phones are available 
on eBay website. Currently, the data is stored in MongoDB database. Data is displayed in raw format, but in subsequent versions 
of this project you will see nice front end with analytics feature.     

********************************************************************************************************************************

Technologies used: 
NodeJS 8.12.0-alpine, MongoDB: 3.4, Github, Docker

******************************************************************************************************************************** 
Functionality:
Once script is started, web crawler will go to the above mentioned link and fetch records. It will store records in output.json file.
There will be 5000+ records. These records will be stored in MongoDB database.
Database name: ebay_db
Collection name: phones

********************************************************************************************************************************
							
						How To RUN ?

********************************************************************************************************************************

First clone the repository using following steps or download it as zip file. 

1. Open git bash(Windows user) or shell command prompt(Linux users) 
2. Type: "git clone https://github.com/AkshayChandra09/web-scrapping-nodejs-docker-v-2.0"

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

PART 1: Running locally without Docker
=============================================================================
- For this part it is assumed that you have MongoDB(version 3.4 or above)
  and NodeJS(version 7 or above) installed on your local machine. 
- To check version of NodeJS type following command in command prompt:
	"node --version"
- To check version of MongoDB click on start bar. Search for MongoDB
=============================================================================
1. Open command prompt
2. Go to the directory where project files are located. Navigate using "cd" command.
  e.g. cd C:\Users\userName\Desktop
       cd web_scrapping	


3. Start MongoDB server. 
	3.1 Go to the directory where MongoDB set-up files are located. eg. C:\Program Files\MongoDB\Server\3.4\bin
	3.2 Open application "mongod". Minimize that window.
	3.3 Open application "mongo". You can use this console to create database and look for tables/collections.
	3.4 First time users should create new database with name "ebay_db" using command "use ebay_db" 
 
3. Start the project using following command: node index.js

4. Open the browser and hit following url: "localhost:8080" or "127.0.0.1:8080" 

=============================================================================
=============================================================================

PART 2: Running with Docker
=============================================================================
- For this part it is assumed that you have docker installed on your machine. 
- To check version of Docker type following command in command prompt:
	"docker --version"
- If it says "docker" command not found then download and install from 
  https://www.docker.com/get-started 
=============================================================================
*For first time complete steps 1 and 2. Next time onwards do step 3 only 
1. Type following command "docker build -t web-scrapping ."
2. docker-compose up

*This step is for returning users
3. docker run -p 8080:8080 web-scrapping
___________________________________________________________________________________________________________________________

Note: Please do not reload the page.