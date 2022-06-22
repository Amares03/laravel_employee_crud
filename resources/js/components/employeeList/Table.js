import React, { Component } from 'react';
import axios from 'axios';


class Table extends Component {
        constructor(props){
            super(props);
            this.state = {
                employees: [],
            }
        }

        // Life cycle Method
        componentDidMount(){
            this.getEmployeeList();
        }

        // Get Employee List.
        getEmployeeList = ()=>{
                axios
                .get('/get/employee/list')
                .then(function (response){
                    console.log(response)
                })
             }




    render(){
        return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope='col' width='100px'>#</th>
                                    <th scope='col' width='100px'>Name</th>
                                    <th scope='col' width='100px'>Salary</th>
                                    <th scope='col' width='100px'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>1</th>
                                    <td>Amir</td>
                                    <td>SIraj</td>
                                    <td>@me</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}




export default Table;