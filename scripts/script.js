let exc = document.getElementById('exc');
exc.onclick = function(){
    exchange();
}
function exchange(){

    let temp =document.getElementById('langs').value; 
    document.getElementById('langs').value = document.getElementById('transFrom').value;
    document.getElementById('transFrom').value = temp;
    console.log(document.getElementById('transFrom').value)
    let tem = document.getElementById('que').value
    document.getElementById('que').value = document.getElementById('res').value;
    document.getElementById('res').value = tem;
}

function check(){
   if(document.getElementById('langs').value !== "" ||document.getElementById('transFrom').value !== "")
   {
       debouncing(translte, 100)
   } 
}
async function translte(){
    var query = document.getElementById('que').value
    var userLanguage = document.getElementById('transFrom').value;
    var tar =  document.getElementById('langs').value;
    var res = await fetch("https://libretranslate.de/translate", {
 method: "POST",
 body: JSON.stringify({
     q: query,
     source: userLanguage,
     target: tar
 }),
 headers: { "Content-Type": "application/json" }
});
  
   let t = await res.json();
   console.log(t)
   document.getElementById('res').value = t.translatedText;
 }
var timeout;
 function debouncing(func, delay)
 {
     if(timeout)
     {
         clearTimeout(timeout)
     }
     timeout = setTimeout(()=>{
        if(document.getElementById('que').value != ""&& document.getElementById('langs').value != "" &&document.getElementById('transFrom').value != "" )
        {
         document.getElementById('res').value = "Translating...";
            func()
        }
        if(document.getElementById('que').value == "")
        {
         document.getElementById('res').value = ""
        }
     },delay)
    if(document.getElementById('langs').value == "" ||document.getElementById('transFrom').value == "" )
    {
     document.getElementById('que').value != ""
     document.getElementById('res').value = "Please Select Both Languages";
    }
 }