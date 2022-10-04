
import './App.css';
import React  from 'react';


class App extends React.Component{
  constructor ()
    {
      super();
      this.state={
        error: null,
        user:[],
      };
      this.updateStatus = this.updateStatus.bind(this);
      this.updatepresence = this.updatepresence.bind(this);
      this.deleteuser = this.deleteuser.bind(this);
      this.addUser = this.addUser.bind(this);
    }
  componentDidMount(){
    fetch("http://127.0.0.1:8000/user")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            user: result,

          });
        },
      )
  }


  addUser()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
    //document.getElementById("demo").innerHTML = this.responseText;
  }
  };
  var newuser=prompt("Enter user Id");
  var newname=prompt("Enter user name");
  var newstatus=prompt("Enter updated status");
  var newdisplayPic=prompt("Enter Url of user picture");
  var newpresen=prompt("Enter prescence");
 
    xhttp.open("POST", "http://127.0.0.1:8000/user", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify({"userId": newuser,
  "name": newname,
  "profilePicture": newdisplayPic,
  "statusMessage": newstatus,
  "presence": newpresen}));

  this.componentDidMount();
 }

 deleteuser() {
    var id = prompt('Enter user id to delete:')
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
    //
    }
    };
    alert("Are u sure u want to delete...!");
    xhttp.open("DELETE", "http://127.0.0.1:8000/user"+id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    this.componentDidMount();
   }

 updateStatus(){
    var id=prompt("Enter User Id" );
    var stats=prompt("Enter New Status ");  

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
    //document.getElementById("demo").innerHTML = this.responseText;
    }
    };
    xhttp.open("PUT", "http://127.0.0.1:8000/user"+id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({"statusMessage":stats}));
    this.componentDidMount();
 
    }

 updatepresence(){
    var id=prompt("Enter User Id" );
    var presen=prompt("Enter New prescence: ");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
    //document.getElementById("demo").innerHTML = this.responseText;
    }
    };
    xhttp.open("PUT", "http://127.0.0.1:8000/presence/user"+id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({"presence":presen}));
   alert("Updated successfully");
   
   this.componentDidMount();
  
}
  render (){
    const { error, user } = this.state;
  return (
    <div className='arrange'>
      
         {user.map(item => (
            <div className='div1'>
              <img src={"./pics/"+item.profilePicture} className ={"img" + item.presence} style={{width: 82 , height: 82}} ></img>   
              <div className='detail'><h2 className='name'>{item.name}</h2>
              <p>{item.statusMessage}</p></div> 
            </div>
          
          ))}
          <div className='btn'>
            <button style={{background:"#6fd98b"}} onClick={this.addUser} >Add user</button><br/>
            <button style={{background:"#93abed"}} onClick={this.updatepresence} >Update Presence</button><br/>
            <button style={{background:"#c2cc50"}} onClick={this.updateStatus} >Update Status</button><br/>
            <button style={{background:"#e05e63"}} onClick={this.deleteuser} >Delete User</button>
            </div> 
    </div>
  )
  }

}

export default App;
