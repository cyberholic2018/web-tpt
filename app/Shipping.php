<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shipping extends Model
{
    protected $table = 'shippings';

    protected $fillable = [
        'shippingTitle',
        'shippingPrice',
        'shippingType',
        'shippingTemperature',
        'freeShipping',
        'freeShippingMininum',
    ];
}
