<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'guid',
        'author',
        'authorName',
        'title',
        'category',
        'content',
        'locale',
        'featureImage',
        'seoTitle',
        'seoKeyword',
        'socialImage',
        'seoDescription',
        'isPublish',
        'schedulePost',
        'scheduleDelete'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];

    public function author() {
        return $this->hasOne('App\User', 'guid', 'author');
    }
}
