function LoadExternalResources(contentId) {
    $.ajax({
        type: 'GET',
        url: '/Content/GetContentDetailsByContentId?ContentId=' + contentId,
        data: { },
        success: function(response, textStatus, jqXhr) {
            if (!response.Result) {
                return;
            } else {
                var shareUrl = response.ShareUrl;
                var shareDescription = response.ShareDescription;

                $('#divSocialNetworksContent_' + contentId).html(shareDescription);

                $('#facebook_' + contentId).html('<button class=""btn btn-facebook href=http://www.facebook.com/sharer/sharer.php?s=100&p[url]=' + encodeURI(shareUrl) + '&p[images][0]=&p[title]=Paylaş&p[summary]=' + encodeURI(shareDescription) + ' target="_blank"><i class="fa fa-facebook"></i> | Facebook Paylaş</button>');

                $('#twitter_' + contentId).html('<a href=http://twitter.com/home?status=' + encodeURI(shareUrl) +' target="_blank">Twitter</a>');

                $('#google_' + contentId).html('<a href=https://plus.google.com/share?url=' + encodeURI(shareUrl) + ' target="_blank">Google+</a>');

                $('#divSocialNetworks_' + contentId).modal();
            }
        },
        complete: function() {
        }
    });
}