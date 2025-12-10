const express = require('express');
console.log(express);                      // Displays the express methods

const app=express();
const PORT=3000;
app.use(express.json());
const users=[{"id":100,"name":"Hari prasath G","age":21,"city":"Perundurai"},
    {"id":200,"name":"Harish Kannnan","age":20,"city":"Perundurai-RS"}
]

app.get("/users", (req, res) => {
    res.json(users);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port number ${PORT}`);
})



// const express = require("express");
// const app = express();
// const port = 5000;

// app.use(express.json());

// let users = [{
//     "id": 100,
//     "name": "John Doe",
//     "email": "admin@gmail.com"
// }, {
//     "id": 200,
//     "name": "Ram ",
//     "email": "ram@gmail.com"
// }, {
//     "id": 300,
//     "name": "Rani ",
//     "email": "rani@gmail.com"
// }];

// app.get("/users", (req, res) => {
//     res.status(200).json(users);
// })


// app.post("/insertuser", (req, res) => {
//     const newUser = {
//         id: req.body.id,
//         name: req.body.name,
//         email: req.body.email,
//     }
//     users.push(newUser);
//     res.status(201).json({ message: "New user inserted successfully" })
    
// })


// //api to get user based on userID 
// app.get("/user/:id", (req, res) => {
//     const urlID = Number(req.params.id);
//     const filteredUser = users.find((u) => u.id == urlID);
//     //condition if user not found
//     if (!urlID) {
//         res.status(404).json({ message: "User Not found" })
//     }
//     else{
//         res.status(500).json({ message: `Check the user ID ${urlID} not present` })

//     }
//     res.status(200).json({ 
//         name:filteredUser.name ,
//         email:filteredUser.email
//      })
// })

// //delete user details based on ID
// app.delete("/deleteuser/:id", (req, res)=>{
//     const urlID=Number(req.params.id);
//      users=users.filter((u)=>u.id!=urlID)
//      if(!urlID){
//         res.status(500).json({message:"user id not found please check user ID"})
//      }
//     res.status(200).json({message:"Deleted successfully"})
// })

// app.listen(port, () => {
//     console.log(`Server is running on URL : http://localhost:${port}`);
// })
