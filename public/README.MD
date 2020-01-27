# The Barbershop Final Project

### Framework and libraries  
1. React  
2. JQuery Cookie  
3. React DOM  
4. JS Jash Code  
5. Redux  
6. React Router Redirect  
7. Bootstrap  
8. h2 database on server

### Short Description
The program is a collection of components and containers. Components are responsible for rendering and containers are intended for  
1. Sending requests to the [backend](https://github.com/Snezzz/barbershop_be)  
2. Getting data from store - necessary states  
3. Formation of props for the silly component  

You can find folders that contain both containers and components. It was done for convenience.
The main idea of project is that we have constant components such as ```<Header/>```, ```<Navigation/>```, ```<RegistrationContainer/>```
and ```<Footer/>```.
It is placed in ```<Main/>``` main component for convenience. We can consider it the root component.  
Cookies are used for convenience (only for user's data). There are two types of user: admin and regular user. Admin can see all orders, user 
can see only his orders. Orders are divided into 3 types: active (orders that will always take place), canceled (orders that admin or user has cancelled)
and archived (orders that were finished). If the user has not clicked into the office, he is registered as a guest and must fill 
in the phone number and name. User can choose time and day of selected service. Data that loading from database are:   
1. User data. User can change it and to send new data to database;  
2. Services list;  
3. Information about each service;  
4. Records of user;  
5. Company information;  
6. List of discounts;  

There are 4 groaps of actions: ```userActions```, ```recordsActions```, ```serviceActions``` and ```companyActions```; and 5 reducers:
```rootReducer```, ```companyReducer```, 
```recordsReducer```, ```serviceReducer``` and ```userReducer```. There is one main ```state``` that contains user, services, service, records, login (true/false), discounts 
and information data.  The project is adjusted to different screen sizes.

### First steps
First of all, you have to clone [backend part](https://github.com/Snezzz/barbershop_be)   of project and run it. If you do not do it, you will have problems.  
Then  
##### 1. `npm i `
##### 2. `npm start`
The peculiarity is that the backend gives access to the server only for ```http://localhost:3000/```. So if you try to get data from another url, you 
will have problems too. Or you can change new url on backend in folder ```Controllers```.  
The backend is based on ```Java```, ```Spring Boot```, ```MVC``` and ```REST API```. 

