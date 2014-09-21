$(document).ready(function () {
    BindModals();
    CreateDatatable();
});

function CreateDatatable() {
    var table = $('.jquery-data-table').first();
    var ajaxUrl = location.href;
    return $(table).dataTable({
        "sDom": "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
        "oLanguage": {
            "sLengthMenu": "_MENU_ records per page",
            "sProcessing": "<img alt='Loading...' src='/Images/icons/ajax-loader.gif'>"
        },
        //"bJQueryUI": true,
        "sPaginationType": "bootstrap",
        "bSort": true,
        "bProcessing": true,
        "bServerSide": true,
        "bDestroy": true,
        "sAjaxSource": ajaxUrl,
        "fnDrawCallback": function(oSettings) {
            $('body').find('*').tooltip();

            BindModals();
        },
        "fnServerData": function(url, data, callback) {
            $.ajax({
                "url": url,
                "data": data,
                "success": function (result) {
                    callback(result);
                },
                "contentType": "application/x-www-form-urlencoded; charset=utf-8",
                "dataType": "json",
                "type": "POST",
                "cache": false,
                "error": function() {
                    alert("DataTables warning: JSON data from server failed to load or be parsed. " +
                        "This is most likely to be caused by a JSON formatting error.");
                }
            });
        }
    });
}

function ToggleKeywordActivation(element) {
    bootbox.confirm('Başlığın onay durumunu değiştirmek istediğinizden emin misiniz?', function (result) {
        if (result) {
            $.ajax({
                type: 'POST',
                url: '/Management/ToggleKeywordActivation',
                data: { keywordId: $(element).attr('data-keyword-id'), approve: $(element).is(':checked') },
                beforeSend: function () {
                },
                success: function (response) {
                    bootbox.alert(response.ResultMessage);
                    CreateDatatable();
                },
                complete: function () {
                },
                error: function (request, status, error) {
                    bootbox.alert(request.responseText);
                }
            });
        } else {
            $(element).prop('checked', !$(element).is(':checked'));
        }
    });
}

function DeleteKeyword(element) {
    bootbox.confirm('Başlığı silmek istediğinizden emin misiniz?', function(result) {
        if (result) {
            $.ajax({
                type: 'POST',
                url: '/Management/DeleteKeyword',
                data: { keywordId: $(element).attr('data-keyword-id') },
                beforeSend: function() {
                },
                success: function(response) {
                    bootbox.alert(response.ResultMessage);
                    CreateDatatable();
                },
                complete: function() {
                },
                error: function(request, status, error) {
                    bootbox.alert(request.responseText);
                }
            });
        }
    });
}


function ToggleContentActivation(element) {
    bootbox.confirm('İçeriğin onay durumunu değiştirmek istediğinizden emin misiniz?', function (result) {
        if (result) {
            $.ajax({
                type: 'POST',
                url: '/Management/ToggleContentActivation',
                data: { contentId: $(element).attr('data-content-id'), contentType: $(element).attr('data-content-type'), approve: $(element).is(':checked') },
                beforeSend: function () {
                },
                success: function (response) {
                    bootbox.alert(response.ResultMessage);
                    CreateDatatable();
                },
                complete: function () {
                },
                error: function (request, status, error) {
                    bootbox.alert(request.responseText);
                }
            });
        } else {
            $(element).prop('checked', !$(element).is(':checked'));
        }
    });
}

function DeleteContent(element) {
    bootbox.confirm('İçeriği silmek istediğinizden emin misiniz?', function (result) {
        if (result) {
            $.ajax({
                type: 'POST',
                url: '/Management/DeleteContent',
                data: { contentId: $(element).attr('data-content-id'), contentType: $(element).attr('data-content-type') },
                beforeSend: function () {
                },
                success: function (response) {
                    bootbox.alert(response.ResultMessage);
                    CreateDatatable();
                },
                complete: function () {
                },
                error: function (request, status, error) {
                    bootbox.alert(request.responseText);
                }
            });
        }
    });
}

function DeleteUser(element) {
    bootbox.confirm('Kullanıcıyı silmek istediğinizden emin misiniz?', function (result) {
        if (result) {
            $.ajax({
                type: 'POST',
                url: '/Management/DeleteUser',
                data: { userId: $(element).attr('data-user-id') },
                beforeSend: function () {
                },
                success: function (response) {
                    bootbox.alert(response.ResultMessage);
                    CreateDatatable();
                },
                complete: function () {
                },
                error: function (request, status, error) {
                    bootbox.alert(request.responseText);
                }
            });
        }
    });
}

function BindModals() {
    $('.open-modal').each(function() {
        $(this).click(function(e) {
            e.preventDefault();
            var url = $(this).attr('href');
            $.get(url, function(data) {
                $('body').append(data);
                $('.modal').modal();
            })
            .fail(function (xhr, textStatus, errorThrown) {
                //if (xhr.status == '401') {
                //    $('#Login').click();
                //} else {
                //    bootbox.alert('İşleminiz gerçekleştirilirken hata oluştu!');
                //}
            });
        });
    });

    $('.modal').on('hide', function() {
        location.href = location.href;
    });
}