
let inputField = document.getElementById("firstname");
let checkBox = document.getElementById("checkbox");
let submitBtn = document.getElementById("submitBtn").addEventListener('click', () =>{

    if(inputField.value == "" || checkBox.checked == false){
        alert("Please, Fill all the details")
    }
})


 


  