/**
 * Created by lingweicong on 17-4-24.
 */

var proble_number = $(".proble")
for(var i=0;i<proble_number.length;i++){
    // proble_number.eq(0).css("display","block")
    // proble_number.eq(i).css("display","none")
}
$(".proble001 .c-checkbox01").click(function () {

    $(".proble001 .c-checkbox01").removeClass("active")
    $(this).addClass("active")
    setTimeout("proble_number.eq(1).css('display','block'); proble_number.eq(0).css('display','none')",500);
})

$(".proble002 .c-checkbox01").click(function () {

    $(".proble002 .c-checkbox01").removeClass("active")
    $(this).addClass("active")
    setTimeout("proble_number.eq(2).css('display','block'); proble_number.eq(1).css('display','none')",500);
})

$(".proble003 .c-checkbox01").click(function () {

    $(".proble003 .c-checkbox01").removeClass("active")
    $(this).addClass("active")
    setTimeout("proble_number.eq(3).css('display','block'); proble_number.eq(2).css('display','none')",500);
})

$(".proble004 .c-checkbox01").click(function () {

    $(".proble004 .c-checkbox01").removeClass("active")
    $(this).addClass("active")
    setTimeout("proble_number.eq(4).css('display','block'); proble_number.eq(3).css('display','none')",500);
})

$(".proble005 .c-checkbox01").click(function () {

    $(".proble005 .c-checkbox01").removeClass("active")
    $(this).addClass("active")
})
