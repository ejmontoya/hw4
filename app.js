const express = require("express");
const app = express();

app.engine('html', require("ejs").renderFile);
app.use(express.static("public"));
//==============================================================================
//Initiate FAKER data
const fakeData = require('faker');

//First set of fake info
const randomName1 = fakeData.name.findName();
const randomCountry1 = fakeData.address.country();
const randomDate1 = fakeData.date.past();
const randomNickName1 = fakeData.random.word();
const randomHandler1 = fakeData.name.firstName();
//Second set of fake info
const randomName2 = fakeData.name.findName();
const randomCountry2 = fakeData.address.country();
const randomDate2 = fakeData.date.past();
const randomNickName2 = fakeData.random.word();
const randomHandler2 = fakeData.name.firstName();
//Third set of fake info
const randomName3 = fakeData.name.findName();
const randomCountry3 = fakeData.address.country();
const randomDate3 = fakeData.date.past();
const randomNickName3 = fakeData.random.word();
const randomHandler3 = fakeData.name.firstName();
//==============================================================================
app.get("/", function(req, res)
{ 
    res.render("index.html");
});
    
app.get("/lion", function(req, res)
{ 
    console.log("In Lion route");  
    
    res.render("lion.ejs", 
    {
        name1: randomName1,
        origin1: randomCountry1,
        date1: randomDate1,
        nick1: randomNickName1,
        handler1: randomHandler1
        
    }); 
});    
    
app.get("/tiger", function(req, res)
{ 
    console.log("In Tiger route"); 
    
    res.render("tiger.ejs", 
    {
        name2: randomName2,
        origin2: randomCountry2,
        date2: randomDate2,
        nick2: randomNickName2,
        handler2: randomHandler2
        
    }); 
});
    
app.get("/jaguar", function(req, res)
{ 
    console.log("In Jaguar route");  

    res.render("jaguar.ejs", 
    {
        name3: randomName3,
        origin3: randomCountry3,
        date3: randomDate3,
        nick3: randomNickName3,
        handler3: randomHandler3
        
    }); 
});
    

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});



