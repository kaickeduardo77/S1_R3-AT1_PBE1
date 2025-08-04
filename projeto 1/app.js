const express = require('express');

 
 const app = express();



 const PORT =8081
 
 app.listen(PORT, ()=>{
       console.log(`servidor de usuarios na porta ${PORT} `);    
 });