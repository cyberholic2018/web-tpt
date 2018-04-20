<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    protected $fillable = [
        'id',
        'guid',
        'title',
        'serialNumber',
        'quantity',
        'author',
        'authorName',
        'category',
        'featureImage',
        'album',
        'status',
        'locale',
        'rule',
        'rate',
        'command',
        'reserveStatus',
        'isPublish',
        'price',
        'discountedPrice',
        'description',
        'shortDescription',
        'productInformation',
        'socialImage',
        'seoTitle',
        'seoKeyword',
        'seoDescription',
        'schedulePost',
        'scheduleDelete'
    ];
}
