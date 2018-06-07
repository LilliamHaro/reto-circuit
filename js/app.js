$(document).ready(function () {
    $('#first-click').on('click', function (event) {
        $('#team').html('<li data-id="jp"><strong>Juan Perez</strong><div class="fz-10">Presidente</div></li> <li data-id="mr"><strong>Mario Rosas</strong><div class="fz-10">Gerente General</div></li> <li data-id="mr" class="mr-b-9"><strong>Christiano Chavez</strong></li><li data-id="mb" class="mr-b-9"><strong>Mariella Benites</strong></li>')
        $('#team li').on('click', function (event) {
            var idMember = $(this).data('id');
            if (idMember == 'jp') {
                $('#info').text('jp jp jp jp jp')
            }
        });
    });


});
