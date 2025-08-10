require("http").createServer((request,response)=>{
  response.end("Hello World");
}).listen(3000);