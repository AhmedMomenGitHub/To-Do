const textBox = document.getElementById('textBox');
const list = document.getElementById('list');
const addButton = document.getElementById('add');
var alertWindow = document.getElementById('alertwindows');
var alertButton = document.getElementById('alertButton');




addButton.onclick = function(){
    if( textBox.value ===''){
        alertWindow.style.scale = '1';

        alertButton.onclick= function(){
            alertWindow.style.scale = '0';

            
            }

        }
    
    else {
        const li = document.createElement("li");  
        li.innerHTML = textBox.value;
        list.appendChild(li);
        let del = document.createElement("span");
        del.innerHTML = " ";
        li.appendChild(del);
       
    }
    textBox.value ='';
    saveData();

}

list.onclick = function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }

       
    
      else if(e.target.tagName === "SPAN"){

        e.target.parentElement.remove();
        saveData();

      }
    }
    function saveData(){
        localStorage.setItem("data",list.innerHTML);
    }

    function showData(){
        list.innerHTML = localStorage.getItem("data");
    }
    showData();