var fileUploadDataContext = null;

function InitFileUpload() {
    var ul = $('#ContentForm ul');

    $('#drop a').click(function () {
        // Simulate a click on the file input button
        // to show the file browser dialog
        $(this).parent().find('input').click();
    });

    // Initialize the jQuery File Upload plugin
    $('#ContentForm').fileupload({
        // This element will accept file drag/drop uploading
        dropZone: $('#drop'),

        // This function is called when a file is added to the queue;
        // either via the browse button, or via drag/drop:
        add: function (e, data) {

            // Remove previous files
            $('.selectedfiles').each(function () {
                $(this).remove();
            });

            var tpl = $('<li class="selectedfiles alert alert-success" style="width: 485px;height: 20px;"><p></p> </li>');

            // Append the file name and file size
            tpl.find('p')
                .append('<i>' + data.files[0].name + '&nbsp&nbsp&nbsp</i>')
                .append('<i class="icon-ok-sign"></i>');

            // Add the HTML to the UL element
            data.context = tpl.appendTo(ul);

            // Initialize the knob plugin
            //tpl.find('input').knob();

            // Listen for clicks on the cancel icon
            tpl.find('span').click(function () {

                if (tpl.hasClass('working')) {
                    jqXHR.abort();
                }

                tpl.fadeOut(function () {
                    tpl.remove();
                });

            });

            fileUploadDataContext = data;
        },

        progress: function (e, data) {

            // Calculate the completion percentage of the upload
            var progress = parseInt(data.loaded / data.total * 100, 10);

            // Update the hidden input field and trigger a change
            // so that the jQuery knob plugin knows to update the dial
            //data.context.find('input').val(progress).change();
            $('#FileUploadProgress').width(progress + '%');
            $('#Percentage').text('%' + progress);

            if (progress == 100) {
                data.context.removeClass('working');
            }
        },
        done: function (e, data) {
        },
        fail: function (e, data) {
            // Something has gone wrong!
            data.context.addClass('error');
        }
    });


    // Prevent the default action when a file is dropped on the window
    $(document).on('drop dragover', function (e) {
        e.preventDefault();
    });

    // Helper function that formats the file sizes

    function formatFileSize(bytes) {
        if (typeof bytes !== 'number') {
            return '';
        }

        if (bytes >= 1000000000) {
            return (bytes / 1000000000).toFixed(2) + ' GB';
        }

        if (bytes >= 1000000) {
            return (bytes / 1000000).toFixed(2) + ' MB';
        }

        return (bytes / 1000).toFixed(2) + ' KB';
    }
}