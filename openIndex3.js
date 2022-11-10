$(document).ready(function () {
    $('#show').on('click',
            function () {
                $('.overlay,.modal1').show();
            }
    );
    $('.overlay,.close').on('click',function(){
        $('.overlay,.modal1').hide();
    });
});