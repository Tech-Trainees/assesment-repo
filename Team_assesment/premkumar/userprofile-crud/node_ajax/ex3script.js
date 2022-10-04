

function fetchuser() {
    
    var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        loadUsers(this.responseText);
    }
    };
    xhttp.open("GET", "http://127.0.0.1:8000/user", true);
    xhttp.send();
}

function loadUsers(data){
    
    var json =JSON.parse(data);
    let str = "";
    for(let i=0; i<json.length; i++){
         str+=`<div class="user">
        <div> <img class="ppicture" id="ppicture`+json[i].userId+`" src="`+json[i].profilePicture+`"></div>
        <div class="name">`+json[i].name+`</div>
        <div class="status">`+json[i].statusMessage+`</div>
        </div>`
    }
    
    document.getElementById("div1").innerHTML = str;
    presence(json);
    presence(json);
}

function presence(json){
    //var json=JSON.parse(json);
    for(i=0;i<json.length;i++){
        document.getElementById('ppicture'+json[i].userId).style.borderColor =
        json[i].presence==1 ? 'green' :
        json[i].presence==2 ? 'red' :
        json[i].presence==3 ? 'yellow' : 'grey';      
    }

}


function addUser()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    //document.getElementById("demo").innerHTML = this.responseText;
  }
  };
  var newuser=prompt("Enter user Id");
  var newname=prompt("Enter user name");
  var newstatus=prompt("Enter updated status");
  var newdisplayPic=prompt("Enter Url of user picture");
  var newpresen=prompt("Enter prescence");
  myJson={
    "userId": newuser,
    "name": newname,
    "profilePicture": newdisplayPic,
    "statusMessage": newstatus,
    "presence": newpresen
}
    xhttp.open("POST", "http://127.0.0.1:8000/user", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(myJson));

  fetchuser();
  fetchuser();
 }

function deleteuser() {
    var id = prompt('Enter user id to delete:')
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    //
    }
    };
    alert("Are u sure u want to delete...!");
    xhttp.open("DELETE", "http://127.0.0.1:8000/user"+id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    fetchuser();
   }

function updateStatus(){
    var id=prompt("Enter User Id" );
    var stats=prompt("Enter New Status ");  

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    //document.getElementById("demo").innerHTML = this.responseText;
    }
    };
    xhttp.open("PUT", "http://127.0.0.1:8000/user"+id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({"statusMessage":stats}));
    fetchuser();
   fetchuser();
    }

function updatepresence(){
    var id=prompt("Enter User Id" );
    var presen=prompt("Enter New prescence: ");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    //document.getElementById("demo").innerHTML = this.responseText;
    }
    };
    xhttp.open("PUT", "http://127.0.0.1:8000/presence/user"+id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({"presence":presen}));
   alert("Updated successfully");
   
   fetchuser();
   fetchuser();
   fetchuser();
}
