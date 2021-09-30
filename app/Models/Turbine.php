<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Turbine extends Model
{
    protected $fillable = [
        'turbineId',
        'turbineName',
        'address',
        'siteId',
        'lat',
        'lon',
    ];
}