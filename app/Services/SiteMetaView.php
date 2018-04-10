<?php

namespace App\Services;

use App\SiteMeta;

class SiteMetaView
{
    public static function title()
    {
        try {
            return SiteMeta::all()->first()['title'];
        } catch (\Exception $e) {
            return 'CyberHolic';
        }
    }

    public static function shortcut()
    {
        try {
            return SiteMeta::all()->first()['shortcut'];
        } catch (\Exception $e) {
            return '/favicon.ico';
        }
    }

    public static function keyword()
    {
        try {
            return SiteMeta::all()->first()['keyword'];
        } catch (\Exception $e) {
            return 'keyword';
        }
    }

    public static function description()
    {
        try {
            return SiteMeta::all()->first()['description'];
        } catch (\Exception $e) {
            return 'description';
        }
    }

    public static function album()
    {
        try {
            return json_decode(SiteMeta::all()->first()['index_album']);
        } catch (\Exception $e) {
            return json_decode(array());
        }
    }

    public static function pageTopLink()
    {
        try {
            return SiteMeta::all()->first()['pageTopLink'];
        } catch (\Exception $e) {
            return json_decode(array());
        }
    }

    public static function pageTopButton()
    {
        try {
            return SiteMeta::all()->first()['pageTopButton'];
        } catch (\Exception $e) {
            return json_decode(array());
        }
    }

    public static function pageTopContent()
    {
        try {
            return SiteMeta::all()->first()['pageTopContent'];
        } catch (\Exception $e) {
            return json_decode(array());
        }
    }
}
