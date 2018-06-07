$(document).ready(function () {
    $('#first-click').on('click', function (event) {
        $('#team').html('<li data-id="jp"><strong>Juan Perez</strong><div class="fz-10">Presidente</div></li> <li data-id="mr"><strong>Mario Rosas</strong><div class="fz-10">Gerente General</div></li> <li data-id="cc" class="mr-b-9"><strong>Christiano Chavez</strong></li><li data-id="mb" class="mr-b-9"><strong>Mariella Benites</strong></li>')
        $('#team li').on('click', function (event) {
            var idMember = $(this).data('id');
            if (idMember == 'jp') {
                $('#info').text('Juan Perez (Presidente) Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolores dolore nisi libero omnis ipsam explicabo consequuntur ratione sequi dolorum fugiat, porro laudantium, delectus atque aliquid esse repellat perspiciatis. Ad?')
            } else if (idMember == 'mr') {
                $('#info').text('Mario Rosas(Gerente General) Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolores dolore nisi libero omnis ipsam explicabo consequuntur ratione sequi dolorum fugiat, porro laudantium, delectus atque aliquid esse repellat perspiciatis. Ad? ')
            } else if (idMember == 'cc') {
                $('#info').text('Christiano Chavez Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolores dolore nisi libero omnis ipsam explicabo consequuntur ratione sequi dolorum fugiat, porro laudantium, delectus atque aliquid esse repellat perspiciatis. Ad?')
            } else if (idMember == 'mb') {
                $('#info').text('Mariella Benitez Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit dolores dolore nisi libero omnis ipsam explicabo consequuntur ratione sequi dolorum fugiat, porro laudantium, delectus atque aliquid esse repellat perspiciatis. Ad?')
            }
        });
    });


});
