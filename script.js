document.getElementById("button").addEventListener("click",()=>{
    str=document.getElementById("name").value;
    if(str.length>25){
        alert("Name should be less than 25 characters");
    }
    alert("Successfully registered");
})