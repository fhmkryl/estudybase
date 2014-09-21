//$(document).ready(function() {
//    BindModals();
//});

//function BindModals() {
//    $('.open-modal').each(function() {
//        $(this).click(function(e) {
//            e.preventDefault();
//            var url = $(this).attr('href');
//            $.get(url, function(data) {
//                $('body').append(data);
//                $('.modal').modal();
//            })
//            .fail(function (xhr, textStatus, errorThrown) {
//                //if (xhr.status == '401') {
//                //    $('#Login').click();
//                //} else {
//                //    bootbox.alert('İşleminiz gerçekleştirilirken hata oluştu!');
//                //}
//            });
//        });
//    });

//    $('.modal').on('hide', function() {
//        location.href = location.href;
//    });
//}