
function timecode(ms) {
    var hms = {
        h: Math.floor(ms / (60 * 60 * 1000)),
        m: Math.floor((ms / 60000) % 60),
        s: Math.floor((ms / 1000) % 60)
    };
    var tc = []; // Timecode array to be joined with '.'

    if (hms.h > 0) {
        tc.push(hms.h);
    }

    tc.push((hms.m < 10 && hms.h > 0 ? "0" + hms.m : hms.m));
    tc.push((hms.s < 10 ? "0" + hms.s : hms.s));

    return tc.join(':');
}

Recorder.initialize({
    swfSrc: "/Content/Swf/recorder.swf",
});

function record(element) {
    var keywordId = $(element).attr('data-keywordid');
    Recorder.record({
        start: function () {
            //alert("recording starts now. press stop when youre done. and then play or upload if you want.");
        },
        progress: function (milliseconds) {
            document.getElementById("time_"+keywordId).innerHTML = timecode(milliseconds);
        }
    });
}

function play(element) {
    var keywordId = $(element).attr('data-keywordid');
    Recorder.stop();
    Recorder.play({
        progress: function (milliseconds) {
            document.getElementById("time_"+keywordId).innerHTML = timecode(milliseconds);
        }
    });
}

function stop(element) {
    Recorder.stop();
}

function upload(element) {
    var keywordId = $(element).attr('data-keywordid');

    try {

        $('#Loading').show();
        Recorder.upload({
            url: "/Content/CreateRecord?keywordId=" + keywordId,
            audioParam: "",
            params: { "LanguageId": $('#LanguageId').val(), "ContentCategoryId": $('#ContentCategoryId').val(), "Description": $('#txtRecordDescription').val() },
            success: function(json) {

                var result = false;
                try {
                    json = jQuery.parseJSON(json);
                    result = json.Result;
                } catch(e) {
                    $('#Login').click();
                }

                if (result) {
                    $('#divRecordResult_' + keywordId).addClass('alert alert-success').html(json.ResultMessage).fadeIn();
                    //setTimeout(function() {
                    //    location.href = "/Keyword/Search?KeywordId=" + keywordId;
                    //}, 3000);
                } else {
                    $('#divRecordResult_' + keywordId).addClass('alert alert-error').html(json.ResultMessage).fadeIn();
                }
                
                $('#Loading').hide();
            }
        });
    } catch (exception) {
        $('#Loading').hide();
        bootbox.alert('Ses kaydı yapılamadı, lütfen tekrar deneyiniz!');
    }
}