
var responseElemnt = document.getElementById("responseElement");
var urlElem = document.getElementById("url");
/* var url = "http://exaomple.com/api/get/1" */
var url = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";
var xhr;


function get() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = callback;
  xhr.send();
 
  function callback() {
  console.log(xhr);
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      console.log(response);
      responseElement.innerHTML = JSON.stringify(response, null, 2);
    } else {
      console.log(xhr.statusText);
      responseElement.innerHTML = xhr.statusText;
    }
  }
}