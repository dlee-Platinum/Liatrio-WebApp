import express from 'express'; //call express function from 'express' package

const app = express(); //declare variable

const PORT = process.env.PORT || 3000; 
//access environment variable for port 
// or use port 3000 if port is undefined.

const epochTime = Math.floor(Date.now() /100000);
// Math.floor method rounds a number down to nearest integer
//Date.now method is used to get the current timestamp in milliseconds
//Get epoch time in seconds
const jsonObject = { epochTime };

app.get("/",(request,response) =>{
    response.send({message: "My name is David Lee", timestamp: epochTime});

});

    //THESE ARE FOR API CODE
//app.get("/api/",(request,response) => {
  //  response.send(),
//});

//using route parameter
//app.get('/api/', (request,response) => {
    
//})

//listen for port request
app.listen(PORT, ()=> {
    console.log(`Running on Port ${PORT}`);
});