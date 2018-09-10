$(function () {
    $('#wrapper').css({ 'height': ($(document).height()) + 'px'});
    $(window).resize(function () {
        //$('#wrapper').css({ 'height': ($(document).height()) + 'px' });
    });
    
    //팝업창 생성
    $("#bot > div").add(
        "<div class='mov-wrapper popupArea'>" +
            "<div class='popHeader'>" +
                "<span id='movTitle' class='popupTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            "<div class='popBody'>" +
                "<iframe id='video' src='' frameborder='0' allowfullscreen='true' style='overflow-x:hidden;overflow:auto;width:100%;height:487px;'></iframe>" +
            "</div>" +
        "</div>").appendTo("#bot");

    //제스처 케릭터 영역 생성
    $("#bot > div").add(
        "<div class='gesture-wrapper gestureArea'>" +
            "<div class='gestureHeader'>" +
                "<span id='gestureTitle' class='gestureTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            //"<div class='gestureBody'>" +
                //"<iframe id='gesture' src='https://timesolutiongesture.azurewebsites.net' frameborder='0' allowfullscreen='true' style='overflow-x:hidden;overflow:auto;width:100%;height:322px;'></iframe>" +
            //"</div>" +
            "<div id='animationDiv' style='width:250px;height:488px;background:#000'>" +
                //"<button class='testBtn'>ChatBot_AinTest02</button>" +
                //"<br>" +
                //"<button onclick='playAction(0);'>동작0</button>" +
                //"<button onclick='playAction(1);'>동작1</button>" +
                //"<button onclick='playAction(2);'>동작2</button>" +
                //"<button onclick='playAction(3);'>동작3</button>" +
                //"<button onclick='playAction(4);'>동작4</button>" +
                //"<button onclick='playAction(5);'>동작5</button>" +
                //"<button onclick='playAction(6);'>동작6</button>" +
                //"<button onclick='playAction(7);'>동작7</button>" +
                //"<button onclick='playAction(8);'>동작8</button>" +
                //"<button onclick='playAction(9);'>동작9</button>" +
                //"<button onclick='playAction(10);'>동작10</button>" +
                //"<button onclick='playAction(11);'>동작11</button>" +
                //"<button onclick='playAction(12);'>동작12</button>" +
                //"<button onclick='playAction(13);'>동작13</button>" +
                //"<button onclick='playAction(14);'>동작14</button>" +
                //"<button onclick='playAction(15);'>동작15</button>" +
                //"<button onclick='playAction(16);'>동작16</button>" +
                //"<button onclick='playAction(17);'>동작17</button>" +
                //"<button onclick='playAction(18);'>동작18</button>" +
                //"<button onclick='playAction(19);'>동작19</button>" +
            "</div>" +
            
            
        "</div>").appendTo("#bot");

    //챗봇창 상단 생성
    $(".wc-header > span").add(
        "<span class='chatTitle'></span>" +
        "<span class='chatTitleText'><strong>TS</strong> ChatBot</span>" +
        "<span class='topIcon btnClose'><button class='topIcon03'></button></span>" +
        "<span class='topIcon btnLayer btnLayerFull'><button class='topIcon02'></button></span>" +
        "<span class='topIcon btnMin'><button class='topIcon01'></button></span>" +
        "<span class='topGestureArea'><button class='topGestureIcon'>C</button></span>").appendTo(".wc-header");

    //챗봇 메뉴창 생성
    $(".wc-chatview-panel > div").add(
        "<div class='menuBox off'>" +
        "<p class='menuReStartBtn'><span> Menu </span></p>" +
        "<ul>" +
        //"<li class='menuSelectBtn'><span><a href='#' onclick='viewMenu('Accident analysis')'> Accident analysis </span></a></li>" +
        //"<li class='menuSelectBtn'><span><a href='#' onclick='viewMenu('Accident trends')'> Accident trends </span></a></li>" +
        "<li class='menuSelectBtn'><span><a href='#' onclick='viewMenu()'> return home </span></a></li>" +
        "</ul>" +
        "</div > ").appendTo(".wc-chatview-panel");

    //챗봇창 버튼 동작
    $('.btnClose').click(function () {
        $('.wc-chatview-panel').css('bottom', 0).hide();
        $('.bot-wrap').hide().removeClass("chatOn").addClass("chatOff");
    });
    $('.btnMin').click(function () {
        $('.wc-chatview-panel').css({ "overflow": "hidden" });
        $('.wc-chatview-panel').animate({ "height": "32px" }, "fast");
        $('.wc-console, wc-message-pane').hide();
        $('.btnMin').css({ 'display': 'none' });
        $('.btnLayer').removeClass('btnLayerFull').addClass('btnLayerMid');
        $('.btnLayer > button').removeClass('topIcon02').addClass('topIcon02-1');
    });
    $(document).on('click', '.wc-header [class*=btnLayer]', function () {
        if ($(this).hasClass('btnLayerMid')) {
            $('.wc-chatview-panel').css({ "overflow": "visible" });
            $('.wc-chatview-panel').animate({ "height": "582px" }, "fast");
            $('.wc-console, wc-message-pane').show();
            $('.btnLayer').removeClass('btnLayerMid').addClass('btnLayerFull');
            $('.btnLayer > button').css({ 'display': 'inline-block' }).removeClass('topIcon02-1').addClass('topIcon02');
            $('.btnMin').css({ 'right': '58px', 'display':'inline-block' });
        } else {
            $('.wc-chatview-panel').animate({ "height": ($(document).height()) + 'px' }, "fast");
            $('.btnLayer').removeClass('btnLayerFull').addClass('btnLayerMid');
            $('.btnLayer > button').css({ 'display': 'inline-block' }).removeClass('topIcon02').addClass('topIcon02-1');
        }
    });

    //챗봇 메뉴 버튼 동작
    $('.menuIcon').click(function (){
        if ($('.menuBox').hasClass("off")) {
            $('.menuBox').removeClass('off').addClass('on');
            $('.menuBox').css({ 'display': 'block' });
        } else {
            $('.menuBox').removeClass('on').addClass('off');
            $('.menuBox').css({ 'display': 'none' });
        }
    });
    
	//챗봇 팝업 동작 (동영상)
    $(document).on('click', '.wc-card-play > .non-adaptive-content', function () {
        var movPopTitle = $(this).children().eq(1).attr('alt');
        $('#movTitle').text(movPopTitle);
        var movPopUrl = $(this).children().eq(2).attr('alt');
        $('#video').attr('src', movPopUrl);
        $('.mov-wrapper').show().animate({ "right": "380px", "opacity": "1", "display": "block" }, "fast").fadeIn("fast");
    });
    //챗봇 제스처 동작
    var startJesture = 0;
    $('.topGestureIcon').click(function () {
        if (startJesture == 0) {
            playAnimation('ChatBot_AniAll01');
            startJesture = 1;
        }
        $('.gesture-wrapper').show().animate({ "right": "380px", "opacity": "1" }, "slow").fadeIn("slow");
    });
    //닫기 버튼
    $('.btnTopClose').click(function () {
        $("#video").attr('src', '');
        $('.mov-wrapper').hide().animate({ "right": "-380px", "opacity": "0", "display": "none" }, "slow").fadeOut("slow");
        $('.gesture-wrapper').hide().animate({ "right": "-380px", "opacity": "0"}, "slow").fadeOut("slow");
    });


    //제스처 테스트
    //$('.topGestureArea').click(function () {
    //    //playAnimation('ChatBot_AinTest02');
    //    playAnimation('ChatBot_AniAll01');
    //});
});

//챗봇 메뉴 처음으로 돌아가기
//function viewMenu() {
//    var returnText = "return home";     // 처음으로 돌아가는 텍스트
//    $('div.wc-console').addClass('has-text');
//    $('input[type="text"].wc-shellinput').attr('value', returnText);
//    $('input[type="text"].wc-shellinput').val(returnText);
//    $('label.wc-send').trigger('click');
//    $('input[type="text"].wc-shellinput').attr('value', '');
//    $('input[type="text"].wc-shellinput').val('');
//    $('.wc-console').removeClass('has-text');
//    $('.menuBox').removeClass('on').addClass('off');
//    $('.menuBox').css({ 'display': 'none' });
//}