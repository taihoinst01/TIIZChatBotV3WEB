function lfn_stopTTS() {
    bingClientTTS.stop();
}

var bingClientTTS = new BingSpeech.TTSClient("83fd3c00159545bca411d0e26ce31636");
function lfn_speakTTS(text, speaker) {
    bingClientTTS.multipleXHR = true;
    if (!speaker) {
        speaker = BingSpeech.SupportedLocales.koKR_Female;
    }
    bingClientTTS.synthesize(text, speaker);
}

//TTS 적용 장상련_20190319
const synthesis = window.speechSynthesis;
function speakTTS(word) {
    const utter = new SpeechSynthesisUtterance(word.replace(/\/n*/gi, ''));
    // the list of all available voices
    const voices = synthesis.getVoices();


    utter.voice = voices[13];
    utter.rate = 1;
    utter.pitch = 1;
    synthesis.speak(utter);
}