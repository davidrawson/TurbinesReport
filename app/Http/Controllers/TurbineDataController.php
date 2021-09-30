<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Models\Turbine;
use App\Http\TurbineComponents\Turbine;

class TurbineDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $stores = Turbine::all()->pluck('storeNumber', 'storeName');
        // $stores = Turbine::all();

        // $stores = ['first' => "1", "second" => "2"];
        // json_encode($stores);
        $turbineReport = $this->generateTurbineReport();

        return $turbineReport;
    } 

    private function generateTurbineReport()
    {
        $turbine = new Turbine(100);
        return $turbine->report();
    }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id = null)
    {
        // $store = Store::where('storeNumber', $id)->get();
        // return $store;
    }
}
