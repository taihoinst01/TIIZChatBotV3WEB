$(function () {
    var autocomplete_text = [
        "타임서버가 무엇입니까?",
        "타임서버 종류?",
        "타임모니터가 무엇입니까?",
        "타임디스플레이 종류는?",
        "TS-2210 특징",
        "TS-2550 특징",
        "TM-2110 특징",
        "TD-450 특징",
        "TD-210 특징",
        "TS-2550 과 TS-2210 차이점이 무엇입니까?",
        "TS-2550 규격서 보여주세요",
        "TS-2210 규격서 보여주세요",
        "TD-450과 TD-210 차이점이 무엇입니까?",
        "TD-450 규격서 보여주세요",
        "TD-210 규격서 보여주세요",
        "타사 제품과 차이점이 있나요?",
        "타사 제품 비교자료 주세요",
        "TS-2550 구성품은 어떻게 되나요",
        "TS-2210 구성품은 어떻게 되나요",
        "TD-450 구성품은 어떻게 되나요",
        "TD-210 구성품은 어떻게 되나요",
        "타임서버는 어떻게 설치하나요?",
        "GPS신호는 어떻게 받나요?",
        "타임서버와 GPS 연결은 어떻게 하나요?",
        "안테나는 어떻게 생겼나요?",
        "안테나 크기는 얼마나 되나요?",
        "GPS 신호를 못 받을 시 동기화가 되나요?",
        "GPS 신호의 감도는 어떻게 체크하나요?",
        "타임서버 OS는 머에요?",
        "어떤환경에서 타임서버가 필요한가요?",
        "타임서버가 왜 필요한가요?",
        "타시비교자료는 있나요?",
        "세이코제품만의 특장점이 있나요?",
        "TS-2550 가격은 얼마에요?",
        "TS-2210 가격은 얼마에요?",
        "TD-450 가격은 얼마에요?",
        "TD-210 가격은 얼마에요?",
        "타임서버 구축기간은 얼마나 걸리나요?",
        "공사비 없이 타임서버만 판매 가능하나요?",
        "타임서버 설치비는 얼마나 하나요?",
        "서버 및 클라이언트 동기화 수는 몇대정도 되나요?",
        "TS-2550 최대 동기화 수",
        "TS-2210 최대 동기화 수",
        "타임서버는 모든 기기와 연결이 되나요?",
        "구축 실적 볼 수 있어요?",
        "유지보수는 어떤 형식으로 하나요?",
        "무상 유지보수 기간이 언제까지에요?",
        "유지보수 비용은 어떻게 되나요?",
        "윤초가 머에요?",
        "현장 실사는 가능한가요?",
        "견적서 보내 줄 수 있어요?",
        "GPS 안테나를 설치 할 수 없는 환경에서도 구축할 수 있나요?",
        "TS-2550 제품 사진 보여주세요",
        "TS-2210 제품 사진 보여주세요",
        "TD-450 제품 사진 보여주세요",
        "TD-210 제품 사진 보여주세요",
        "타임서버와 타임디스플레이는 어떻게 연동하나요?",
        "OCXO가 머에요?",
        "TCXO가 머에요?",
        "타임서버 오실레이터가 머에요?",
        "타임서버 긴급장애시 응급조치가  무엇인가요?"
    ];

    //keyboard action으로 담을 변수
    var keyboardText = '';  

    //input 출력
    $(".wc-shellinput").autocomplete({
        position: { my: "right bottom-25", at: "right" },
        source: function (request, response) {
            var results = $.ui.autocomplete.filter(autocomplete_text, request.term);
            response(results.slice(0, 5));  //갯수 제한 5개
        },
        focus: function (event, ui) {   //한글만 검색됬을시 자동검색창 닫히는 현상(버전업 버그라고함)
            return false;
        },
        open: function (event, ui) {
            $(document).on('click', '.ui-menu-item-wrapper', function () {
                $('.wc-shellinput').attr('value', $(this).text());
                $('.hiddenText').attr('value', $(this).text());
            }).on('keydown', '.wc-shellinput', function () {
                if ($('.ui-menu-item-wrapper').text()) {
                    keyboardText = $('.ui-state-active').text();
                }
            });
        },
        close: function (event, ui) {
            //keyboard일 경우 닫을때 담아준다
            $('.wc-shellinput').attr('value', keyboardText);
            $('.hiddenText').attr('value', keyboardText);
        }
    });
});
