var create_email = false;
var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
if (!('webkitSpeechRecognition' in window)) {
    upgrade();
} else {
    //start_button.style.display = 'inline-block';
    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'ko-KR';
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = function () {
        recognizing = true;
        //showInfo('info_speak_now');
        console.log('info_speak_now');
        //start_img.src = 'C:/Users/user/source/repos/nhchatbotweb_google/webapps/ROOT/assets/image/mic_img/mic-animate.gif';
        $('.ttsMic').removeClass("ttsMicBlack").addClass("ttsMicRed")
    };

    recognition.onerror = function (event) {
        if (event.error == 'no-speech') {
            //start_img.src = 'C:/Users/user/source/repos/nhchatbotweb_google/webapps/ROOT/assets/image/mic_img/mic.gif';
            //showInfo('info_no_speech');
            $('.ttsMic').removeClass("ttsMicRed").addClass("ttsMicBlack")
            console.log('info_no_speech');
            ignore_onend = true;
        }
        if (event.error == 'audio-capture') {
            //start_img.src = 'C:/Users/user/source/repos/nhchatbotweb_google/webapps/ROOT/assets/image/mic_img/mic.gif';
            //showInfo('info_no_microphone');
            $('.ttsMic').removeClass("ttsMicRed").addClass("ttsMicBlack")
            console.log('info_no_microphone');
            ignore_onend = true;
        }
        if (event.error == 'not-allowed') {
            if (event.timeStamp - start_timestamp < 100) {
                //showInfo('info_blocked');
                $('.ttsMic').removeClass("ttsMicRed").addClass("ttsMicBlack")
            } else {
                //showInfo('info_denied');
                $('.ttsMic').removeClass("ttsMicRed").addClass("ttsMicBlack")
            }
            ignore_onend = true;
        }
    };

    recognition.onend = function () {
        recognizing = false;
        if (ignore_onend) {
            return;
        }
        //start_img.src = 'C:/Users/user/source/repos/nhchatbotweb_google/webapps/ROOT/assets/image/mic_img/mic.gif';
        $('.ttsMic').removeClass("ttsMicRed").addClass("ttsMicBlack")
        if (!final_transcript) {
            //showInfo('info_start');
            console.log("recognition.onend");
            return;
        }
        //showInfo('');
        if (window.getSelection) {
            //window.getSelection().removeAllRanges();
            //var range = document.createRange();
            //range.selectNode(document.getElementById('final_span'));
            //window.getSelection().addRange(range);
        }
        if (create_email) {
            create_email = false;
            createEmail();
        }
    };

    recognition.onresult = function (event) {
        var interim_transcript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                //final_transcript += event.results[i][0].transcript;
                final_transcript = event.results[i][0].transcript;
                console.log("final_transcript = " + final_transcript);
                //recognizing = false;
            } else {
                //interim_transcript += event.results[i][0].transcript;
                interim_transcript = event.results[i][0].transcript;
            }
        }
        final_transcript = capitalize(final_transcript);

        if (final_transcript) {
            //showButtons('inline-block');
            $('div.wc-console').addClass('has-text');
            $('input[type="text"].wc-shellinput').attr('value', final_transcript);
            $('input[type="text"].wc-shellinput').val(final_transcript);
            $('.sttText').attr('value', final_transcript);
            $('label.wc-send').trigger('click');
            $('input[type="text"].wc-shellinput').attr('value', '');
            $('input[type="text"].wc-shellinput').val('');
            $('.wc-console').removeClass('has-text');
        }
    };
}

function upgrade() {
    start_button.style.visibility = 'hidden';
    showInfo('info_upgrade');
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;
function capitalize(s) {
    return s.replace(first_char, function (m) { return m.toUpperCase(); });
}

function startButton(event) {
    if (recognizing) {
        recognition.stop();
        return;
    }
    
    final_transcript = '';
    recognition.lang = 'ko-KR';
    recognition.start();
    ignore_onend = false;
    //final_span.innerHTML = '';
    //interim_span.innerHTML = '';
    //start_img.src = 'C:/Users/user/source/repos/nhchatbotweb_google/webapps/ROOT/assets/image/mic_img/mic-slash.gif';
    $('.ttsMic').removeClass("ttsMicBlack").addClass("ttsMicRed")
    //showInfo('info_allow');
    //showButtons('none');
    start_timestamp = event.timeStamp;
}

function showInfo(s) {
    if (s) {
        for (var child = info.firstChild; child; child = child.nextSibling) {
            if (child.style) {
                child.style.display = child.id == s ? 'inline' : 'none';
            }
        }
        info.style.visibility = 'visible';
    } else {
        info.style.visibility = 'hidden';
    }
}

//var current_style;
//function showButtons(style) {
//    if (style == current_style) {
//        return;
//    }
//    current_style = style;
//    copy_button.style.display = style;
//    email_button.style.display = style;
//    copy_info.style.display = 'none';
//    email_info.style.display = 'none';
//}
