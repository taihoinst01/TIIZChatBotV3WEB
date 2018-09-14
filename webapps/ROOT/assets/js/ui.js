$(function () {
    $('#wrapper').css({ 'height': ($(document).height()) + 'px'});
    $(window).resize(function () {
        //$('#wrapper').css({ 'height': ($(document).height()) + 'px' });
    });

    //360 팝업창 생성(cardDivision : reel)
    $("#bot > div").add(
        "<div class='reel-wrapper popupArea'>" +
            "<div class='popHeader'>" +
                "<span id='reelTitle' class='popupTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            "<div id='reelArea' class='popBody'>" +
                "<button class='btnPopRight'></button>" +
                "<div class='imgBox' id='phantom black'>" +
                    "<img src='https://bottest.hyundai.com/assets/images/price/360/phantom black/00001.jpg' alt='' class='reel' id='image' data-images='https://bottest.hyundai.com/assets/images/price/360/phantom black/000##.jpg' data-frames='60' data-cw='true' />" +
                "</div>" +
                "<div class='popTxt'>" +
                    "<span>좌우로 드래그하여 돌려보세요.</span>" +
                "</div>" +
            "</div>" +
        "</div>").appendTo("#bot");
    //동영상 팝업창 생성(cardDivision : play)
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
    //이미지 팝업창 생성(cardDivision : img)
    $("#bot > div").add(
        "<div class='img-wrapper popupArea'>" +
            "<div class='popHeader'>" +
                "<span id='imgTitle' class='popupTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            "<div id='imgCarousel' class='popBody' align='center'>" +
                "<img id='imgTag' src='' width='568' height='318'>" +
            "</div> " +
        "</div>").appendTo("#bot");
    //지도 팝업창 생성(cardDivision : map)
    $("#bot > div").add(
        "<div class='map-wrapper popupArea'>" +
            "<div class='popHeader'>" +
                "<span id='mapTitle' class='popupTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            "<div id='mapArea' class='popBody'>" +
            //"<div id='map' style='border:1px solid #000;'></div>"+  //V3
            "</div>" +
        "</div>").appendTo("#bot");

    //제스처 케릭터 영역 생성
    $("#bot > div").add(
        "<div class='gesture-wrapper gestureArea'>" +
            "<div class='gestureHeader'>" +
                "<span id='gestureTitle' class='gestureTitle'></span>" +
            "</div>" +
            "<div id='animationDiv' style='width:250px;height:488px;background:#000'>" +
            "</div>" +
        "</div>").appendTo("#bot");

    //챗봇창 상단 생성
    $(".wc-header > span").add(
        "<span class='chatTitle'></span>" +
        "<span class='chatTitleText'><strong>TIIZ</strong> ChatBot V3</span>" +
        "<span class='topIcon btnClose'><button class='topIcon03'></button></span>" +
        "<span class='topIcon btnLayer btnLayerFull'><button class='topIcon02'></button></span>" +
        "<span class='topIcon btnMin'><button class='topIcon01'></button></span>" +
        "<span class='topGestureArea'>" +
        "<div class='topGestureOff'>OFF</div><div class='topGestureOn'>ON</div> <div class='topGestureIcon'></div>  " +
        "</span>").appendTo(".wc-header");

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
            $('.wc-chatview-panel').animate({ "height": "528px" }, "fast");
            $('.popupArea').animate({ 'bottom': '174px' }, "fast");
            $('.wc-console, wc-message-pane').show();
            $('.btnLayer').removeClass('btnLayerMid').addClass('btnLayerFull');
            $('.btnLayer > button').css({ 'display': 'inline-block' }).removeClass('topIcon02-1').addClass('topIcon02');
            $('.btnMin').css({ 'right': '58px', 'display': 'inline-block' });
        } else {
            $('.wc-chatview-panel').animate({ "height": ($(document).height()) + 'px' }, "fast");
            $('.popupArea').animate({ 'bottom': ($(window).height() - 352) + 'px' }, "fast");
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
    var startGesture = 0;
    $('.topGestureArea').click(function () {
        if ($('.topGestureIcon').css('float') == 'left') {
            //Gesture off
            $('.topGestureIcon').css({ 'float': 'right' });
            $('.gesture-wrapper').hide().animate({ "right": "-380px", "opacity": "0" }, "slow").fadeOut("slow");
        } else {
            //Gesture on
            $('.topGestureIcon').css({ 'float': 'left' });
            if (startGesture == 0) {
                playAnimation('ChatBot_AniAll01');
                startGesture = 1;
            }
            $('.gesture-wrapper').show().animate({ "right": "380px", "opacity": "1" }, "slow").fadeIn("slow");
        }
    });
    //닫기 버튼
    $('.btnTopClose').click(function () {
        $("#video").attr('src', '');
        $('.mov-wrapper').hide().animate({ "right": "-380px", "opacity": "0", "display": "none" }, "slow").fadeOut("slow");
    });

    //현재위치사용승인
    $(document).on('click', '.wc-card > .wc-card-buttons > li > button:contains("현재 위치 사용 승인")', function () {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = { lat: position.coords.latitude, lng: position.coords.longitude };
            //alert("현재 위치: 위도(" + pos.lat + "), 경도(" + pos.lng + ")");
            var directLineUrl = "https://northamerica.directline.botframework.com";
            var secretKey = "FhoZRDuRE_8.cwA.VUA.XDqPTho3xJJJTwF14KTPZeyo0QZ5plfns2nMUS0h99I";	//USWEST

            var info = JSON.stringify({
                type: 'message',
                text: 'current location:' + pos.lat + ':' + pos.lng,
                from: { id: 'userid' },
            });
            $.ajax({
                type: "POST",
                url: directLineUrl + "/v3/directline/conversations/" + $('#conversationId').val() + "/activities",
                data: info,
                //dataType : "json",
                headers: {
                    "Authorization": "Bearer " + secretKey,
                    'Content-Type': 'application/json'
                },
                success: function (data) {
                },
                error: function (e) {
                }
            });
        }, function (error) {
            //alert("에러: " + error.message);
            var directLineUrl = "https://northamerica.directline.botframework.com";
            var secretKey = "FhoZRDuRE_8.cwA.VUA.XDqPTho3xJJJTwF14KTPZeyo0QZ5plfns2nMUS0h99I";	//USWEST
            var info = JSON.stringify({
                type: 'message',
                text: '직접 검색',
                from: { id: 'userid' },
            })
            $.ajax({
                type: "POST",
                url: directLineUrl + "/v3/directline/conversations/" + $('#conversationId').val() + "/activities",
                data: info,
                //dataType : "json",
                headers: {
                    "Authorization": "Bearer " + secretKey,
                    'Content-Type': 'application/json'
                },
                success: function (data) {
                },
                error: function (e) {
                }
            });
        });
    });

    //동영상 영역 호출
    $(document).on('click', '.wc-card-play > div > .playImg', function () {
        console.log('mov');
        //$('.wc-card-play, .wc-card-img, .wc-card-map').parent().removeClass('on');
        $('.img-wrapper, .map-wrapper').fadeOut();
        $("#video").attr('src', '');
        var movPopTitle = $(this).parent().parent().parent().children().eq(0).children().eq(0).attr('alt');
        $('#movTitle').text(movPopTitle);
        var movPopUrl = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
        $('#video').attr('src', movPopUrl);
        $('.mov-wrapper').show().animate({ "right": "380px", "opacity": "1" }, "fast");
        //$(this).parent().addClass('on');
    });
    //이미지 영역 호출
    $(document).on('click', '.ac-image', function () {
        //$('.wc-card-play, .wc-card-img, .wc-card-map').parent().removeClass('on');
        $('.mov-wrapper, .map-wrapper').fadeOut();
        $("#video").attr('src', '');
        $('#imgDiv > div').remove();
        var manyImg = false;
        var imgPopTitle = $(this).parent().parent().parent().children().eq(0).children().eq(0).attr('alt');
        var imgUrl = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
        var imgCnt = $(this).parent().parent().parent().children().eq(0).children().eq(2).attr('alt');
        $('#imgTag').attr('src', imgUrl);
        $('#imgTitle').text(imgPopTitle);
        $('.img-wrapper').show().animate({ "right": "380px", "opacity": "1" }, "fast");
        //$(this).parent().addClass('on');
    });
    //지도 영역 호출
    $(document).on('click', '.wc-card-map > div > .mapImg', function () {
        console.log('map');
        //('.wc-card-play, .wc-card-img, .wc-card-map').parent().removeClass('on');
        $('.mov-wrapper, .img-wrapper').fadeOut();
        $("#video").attr('src', '');

        $('#mapArea > div').remove();
        $('#mapArea').add("<div id='map' style='border:1px solid #000;'></div>").appendTo('#mapArea');
        var mapTitle = $(this).parent().parent().parent().children().eq(0).children().eq(0).attr('alt');
        $('#mapTitle').text(mapTitle);
        var coordinate = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
        var _temp = coordinate.split(',');
        var longitude = _temp[0];
        var latitude = _temp[1];

        /* V3로 변경*/
        var position = new naver.maps.LatLng(longitude, latitude);
        var map = new naver.maps.Map('map', {
            center: position,
            zoom: 12,
            size: new naver.maps.Size(568, 318)
        });

        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(longitude, latitude),
            map: map
        });
        $('.map-wrapper').show().animate({ "right": "380px", "opacity": "1" }, "fast");
        //$(this).parent().addClass('on');
    });
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