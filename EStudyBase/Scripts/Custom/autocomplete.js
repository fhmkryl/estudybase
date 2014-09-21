$(document).ready(function() {
    $('#Term').typeahead({
        source: function (query, process) {
            return $.ajax({
                url: '/Keyword/SearchSuggestions',
                type: 'post',
                data: { term: query },
                dataType: 'json',
                success: function (json) {
                    return process(json);
                }
            });
        }
    });
});