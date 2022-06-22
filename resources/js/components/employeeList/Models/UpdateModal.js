import React, { Component } from 'react';




class UpdateModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            employeeName:null,
            employeeSalary:null,
        }
    }

    // updating employee name state 
    inputEmployeeName = (event) =>{
        this.setState({
            employeeName:event.target.value,
        });
    }

    // updating employee salary state 
    inputEmployeeSalary = (event) =>{
        this.setState({
            employeeSalary:event.target.value,
        });
    
    }


    static getDrivedStateFromProps(props, current_state){
        let employeeUpdate = {
            employeeName: null,
            employeeSalary: null,
        }

        if(current_state.employeeName !== props.employeeData.currentEmployeeName){
            employeeUpdate.employeeName = props.employeeData.currentEmployeeName;
        }
        
        if(current_state.employeeSalary !== props.employeeData.currentEmployeeSalary){
            employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary;
        }

        return employeeUpdate;
    }

    // Update employee data
    updateEmployeeData = ()=>{

    }

    render(){
        return(            
            <div className="modal fade" id={"updateModal" + this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className='form'>
                            <div className='form-group'>
                                <input type="text" 
                                       id='employeeName'
                                       onChange={this.inputEmployeeName}
                                       value={this.state.employeeName ?? ""}
                                />
                            </div>
                            <div className='form-group'>
                                <input type="text" 
                                       id='employeeSalary'
                                       onChange={this.inputEmployeeSalary}
                                       value={this.state.employeeSalary ?? ""}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <input type="submit" 
                                className='btn btn-info'
                                value='Update'
                                onClick={this.updateEmployeeData}
                            />
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateModal;