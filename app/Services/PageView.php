<?php

namespace App\Services;

use App\Page;
use App;

class PageView
{
    public static function get($id)
    {
        $page = Page::where('id', $id)->first();

        $content = json_decode($page['content']);
        return $page;
        // if ($content['locale']) {
        //     # code...
        // } else {
        //     # code...
        // }

    }

    public static function show($id)
    {
        $page = Page::where('id', $id)->first();

        $content = json_decode($page['content']);
        return $content->content;
    }
}
