function LikeDislike(element) {
    var url = '/Keyword/LikeDislike';
    var keywordId = $(element).attr('data-keywordid');
    var sourceId = $(element).attr('data-sourceid');
    var sourceTypeId = $(element).attr('data-sourcetypeid');
    var status = $(element).attr('data-status');
    var alreadyVoted = $(element).attr('data-already-voted');

    if (alreadyVoted == 'true') {
        bootbox.alert('Bu içeriği daha önce beğendiniz!');
        return;
    }

    var elementCurrentState = $(element).parent().html();
    $.ajax({
        type: 'POST',
        url: url,
        data: { keywordId: keywordId, sourceId: sourceId, sourceTypeId: sourceTypeId, status: status },
        success: function (response, textStatus, jqXhr) {
            $(element).parent().replaceWith(response);
        },
        complete: function() {
        }
    });
}

function Complain(element) {
    var url = '/Keyword/Complain';
    var keywordId = $(element).attr('data-keywordid');
    var sourceId = $(element).attr('data-sourceid');
    var sourceTypeId = $(element).attr('data-sourcetypeid');
    var status = $(element).attr('data-status');
    $.ajax({
        type: 'POST',
        url: url,
        data: { keywordId: keywordId, sourceId: sourceId, sourceTypeId: sourceTypeId, status: status },
        success: function (response) {
            bootbox.alert(response.ResultMessage);
        },
        complete: function () {
        },
        error: function (request, status, error) {
        }
    });
}