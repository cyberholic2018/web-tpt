<h3>您好，{{$email}}</h3>

<p>請點選以下連結以重置您的密碼。</p>
<p>注意請於30分鐘內進行動作，<br>若逾時請重新請求發送驗證信。</p>


<p><a href="{{ env('APP_URL') }}/reset-password/{{$token}}">點我重新設置您的密碼</a></p>

<p>客服專線：03-5679463</p>
<p>客服信箱：hi@meansgood.com.tw</p>
