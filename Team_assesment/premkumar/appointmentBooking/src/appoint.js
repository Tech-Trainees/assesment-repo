import React from "react";
import Appointlist from "./appointlist.js";


class Appoint extends React.Component {
    constructor(props){
        super(props);
        this.state = {              
            name :"",
            age:"",
            gender:"",
            status:"",
            date:"",
            time:"",
            phone:"",
            doctor:"",
            patientDetails:[]
        }
        this.handleName = this.handleName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleDoctor = this.handleDoctor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteRow=this.deleteRow.bind(this);
        this.editRow=this.editRow.bind(this);
    }
    handleName(e){
        this.setState({ name:e.target.value});
    }
    handleAge(e){
        this.setState({ age:e.target.value});
    }
    handleGender(e){
        this.setState({ gender:e.target.value});
    }
    handleStatus(e){
        this.setState({ status:e.target.value});
    }
    handleDate(e){
        this.setState({ date:e.target.value});
    }
    handleTime(e){
        this.setState({ time:e.target.value});
    }
    handlePhone(e){
        this.setState({ phone:e.target.value});
    }
    handleDoctor(e){
        this.setState({ doctor:e.target.value});
    }
    handleSubmit(){

        if(this.state.name===null||this.state.name===""){
			alert("Patient Name must be filled.");
			return ;
		}
		else if(!/^[A-Za-z.\s]+$/.test(this.state.name)){
			alert("Patient Name must be in Alphabets only.");
			return ;
		}
		if(this.state.age===null||this.state.age===""){
			alert("Age must be filled.");
			return ;
		}
		else if(isNaN(this.state.age)||this.state.age<1||this.state.age>100){
			alert("Age must be between 1 to 100");
			return ;
		}
		if(this.state.phone===null||this.state.phone===""){
			alert("Phone Number must be filled.");
			return ;
		}
		else if(isNaN(this.state.phone)||this.state.phone.length!=10){
			alert("Phone Number must be in 10 digits only.");
			return ;
		}
		if(this.state.date===null||this.state.date===""){
			alert("Date must be filled.");
			return ;
		}
		// else if(!/^([0-9]{2})-([A-Za-z]{3})-([0-9]{4})$/.test(this.state.date)){
		// 	alert("Date must be type in 01-Jan-2022 this patren only.");
		// 	return ;
		// }
		if(this.state.time===null||this.state.time===""){
			alert("Time must be filled.");
			return ;
		}
		else if(!/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])?$/.test(this.state.time)){
			alert("Time must be between 00:00 to 23:59 only.");
			return ;
		}
		if(this.state.doctor===null||this.state.doctor===""){
			alert("Doctor Name must be filled.");
			return ;
		}
		else if(!/^[A-Za-z.\s]+$/.test(this.state.doctor)){
			alert("Doctor Name must be in Alphabets only.");
			return ;
		}



        this.setState({ patientDetails: [...this.state.patientDetails,{"name":this.state.name,"age":this.state.age,"gender":this.state.gender,"status":this.state.status,"date":this.state.date,"time":this.state.time,"phone":this.state.phone,"doctor":this.state.doctor}]});
           
            this.setState({
                name :"",
                age:"",
                gender:"",
                status:"",
                date:"",
                time:"",
                phone:"",
                doctor:""
            })
    }
    deleteRow(val){
        var row=this.state.patientDetails
          for(var i=0;i<row.length;i++){
              if(row[i]["name"]===val){
                  row.splice(i,1)
              }
          }
          this.setState({patientDetails:row})
          
      }
      
    editRow(val){
        var row=this.state.patientDetails
        for(var i=0;i<row.length;i++){
            if(row[i]["name"] === val){
                this.setState({"name":row[i].name,"gender":row[i].gender,"age":row[i].age,"phone":row[i].phone,"date":row[i].date,"time":row[i].time,"doctor":row[i].doctor,"status":row[i].status})
                row.splice(i,1)
                break;
            }
        }
    }

    render (){
    return (
        <div>
        <section class="form-content">
            <div class="container register-form">
            <div class="form">
                <div class="note">
                    <p>Welcome to  Doctor Appointment Booking</p>
                </div>

                <div class="form-content">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Patient Name *" onChange={this.handleName} value={this.state.name}/>
                            </div>
                            <div class="form-group">
                                <select  class="form-control" placeholder="Select Male/Female *" onChange={this.handleGender} value={this.state.gender}>
                                <option name="M">Male</option>
                                <option name="F">Female</option> 
                                </select>                               
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Age *" onChange={this.handleAge} value={this.state.age}/>
                            </div>

                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Phone Number *" onChange={this.handlePhone} value={this.state.phone} />
                            </div>
                            <div class="form-group">
                                <input type="date" class="form-control" placeholder="Date *" onChange={this.handleDate} value={this.state.date}/>
                            </div>

                            <div class="form-group">
                                <input type="time" class="form-control" placeholder="Time *" onChange={this.handleTime} value={this.state.time}/>
                            </div>

                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Doctor Name *" onChange={this.handleDoctor} value={this.state.doctor}/>
                            </div>
                            <div class="form-group">
                                <select  class="form-control" placeholder="Select Consule/Revisit *" onChange={this.handleStatus} value={this.state.status}>
                                <option name="Consult">Consult</option>
                                <option name="Revisit">Revisit</option> 
                                </select>                               

                            </div>
                        </div>

                    </div>
                    <button type="button" class="btnSubmit" onClick={this.handleSubmit}>Book Appointment</button>
                </div>
            </div>
        </div>
	</section>
    <Appointlist details={this.state.patientDetails} delete={this.deleteRow} edit={this.editRow}/>
	</div>
    )
    }
}
export default Appoint;