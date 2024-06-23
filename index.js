let h = document.querySelector("h1");
let b = document.querySelector("button");
let num = 0;

let quote = [];

fetch("https://type.fit/api/quotes")
.then(response =>{
   return response.json();

}).then(data =>{
    console.log(data);
    quote = data;
}).catch(error =>{
    console.log('fetch error :',error);
});
b.addEventListener("click", () =>{
    num++
    h.innerText = quote[num].text
});