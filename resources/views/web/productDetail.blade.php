@extends('main')

@section('custom-script')
@endsection

@section('custom-style')
    <style media="screen">
    @charset "UTF-8";
* {
  font-family: 微軟正黑體;
  position: relative;
  font-weight: 600;
}

html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}

.container-fluid {
  padding: 0;
}
.container-fluid img {
  height: 100%;
  width: 100%;
}

section.numbertwo {
  margin-left: 50px;
  margin-top: 50px;
  margin-bottom: 40px;
  font-size: 25px;
}

section.numberthree {
  margin-left: 50px;
  margin-right: 50px;
  border: solid 1px;
  font-size: 18px;
  color: #EBEBEB;
}
section.numberthree a {
  text-decoration: none;
  color: #EBEBEB;
}
section.numberthree table {
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 350px;
  margin-bottom: 200px;
}
section.numberthree .first {
  background-color: #4A4A4A !important;
}
section.numberthree .download {
  cursor: pointer;
}
section.numberthree td {
  border-right: solid 2px white;
}
section.numberthree td:last-child {
  border-right: none;
}
section.numberthree tr {
  border-bottom: solid 2px white;
  text-align: center;
}
section.numberthree tr:nth-child(odd) {
  background: #BDBDBD;
}
section.numberthree tr:nth-child(even) {
  background: #8F8F8F;
}

    </style>
@endsection

@section('content')

  <div>
    <div class="container-fluid"><img src="https://dummyimage.com/1920x600/000/fff" alt=""/></div>
    <section class="numbertwo">
      <p>車載面板 - 後視鏡</p>
    </section>
    <section class="numberthree">
      <table>
        <tr class="first">
          <td>尺寸</td>
          <td>供應商</td>
          <td>料號</td>
          <td>規格書</td>
        </tr>
        <tr>
          <td>8.2"</td>
          <td>邁瑞德</td>
          <td>MD082GL01-401S-40A-AM</td>
          <td class="download"> <a href="https://codepen.io/f882032002/pen/YYEMxO" target="_blank">點我下載 </a></td>
        </tr>
        <tr>
          <td>9.2"</td>
          <td>天馬</td>
          <td>TM092XDHG01-00</td>
          <td class="download"> <a href="https://codepen.io/f882032002/pen/YYEMxO" target="_blank">點我下載 </a></td>
        </tr>
        <tr>
          <td>8.2"</td>
          <td>邁瑞德</td>
          <td>MD082GL01-401S-40A-AM</td>
          <td class="download"> <a href="https://codepen.io/f882032002/pen/YYEMxO" target="_blank">點我下載 </a></td>
        </tr>
        <tr>
          <td>8.2"</td>
          <td>邁瑞德</td>
          <td>MD082GL01-401S-40A-AM</td>
          <td class="download"> <a href="https://codepen.io/f882032002/pen/YYEMxO" target="_blank">點我下載 </a></td>
        </tr>
        <tr>
          <td>8.2"
            <td>邁瑞德</td>
            <td>MD082GL01-401S-40A-AM</td>
            <td class="download"> <a href="https://codepen.io/f882032002/pen/YYEMxO" target="_blank">點我下載 </a></td>
          </td>
        </tr>
        <tr>
          <td>8.2"</td>
          <td>邁瑞德</td>
          <td>MD082GL01-401S-40A-AM</td>
          <td class="download"><a href="https://codepen.io/f882032002/pen/YYEMxO" target="_blank">點我下載 </a></td>
        </tr>
        <tr>
          <td>8.2"</td>
          <td>邁瑞德</td>
          <td>MD082GL01-401S-40A-AM</td>
          <td class="download"><a href="https://codepen.io/f882032002/pen/YYEMxO" target="_blank">點我下載   </a></td>
        </tr>
      </table>
    </section>
  </div>


@endsection
