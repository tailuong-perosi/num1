var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

var server = require("http").Server(app);
var io= require("socket.io")(server);
server.listen(3000);

//lắng nghe sự kiện
io.on("connection",function(socket){
    console.log("co nguoi ket noi: "+socket.id);

    socket.on("disconnect",function(){
        console.log("co nguoi ngat ket noi: "+socket.id);
    });
});



app.get("/",function(req,res){
    res.render("trangchu");
});