var inputnode = document.querySelector("#input");
var parent = document.querySelector("#parent");
var notesarry = [];

function deleteHandler(ele) {
    //   console.log("deleteHandler", ele.parentNode.parentNode);
    ele.parentNode.parentNode.remove();
  }
  
  function editHandler(ele) {

    const editPrompt = prompt("Enter edit value");
    ele.parentNode.parentNode.firstChild.textContent = editPrompt;
  }
  
  
  function foo() {
    
    // input next value
    if (input.value.length < 3) {
      alert("Enter correct notes...");
      return;
    }


    var a = "world";
  
    const UI = `<div class="alert alert-primary d-flex justify-content-between" role="alert">
         ${input.value}
          <div>
              <i onclick="editHandler(this)" class="fa-solid btn fa-pen-to-square"></i>
              <i onclick="deleteHandler(this)" class="fa-solid btn fa-trash"></i>
          </div>
        </div>`;
    console.log("UI", UI);
    parent.innerHTML += UI;
    input.value = "   ";
  }

