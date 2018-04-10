<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gift extends Model
{
    protected $table = 'gifts';

    protected $fillable = [
        'guid',
        'title',
        'shortDescription',
        'description',
        'featureImage',
        'scheduleUp',
        'scheduleDown',
        'customField1',
        'customField2',
        'customField3',
    ];
}
