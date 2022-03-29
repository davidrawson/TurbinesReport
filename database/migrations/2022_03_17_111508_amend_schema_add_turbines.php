<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AmendSchemaAddTurbines extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->populateTable();
    }

    /**
     * populateTable
     *
     * @return void
     */
    public function populateTable() {
        $turbines = [
            [
                'turbineName' => 'Dalry CFM 1',
                'siteId' => 'DCFM1',
                'lat' => '55.729',
                'lng' => '-4.783'
            ],
            [
                'turbineName' => 'Dalry CFM 2',
                'siteId' => 'DCFM1',
                'lat' => '55.732',
                'lng' => '-4.786'
            ],
            [
                'turbineName' => 'Dalry CFM 3',
                'siteId' => 'DCFM1',
                'lat' => '55.730',
                'lng' => '-4.777'
            ],
            [
                'turbineName' => 'Dalry CFM 4',
                'siteId' => 'DCFM1',
                'lat' => '55.732',
                'lng' => '-4.779'
            ],
            [
                'turbineName' => 'Dalry CFM 5',
                'siteId' => 'DCFM1',
                'lat' => '55.736',
                'lng' => '-4.782'
            ],
            [
                'turbineName' => 'Dalry CFM 6',
                'siteId' => 'DCFM1',
                'lat' => '55.736',
                'lng' => '-4.788'
            ],
        ];

        foreach ($turbines as $turbine) {
            DB::table('turbines')->insert($turbine);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('turbines')->where('siteID', '=', 'DCFM1')->delete();
    }
}
