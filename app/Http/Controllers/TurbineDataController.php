<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Turbine;
use App\Http\TurbineComponents\TurbineReport;

class TurbineDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $turbines = Turbine::all()->pluck('turbineId', 'lat', 'lng');
        $turbines = Turbine::all();

        // $stores = ['first' => "1", "second" => "2"];
        // json_encode($stores);
        // $turbineReport = $this->generateTurbineReport();

        return $turbines;
    } 

    // private function generateTurbineReport()
    // {
    //     $turbineReport = new TurbineReport(100);
    //     return $turbineReport->report();
    // }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id = null)
    {
        $turbine = Turbine::where('id', $id)->get();

        // $turbineReport = $this->generateTurbineReport();
        $turbineReport = new TurbineReport($turbine);
        return $turbineReport->report();
    }
}
