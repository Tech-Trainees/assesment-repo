import React  from "react";


class Appointlist extends React.Component {
    constructor(props){
        super(props);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete=this.handleDelete.bind(this);
    }
    handleEdit(value){
		this.props.edit(value);
    }
	handleDelete(value){
		this.props.delete(value);
	}
  
       render(){
        return(
            <div class="container">
			<br/>
			<table class="table">
				<thead>
					<tr>
						<th>Patient</th>
						<th>Status</th>
						<th>Appointment</th>
						<th>Phone</th>
						<th>Doctor</th>
						<th>Actions</th>
					</tr>
				</thead>
                <tbody>
                    {this.props.details.map(val=>(
                            <tr >
						<td>
							<div class="user-info">
								<div class="user-info__img">
									<img src="img/prof.png" alt="User Img"/>
								</div>
								<div class="user-info__basic">
									<h5 class="mb-0">{val.name}</h5>
									<p class="text-muted mb-0">{val.age+"yrs," + val.gender}</p>
								</div>
							</div>
						</td>
						<td>
							<span class="btn btn-success">{val.status}</span>
						</td>
						<td>
							<h6 class="mb-0">{val.time}</h6>
							<small>{val.date}</small>
						</td>
						<td>
							<h6 class="mb-0">{"+91 "+val.phone}</h6>
							<a href="#!"><small>Contact</small></a>
						</td>
						<td>
							<h6 class="mb-0">{val.doctor}</h6>
						</td>
                        <td>
                            <button onClick={()=>this.handleEdit(val.name)}><i class="fa fa-pencil mr-1"></i></button>&nbsp;&nbsp;
						
                            <button onClick={()=>this.handleDelete(val.name)} ><i class="fa fa-trash mr-1"></i></button>
                        </td>
                        </tr>
                        ))
                    }
                    </tbody>
                    </table>
                </div>
        )
    }
}
export default Appointlist;