<?php

namespace App\Http\Controllers;

use App\Models\Turbine;
use App\Http\TurbineComponents\TurbineReport;

class TurbineDataController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        $turbines = Turbine::all();

        return $turbines;
    } 
    
    /**
     * show
     *
     * @param  mixed $id
     * @return void
     */
    public function show($id = null)
    {
        $turbine = Turbine::where('id', $id)->get();
        $turbineReport = new TurbineReport($turbine);

        return $turbineReport->report();
    }
}
