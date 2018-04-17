@extends('main')

@section('custom-script')
@endsection

@section('custom-style')
    <style media="screen">
    @charset "UTF-8";
* {
font-family: 微軟正黑體;
position: relative;
font-weight: 800;
}

html, body {
padding: 0;
margin: 0;
height: 100%;
width: 100%;
}

.container-fluid {
padding: 0;
margin-bottom: 150px;
}
.container-fluid img {
height: 100%;
width: 100%;
}

section.numbertwo .col-md-4.col-set, section.numbertwo .col-md-4.col-bottom {
margin-top: 30px;
}
section.numbertwo .col-md-4.col-bottom {
left: 50%;
right: 50%;
transform: translateX(-50%);
margin-bottom: 100px;
}

    </style>
@endsection

@section('content')

  <div>
    <div class="container-fluid"><img src="https://dummyimage.com/1920x600/000/fff" alt=""/></div>
    <section class="numbertwo">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/000/fff" alt=""/></div>
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/000/fff" alt=""/></div>
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/000/fff" alt=""/></div>
        </div>
        <div class="row">
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/000/fff" alt=""/></div>
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/000/fff" alt=""/></div>
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/000/fff" alt=""/></div>
        </div>
        <div class="row">
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/000/fff" alt=""/></div>
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/000/fff" alt=""/></div>
          <div class="col-md-4 col-set"><img class="img-responsive" src="https://dummyimage.com/640x420/000/fff" alt=""/></div>
        </div>
        <div class="row">
          <div class="col-md-4 col-bottom"><img class="img-responsive" src="https://dummyimage.com/640x420/000/fff" alt=""/></div>
        </div>
      </div>
    </section>
  </div>


@endsection
