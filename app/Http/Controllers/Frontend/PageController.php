<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\SiteMeta;
use App\Support;
use App\Product;
use App\Partner;
use App\Post;
use App\Category;
use App\Page;
use App;
use ithome;

class PageController extends Controller
{
    public function index()
    {
        // $meta = SiteMeta::all()->first();
        //
        // if (count($meta) == 0) {
        //     $title = 'none';
        //     $shortcut = 'https://dummyimage.com/50x50/000/fff&text=?';
        // } else {
        //     $title = $meta->title;
        //     $shortcut = $meta->shortcut;
        // }
        //
        // $album = json_decode($meta->index_album);

        return view('index', [
            // 'ithomeData' => ithome::get(3),
            // // 'title' => $title,
            // // 'shortcut' => $shortcut,
            // 'album' => $album
        ]);
    }

    public function getPartners(Request $request)
    {
        $data = $request->all();

        if (($data['partnerLocation'] == null) && ($data['partnerType'] != null)) {
            return Partner::where('partnerType', $data['partnerType'])->where('locale', App::getLocale())->get();
        } elseif (($data['partnerLocation'] != null) && ($data['partnerType'] == null)) {
            return Partner::where('partnerLocation', $data['partnerLocation'])->where('locale', App::getLocale())->get();
        } elseif (($data['partnerLocation'] == null) && ($data['partnerType'] == null)) {
            return Partner::where('locale', App::getLocale())->get();
        } else {
            return Partner::where('partnerType', $data['partnerType'])
                    ->where('partnerLocation', $data['partnerLocation'])
                    ->where('locale', App::getLocale())->get();
        }


    }

    public function about()
    {
        $meta = SiteMeta::all()->first();

        switch (App::getLocale()) {
            case 'en':
                $pageContent = Page::where('guid', '5ijCnUd84SDhYTf9lTLyLasXaQiXyluGsO7Xut50ox')->first();
                break;
            case 'zh-TW':
                $pageContent = Page::where('guid', 'VfPqc0TI0xTA1jweQN72295wi4OXPgWeJOz5DeTueS')->first();
                break;
        }

        if (count($meta) == 0) {
            $title = 'none';
            $shortcut = 'https://dummyimage.com/50x50/000/fff&text=?';
        } else {
            $title = $meta->title;
            $shortcut = $meta->shortcut;
        }

        return view('frontend.no-sidebar.index', [
            'pageContent' => $pageContent,
            'title' => $title,
            'shortcut' => $shortcut,
        ]);
    }

    public function repair()
    {
        $meta = SiteMeta::all()->first();

        switch (App::getLocale()) {
            case 'en':
                $pageContent = Page::where('guid', 'MmTg8YLooAZU08iBncdxRBgEH3Pz2tTk9ieOH5OjlZ')->first();
                break;
            case 'zh-TW':
                $pageContent = Page::where('guid', 'aSoH3yi1KTSbZvFvXNI7nFtVqrlUBTYacLsimPkj9L')->first();
                break;
        }

        if (count($meta) == 0) {
            $title = 'none';
            $shortcut = 'https://dummyimage.com/50x50/000/fff&text=?';
        } else {
            $title = $meta->title;
            $shortcut = $meta->shortcut;
        }

        return view('frontend.no-sidebar.index', [
            'pageContent' => $pageContent,
            'title' => $title,
            'shortcut' => $shortcut,
        ]);
    }

    public function qna()
    {
        $meta = SiteMeta::all()->first();

        switch (App::getLocale()) {
            case 'en':
                $pageContent = Page::where('guid', 'RcrcmHJieRfxDitNXMGXO3ubnKKIEonQC2LJOVhx4a')->first();
                break;
            case 'zh-TW':
                $pageContent = Page::where('guid', 'GEKv6ewFoLUnI7rWTBpIAS3edtEwBXeAoRxTJVdKCO')->first();
                break;
        }

        if (count($meta) == 0) {
            $title = 'none';
            $shortcut = 'https://dummyimage.com/50x50/000/fff&text=?';
        } else {
            $title = $meta->title;
            $shortcut = $meta->shortcut;
        }

        return view('frontend.no-sidebar.index', [
            'pageContent' => $pageContent,
            'title' => $title,
            'shortcut' => $shortcut,
        ]);
    }

    public function solutionEducation()
    {
        $meta = SiteMeta::all()->first();

        switch (App::getLocale()) {
            case 'en':
                $pageContent = Page::where('guid', 'i2sB4fDISWaepN0gmBirni6Cqqk9gjepnZD4WBzWLH')->first();
                break;
            case 'zh-TW':
                $pageContent = Page::where('guid', 'fsNQsBo5VrWiNDAGNEMecBc6NcWYFdHNt3oliXwWFT')->first();
                break;
        }

        if (count($meta) == 0) {
            $title = 'none';
            $shortcut = 'https://dummyimage.com/50x50/000/fff&text=?';
        } else {
            $title = $meta->title;
            $shortcut = $meta->shortcut;
        }

        return view('frontend.no-sidebar.index', [
            'pageContent' => $pageContent,
            'title' => $title,
            'shortcut' => $shortcut,
        ]);
    }

