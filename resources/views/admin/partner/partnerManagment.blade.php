@extends('admin.admin')

@section('custom-js-script')
@endsection

@section('panel-content')
    <div class="row ch-post-form">
        <div class="col-md-12">
            <table class="table field-table">
                <thead>
                    <tr>
                        <th>夥伴名稱</th>
                        <th>夥伴地址</th>
                        <th>語系</th>
                        <th>夥伴網址</th>
                        <th>座標經度</th>
                        <th>座標緯度</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach (PartnerView::admin() as $item)
                        <tr>
                            <td>
                                <a href="/cyberholic-system/partner/edit/{{$item->guid}}">{{$item->name}}</a>
                            </td>
                            <td>{{$item->addressString}}</td>
                            <th>{{$item->locale}}</th>
                            <td>{{$item->link}}</td>
                            <td>{{$item->longitude}}</td>
                            <td>
                                {{$item->latitude}}
                            </td>
                            <td><a href="/partner/delete/{{$item->guid}}" onclick="return confirm('確定要刪除此合作夥伴?')">刪除</a></td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection
