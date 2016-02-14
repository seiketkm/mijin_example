var SENDER_PRIVATE_KEY = "8b46a8ce6fa24b4aa0fe12dce763682348975804a924ead1fdc8c8df3ac41189";	//送信元の秘密鍵
var SENDER_PUBLIC_KEY = "b3516fde52f8c3551e939961dba77782fdb56116c228cb8e77d9a5157b6086b5"; 	//送信元の公開鍵
var RECIPIENT_ADDRESS = "MADIFCCO75ES3IDU3KN2DVXAGW25VSGAV4GTIV62";	//送信先アドレス

//送金API URL
var URL_TRANSACTION_ANNOUNCE = "http://59.106.211.98:7895/transaction/announce";

$(function(){
  $("#btnReset").click(function(){
    sendAjaxRequest().done();
  });
});
