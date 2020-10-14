
/* Evento passar mouse sobre botão.*/

// $(function () {
//     $('button').click(function () {
//         if ($(this).hasClass('fundovermelho')) {
//             $(this).removeClass('fundovermelho');
//         } else
//             $(this).addClass("fundovermelho");
//
//     });
// });

// $(function() {
//
//     $('button').mouseover(function () {
//         $(this).addClass('fundovermelho');
//     });
//
//     $('button').mouseout(function () {
//         $(this).removeClass('fundovermelho');
//     });
// });

/* Função hover*/

// $(function(){
//
//    $('button').hover(function (){
//        $(this).addClass('fundovermelho');
//     }, function(){
//        $(this).removeClass('fundovermelho');
//     });
// });

$(function (){

    $('button').hover(function (){
        $(this).toggleClass('fundovermelho');
    });
});

