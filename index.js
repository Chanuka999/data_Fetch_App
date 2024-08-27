const data = document.getElementById("data");
const list = document.getElementById("list");

let url = "https://jsonplaceholder.typicode.com/post";

fetch(url)
   .then(function(responce){
    return responce.json();
   })