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
            $employees = Employee::all();
            return response()->json($employees);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
