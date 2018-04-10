<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';

    protected $fillable = [
        'guid',
        'owner',
        'content',
        'amount',
        'merchantID',
        'pointUsage',
        'status',
        'paymentStatus',
        'paymentMethod',
        'shippingMethod',
        'Temperature',
        'orderStatus',
        'ExpireDate',
        'BankCode',
        'PaymentType',
        'vAccount',
        'receipt',
        'taxId',
        'isSimulate',
        'remarks',
        'orderFlag',
        'shippingTarget',
    ];
}
