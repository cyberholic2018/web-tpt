<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Support extends Model
{
    protected $table = 'support';

    protected $fillable = [
        'fileName',
        'fileSize',
        'osCondition',
        'description',
        'type',
        'downloadLink',
        'locale',
    ];
}
