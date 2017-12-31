var btn = document.querySelector("#btn");
var price = document.querySelector("#price");
var USD = document.querySelector("#USD");
var GBP = document.querySelector("#GBP");
var EUR = document.querySelector("#EUR");
var currency = " ";


  btn.addEventListener("click", function(){
  XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function(){
    if( currency != " "){
      if(XHR.readyState == 4 && XHR.status == 200){
        var curr = JSON.parse(XHR.responseText).bpi[currency].rate;
        var code = JSON.parse(XHR.responseText).bpi[currency].code;
        price.innerHTML = curr + " " + code;
      }else{
        price.innerText = " Server Down!";
      }
    }else{
        price.innerText = " Choose a Currency!";
      }
  }
  
  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
  
  
}, false);

USD.addEventListener("click", function(){
  currency = "USD";
  
});

GBP.addEventListener("click", function(){
  currency = "GBP";
  
});

EUR.addEventListener("click", function(){
  currency = "EUR";
  
});