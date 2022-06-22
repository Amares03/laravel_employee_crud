<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use Log;
use App\Models\Employee;

class EmployeesController extends Controller
{
    // Get employee list from database
    public function getEmployeeList(){
        try {
            $employees = Employee::orderBy('id','DESC')->get();
            return response()->json($employees);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    // Get individual employee data from database
    public function getEmployeeDetails(Request $request){
        try {
            $employeeData = Employee::findOrFail($request->get('employeeId'));
            return response()->json($employeeData);
        } catch (Exception $e) {
            Log::error($e);
        }
    }


    // updating employee data
    public function updateEmployeeData(Request $request){
        try {
            $employeeId = $request->get('employeeId');
            $employeeName = $request->get('employeeName');
            $employeeSalary = $request->get('employeeSalary');

             Employee::where('id',$employeeId)->update([
                'employee_name' => $employeeName,
                'salary'   => $employeeSalary
            ]);

            return response()->json([
                'employee_name' => $employeeName,
                'salary'   => $employeeSalary
            ]);

        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
