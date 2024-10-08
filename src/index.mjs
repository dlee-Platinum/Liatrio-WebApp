import express from 'express'; //call express function from 'express' package

const app = express(); //declare variable

const PORT = process.env.PORT || 3000; //access environment variable for port or use port 3000 if port is undefined.

//listen for port request
app.listen(PORT, ()=> {
    console.log(`Running on Port ${PORT}`);

});
