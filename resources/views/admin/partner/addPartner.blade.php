@extends('admin.admin')

@section('custom-js-script')
@endsection

@section('panel-content')
    <div class="row ch-post-form">
        <div class="col-md-6">
            @if ($mode == 'add')
                <form action="/partner/add" method="post">
                    {{ csrf_field() }}
                    <input type="hidden" name="guid" value="{{PublicServiceProvider::generateGuid()}}">
                    <div class="form-group">
                        <label for="name">合作夥伴名稱</label>
                        <input type="text" name="name" id="name" class="form-control" value="" required>
                    </div>
                    <div class="form-group">
                        <label for="addressString">地址</label>
                        <input type="text" name="addressString" id="addressString" class="form-control" value="" required>
                    </div>
                    <div class="form-group">
                        <label for="locale">選擇語系</label>
                        <select class="form-control" id="locale" name="locale">
                            @foreach (Config::get('languages') as $key => $value)
                                <option value="{{$key}}">{{$value}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="partnerType">選擇合作夥伴類別</label>
                        <select class="form-control" id="partnerType" name="partnerType" required>
                            @foreach (CategoryView::type2('partnerType') as $key => $value)
                                <option value="{{$value->guid}}">{{$value->title}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="partnerLocation">選擇合作夥伴區域</label>
                        <select class="form-control" id="partnerLocation" name="partnerLocation" required>
                            @foreach (CategoryView::type2('partnerLocation') as $key => $value)
                                <option value="{{$value->guid}}">{{$value->title}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="link">網站連結</label>
                        <input type="text" name="link" id="link" class="form-control" value="" required>
                    </div>
                    <div class="form-group">
                        <label for="longitude">經度</label>
                        <input type="text" name="longitude" id="longitude" class="form-control" value="" required>
                    </div>
                    <div class="form-group">
                        <label for="latitude">緯度</label>
                        <input type="text" name="latitude" id="latitude" class="form-control" value="" required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg" name="button">新增合作夥伴</button>
                </form>
            @else
                <form action="/partner/edit/{{$partner->guid}}" method="post">
                    {{ csrf_field() }}
                    <div class="form-group">
                        <label for="name">合作夥伴名稱</label>
                        <input type="text" name="name" id="name" class="form-control" value="{{$partner->name}}" required>
                    </div>
                    <div class="form-group">
                        <label for="addressString">地址</label>
                        <input type="text" name="addressString" id="addressString" class="form-control" value="{{$partner->addressString}}" required>
                    </div>
                    <div class="form-group">
                        <label for="locale">選擇語系</label>
                        <select class="form-control" id="locale" name="locale">
                            @foreach (Config::get('languages') as $key => $value)
                                @if ($partner->locale == $key)
                                    <option value="{{$key}}" selected>{{$value}}</option>
                                @else
                                    <option value="{{$key}}">{{$value}}</option>
                                @endif

                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="partnerType">選擇合作夥伴類別</label>
                        <select class="form-control" id="partnerType" name="partnerType" required>
                            @foreach (CategoryView::type2('partnerType') as $key => $value)
                                @if ($partner->partnerType == $value->guid)
                                    <option value="{{$value->guid}}" selected>{{$value->title}}</option>
                                @else
                                    <option value="{{$value->guid}}">{{$value->title}}</option>
                                @endif
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="partnerLocation">選擇合作夥伴區域</label>
                        <select class="form-control" id="partnerLocation" name="partnerLocation" required>
                            @foreach (CategoryView::type2('partnerLocation') as $key => $value)
                                @if ($partner->partnerLocation == $value->guid)
                                    <option value="{{$value->guid}}" selected>{{$value->title}}</option>
                                @else
                                    <option value="{{$value->guid}}">{{$value->title}}</option>
                                @endif
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="link">網站連結</label>
                        <input type="text" name="link" id="link" class="form-control" value="{{$partner->link}}" required>
                    </div>
                    <div class="form-group">
                        <label for="longitude">經度</label>
                        <input type="text" name="longitude" id="longitude" class="form-control" value="{{$partner->longitude}}" required>
                    </div>
                    <div class="form-group">
                        <label for="latitude">緯度</label>
                        <input type="text" name="latitude" id="latitude" class="form-control" value="{{$partner->latitude}}" required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg" name="button">更新合作夥伴</button>
                </form>
            @endif

        </div>
    </div>
@endsection
