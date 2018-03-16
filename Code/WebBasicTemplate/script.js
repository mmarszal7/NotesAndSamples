$(document).ready(function () {
	
	$(".przycisk").click(function() {
        $.ajax({
            type: 'GET',
            url: './api/data.php',
            success: function (data) {
                alert(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("Nie udało się pobrać danych. Error:  " + thrownError);
            }
        });
	});
});