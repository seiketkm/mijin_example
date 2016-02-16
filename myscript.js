//送金API URL
var urlTemplate = _.template("http://<%-host%>:7895/transaction/announce");

var path = '/transaction/announce';
var nodes = ['153.127.193.181','133.242.235.38','59.106.211.194','59.106.211.98'];
var optionTemplate = _.template("<option value=<%-val%>><%-txt%></option>");

$(function(){
    // 接続nodeを列挙
    $("#node").append(_.map(nodes,function(n){
	return optionTemplate({val:n, txt:n});
    }));
    // ローカルのデータを自動ロード
    $("#account").change(function(e){
	var account = JSON.parse($("#account").val());
	$("#privkey").val(account.privateKey);
	$("#pubkey").val(account.publicKey);
	$("#addr").val(account.address);
    });
    //acount.jsonの内容をlocalstrageに保持
    if(localStorage.account){
	$("#account")
	    .val(localStorage.account)
	    .change();
    };
    $("#acount_save").on("click",function(){
	localStorage.account = $("#account").val();
    });

    $("#send").click(function(){
	var pubkey = $("#pubkey").val();
	var privkey = $("#privkey").val();
	var rcpt = $("#addr").val();
	var url = urlTemplate({host: $("#node").val()});
	var msg = ""//tobe
	var xem = parseFloat($("#xem").val());
	var options = {
	    amount: xem,
	    host: url
	};
	sendAjaxRequest(pubkey, privkey, rcpt, options);
    });
});

