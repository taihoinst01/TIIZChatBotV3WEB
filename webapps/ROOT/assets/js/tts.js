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