let inputtaker=document.getElementById("enter-box");
let button=document.getElementById("task-adder");

button.onclick=function(){
      if(inputtaker.value==""){
            alert("Enter You Task Empty Can't be Taken");
      }
      else{
      let selection=document.getElementById("tasks");
      let items=document.createElement("li");
      items.innerText=inputtaker.value;
      selection.appendChild(items);
     
      inputtaker.value="";
      }
}
