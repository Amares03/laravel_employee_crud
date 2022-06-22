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
}
