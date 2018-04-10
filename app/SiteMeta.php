<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SiteMeta extends Model
{
    protected $table = 'site_meta';

    protected $fillable = [
        'title',
        'keyword',
        'description',
        'shortcut',
        'pageTopContent',
        'pageTopLink',
        'pageTopButton',
        'index_album'
    ];

}
