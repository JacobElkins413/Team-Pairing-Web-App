
function allowDrop(pairObject){
    if (!document.getElementById("testToggle").checked) {
      pairObject.preventDefault();
        }
    }

function drag(pairObject){
    pairObject.dataTransfer.setData("text", pairObject.target.id);
    }

function drop(pairObject){
    pairObject.preventDefault();
    var data = pairObject.dataTransfer.getData("text");
    pairObject.target.appendChild(document.getElementById(data));
    }
  
function deleteName(deletePairName){
    var data = deletePairName.dataTransfer.getData("text");
    document.getElementById(data).remove();
    }

function resetPairs() {
    var pairContainers = document.getElementsByClassName("pairBoxContent");
    for (var i = 0; i < pairContainers.length; i++){
        var container = pairContainers[i];
        document.getElementById("divPairs").innerHTML += container.innerHTML;
        container.innerHTML = "";
    }
    }
function randomizePairs(){
    var unassignedPairs = document.getElementById("divPairs").getElementsByClassName("pairshape");
    var randomGroupBoxes = document.getElementById("groupContainer").getElementsByClassName("pairboxcontent");

    for (var i = 0; i < unassignedPairs.length; i++){
        var boxIndex = Math.floor(Math.random() * randomGroupBoxes.length)
        randomGroupBoxes[boxIndex].innerHTML += unassignedPairs[i].outerHTML;
    } 
    document.getElementById("divPairs").innerHTML = "";
}   
    
function addNewPairObject(){
        var personName = prompt("Please enter your name:");
        if(personName == "" || personName == null){
            alert("No Name Enter")
        }else{
        document.getElementById("divPairs").innerHTML += makePairObject(personName);
        }
    }
    var pairCounter = 1
function makePairObject(name){
     var pair = "<div align='center' class='pairShape' id='drag" + pairCounter + "' draggable='true' ondragstart='drag(event)'>"
     pair += name + "</div>"
     pairCounter++;

     return pair;
    }
function addNewGroupObject(){
        var groupName = prompt("Please enter group name: ");
        if(groupName == "" || groupName == null){
            alert("No Group Name Entered")
        }else{
            document.getElementById("groupContainer").innerHTML += makeGroupObject(groupName);
            }
        }
    var groupCounter = 1
function makeGroupObject(group){
    if (group == "" || group == null) group = "Group " + groupCounter;
     var box = '<div class="pairbox" id="pairbox' + groupCounter + '">'+
             '<div class="pairBoxHeader">'+
                 '<div class="pairBoxNameSpace" id="groupName' + groupCounter + '" contenteditable="true">' + group + '</div>'+
                 '<div class="deleteTopRight">'+
                     '<button id="deleteGroupButton" onclick="deleteGroupBox(' + groupCounter + ')">X</button>'+
                 '</div>'+
             '</div>'+
         '<div class="pairBoxContent" id="innerbox' + groupCounter + '" ondrop="drop(event)" ondragover="allowDrop(event)"></div>'+
     '</div>'
     groupCounter++;

     return box;
    }

function editGroupName(){
    document.getElementById("groupName1").contentEditable = true;
    }

function deleteGroupBox(groupId){
    var group = document.getElementById("pairbox"+groupId);
    var container = document.getElementById("innerbox"+groupId);

    document.getElementById("divPairs").innerHTML += container.innerHTML;
    group.remove();
    }

function initialize() {
    var pairBox = document.getElementById("divPairs")
    pairBox.innerHTML += makePairObject("Don");
    pairBox.innerHTML += makePairObject("Carl");
    pairBox.innerHTML += makePairObject("Jacob");
    pairBox.innerHTML += makePairObject("Mark");
    pairBox.innerHTML += makePairObject("Pookie");
    pairBox.innerHTML += makePairObject("Faith");

    var groupBox = document.getElementById("groupContainer")
    groupBox.innerHTML += makeGroupObject()
    groupBox.innerHTML += makeGroupObject()
    groupBox.innerHTML += makeGroupObject()
    }   
