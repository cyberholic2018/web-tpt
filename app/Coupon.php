<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    protected $table = 'coupons';

    protected $fillable = [
        'guid',
        'serialNumber',
        'content',
        'isPublish',
        'schedulePost',
        'scheduleDelete',
        'discountType',
        'couponAmount',
        'freeShipping',
        'minimumAmount',
        'maximumAmount',
        'individualUse',
        'usageLimit',
        'usageLimitPerUser'
    ];
}
