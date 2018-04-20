<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    protected $table = 'partners';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'guid',
        'name',
        'addressString',
        'link',
        'partnerType',
        'partnerLocation',
        'locale',
        'longitude',
        'latitude'
    ];
}
