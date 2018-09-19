$(function () {
	//$('.bot-wrap').hide();    //처음에 숨기기

	var ie = (function (){
		if (window.ActiveXObject === undefined) return null;
		if (!document.querySelector) return 7;
		//if (parseFloat(navigator.appVersion.split("MSIE")[1].split(";")[0].split(" ").join("")) == 8) return 8;
		if(!document.addEventListener) return 8;
		if (!window.atob) return 9;
		if (!document.__proto__) return 10;
		return 11;
	})();
	if(ie == 10 || ie == 9 || ie == 8 || ie == 7){
		$('.bot-wrap').remove();
		$(".banner").remove();
	}

});

function isMobile() {
	var UserAgent = navigator.userAgent;

	if (UserAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
		return true;
	} else {
		return false;
	}
}

if (isMobile()) {   //모바일 환경
	$(document).on('click', '#botChatBtn', function () {
		location.href = "index_m.html";
	});
} else {    // 웹 환경

    // 1. 처음 로딩시 표출
    $('.wc-chatview-panel').css('bottom', 0).show();
    $('.bot-wrap').show();

    // 2. 클릭시 챗봇 표출 (사용하려면 위에 숨기기 부분 주석 제거 해줘야함)
    //$(document).on('click', '#botChatBtn', function () {
	//	$('.wc-chatview-panel').css('bottom', 0).show();
    //  $('.bot-wrap').show();
	//});
}