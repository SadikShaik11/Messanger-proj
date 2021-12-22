const { json } = require('body-parser');
const express = require('express');
const file = require('fs');
const route = express.Router();
let wr=file.createWriteStream('messages.txt')
route.use('/login', (req, res, next)=>{
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="">
	<input id="username" type="text" name"title">:Name

	<button type="submit">add</button>
</form>`) 
res.redirect('/')
}

)
route.get('/',(req,res,next)=>{
    res.send(`
    <html>
<head>
    <title>logeg</title>
</head>
<body>
    <form action="/finish" method="post">
        <input type="text" id="message">:message
        <button type="submit">Send</button>
    </form>
    <script>
 const message=document.querySelector('#message')
const values=localStorage.getItem('username')
message.setAttribute('name',values)
    </script>
</body>
</html>
    `) 

})
route.post('/finish',(req,res,next)=>{
    let s=req.body;
   let msgs=JSON.stringify(s);
  wr.write(`${msgs}\n`)
  res.redirect('/end')
})
route.use('/end',(req,res)=>{
    file.appendFile
res.send('<h1>message sent<h1>')
})

module.exports = route;