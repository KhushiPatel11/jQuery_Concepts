$(document).ready(function () {
    $('#tableSearch').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        var found = false;

        $('#myTable tbody tr').each(function () {
            var rowText = $(this).text().toLowerCase();
            var isVisible = rowText.indexOf(value) > -1;
            $(this).toggle(isVisible);

            if (isVisible) found = true;
        });

        $('#notFound').toggle(!found); 
    });
});