    public function solutionGovernment()
    {
        $meta = SiteMeta::all()->first();

        switch (App::getLocale()) {
            case 'en':
                $pageContent = Page::where('guid', 'ZQhh3iU6QVzlZ1RAw5Td4Enb621aO64kkj3oqW5F8x')->first();
                break;
            case 'zh-TW':
                $pageContent = Page::where('guid', 'mDl5tUjKyPZSyLMuMRjtlJLxoq9yl8Kqg86WFxRr5B')->first();
                break;
        }

        if (count($meta) == 0) {
            $title = 'none';
            $shortcut = 'https://dummyimage.com/50x50/000/fff&text=?';
        } else {
            $title = $meta->title;
            $shortcut = $meta->shortcut;
        }

        return view('frontend.no-sidebar.index', [
            'pageContent' => $pageContent,
            'title' => $title,
            'shortcut' => $shortcut,
        ]);
    }

    public function solutionEnterprise()
    {
        $meta = SiteMeta::all()->first();

        switch (App::getLocale()) {
            case 'en':
                $pageContent = Page::where('guid', 'TqjuCnM3vYbNvQmJ53pTAkfGkWxnPEUuEYhXcST9te')->first();
                break;
            case 'zh-TW':
                $pageContent = Page::where('guid', 'POz71QqGcIRqw6sDaEiM6tdr0j7xmXxJAT4XAgrBD8')->first();
                break;
        }

        if (count($meta) == 0) {
            $title = 'none';
            $shortcut = 'https://dummyimage.com/50x50/000/fff&text=?';
        } else {
            $title = $meta->title;
            $shortcut = $meta->shortcut;
        }

        return view('frontend.no-sidebar.index', [
            'pageContent' => $pageContent,
            'title' => $title,
            'shortcut' => $shortcut,
        ]);
    }

    public function solutionAP()
    {
        $meta = SiteMeta::all()->first();

        switch (App::getLocale()) {
            case 'en':
                $pageContent = Page::where('guid', 'SOpIgJc0mPhkINoOkCrkFqBqtbpNNdFxvo7jDv03fW')->first();
                break;
            case 'zh-TW':
                $pageContent = Page::where('guid', 'dEtcX9gIw5tpKsuYou3cuBBj4J8Ila4xJqAP2atGlZ')->first();
                break;
        }

        if (count($meta) == 0) {
            $title = 'none';
            $shortcut = 'https://dummyimage.com/50x50/000/fff&text=?';
        } else {
            $title = $meta->title;
            $shortcut = $meta->shortcut;
        }

        return view('frontend.no-sidebar.index', [
            'pageContent' => $pageContent,
            'title' => $title,
            'shortcut' => $shortcut,
        ]);
    }

    public function news()
    {
        $meta = SiteMeta::all()->first();

        $album = json_decode($meta->index_album);
        return view('news', [
            'title' => $meta->title,
            'shortcut' => $meta->shortcut,
            'album' => $album
        ]);
    }

    public function singleNews($guid)
    {
        $meta = SiteMeta::all()->first();
        $post = Post::where('guid', $guid)->first();

        if ($post['locale'] == App::getLocale()) {
            return view('newsPage', [
                'title' => $meta->title,
                'shortcut' => $meta->shortcut,
                'post' => $post
            ]);
        } else {
            return redirect('/');
        }
    }

    public function bidding()
    {
        $meta = SiteMeta::all()->first();
        $support = Support::where('locale', App::getLocale())->get();

        return view('frontend.bidding.index', [
            'title' => $meta->title,
            'shortcut' => $meta->shortcut,
            'support' => $support
        ]);
    }

    public function success()
    {
        $meta = SiteMeta::all()->first();
        $support = Support::all();

        return view('frontend.success.index', [
            'title' => $meta->title,
            'shortcut' => $meta->shortcut,
            'support' => $support
        ]);
    }

    public function partners()
    {
        return view('frontend.partners.index', [
        ]);
    }

    public function productCategory($guid)
    {
        $category = Category::where('guid', $guid)->first();

        if ($category['locale'] == App::getLocale()) {
            return view('frontend.product.index', [
                'mode' => 'category',
                'guid' => $guid,
            ]);
        } else {
            return redirect('/');
        }
    }

    public function productDetail($guid)
    {
        $product = Product::where('guid', $guid)->first();

        if ($product['locale'] == App::getLocale()) {
            return view('frontend.product.detail', [
                'mode' => 'product',
                'guid' => $guid,
            ]);
        } else {
            return redirect('/');
        }
    }
}
