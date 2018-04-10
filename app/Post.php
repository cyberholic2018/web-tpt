<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Post extends Model
{
    use Searchable;

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
     * get index
     */
    public function searchableAs()
    {
        return 'posts_index';
    }

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
