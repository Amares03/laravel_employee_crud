import React, { Component } from 'react';
import ViewModel from './Models/ViewModel';
import axios from 'axios';



class TableActionButtons extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentEmployeeName : null,
            currentEmployeeSalary : null,
        }
    }

    // Getting employees data
    getEmployeeDetails = (id) =>{
        axios
        .post('/get/individual/employee/details',{
            employeeId: id,
        }).then((response)=>{
            this.setState({
                currentEmployeeName : response.data.employee_name,
                currentEmployeeSalary : response.data.salary,
            })
        })
    }


    render(){
        return(
                <div className="btn-group" role="group">
                    <button
                     type="button" 
                     className="btn btn-primary"
                      data-bs-toggle="modal" 
                      data-bs-target={"#viewModal"+this.props.eachRowId}
                      onClick={()=>{this.getEmployeeDetails(this.props.eachRowId)}}
                      >
                        View
                        </button>
                        <ViewModel modalId= {this.props.eachRowId} employeeData={ this.state }/>




                    <button type="button" className="btn btn-info">Update</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            
        )
    }
}

export default TableActionButtons;