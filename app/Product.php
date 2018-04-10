<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Product extends Model
{
    use Searchable;

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
        'Temperature',
        'status',
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

    /**
     * get index
     */
    public function searchableAs()
    {
        return 'products_index';
    }
}
