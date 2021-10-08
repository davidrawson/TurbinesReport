<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateTurbinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('turbines', function (Blueprint $table) {
            $table->id();
            $table->string('turbineName', 255)->nullable();
            $table->string('siteId', 4)->nullable();
            $table->string('lat', 20)->nullable();
            $table->string('lng', 20)->nullable();
        });

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
                'turbineName' => 'Ardrossan 1',
                'siteId' => 'Ard1',
                'lat' => '55.679',
                'lng' => '-4.806'
            ],
            [
                'turbineName' => 'Ardrossan 2',
                'siteId' => 'Ard1',
                'lat' => '55.679',
                'lng' => '-4.810'
            ],
            [
                'turbineName' => 'Ardrossan 3',
                'siteId' => 'Ard1',
                'lat' => '55.682',
                'lng' => '-4.811'
            ],
            [
                'turbineName' => 'Ardrossan 4',
                'siteId' => 'Ard1',
                'lat' => '55.685',
                'lng' => '-4.812'
            ],
            [
                'turbineName' => 'Ardrossan 5',
                'siteId' => 'Ard1',
                'lat' => '55.684',
                'lng' => '-4.806'
            ],
            [
                'turbineName' => 'Ardrossan 6',
                'siteId' => 'Ard1',
                'lat' => '55.682',
                'lng' => '-4.806'
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
        Schema::dropIfExists('turbines');
    }
}
