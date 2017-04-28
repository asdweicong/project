/**
 * Created by lingweicong on 17-4-24.
 */

var proble_number = $(".proble")
for(var i=0;i<proble_number.length;i++){
    proble_number.eq(0).css("display","block")
    proble_number.eq(i).css("display","none")
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

var asd = function () {
    for(var i=0;i<proble_number.length;i++){
        // proble_number.eq(0).css('display','block')
        proble_number.eq(i).css('display','none')
    }
    $('.next_content').css('display','block')
}
$(".proble005 .c-checkbox01").click(function () {
    $(".proble005 .c-checkbox01").removeClass("active")
    $(this).addClass("active")
    setTimeout("asd()",500)
})

//事件响应
new clickEvent('q1_l', 'q1_r', 0);
new clickEvent('q2_l', 'q2_r', 1);
new clickEvent('q3_l', 'q3_r', 2);
new clickEvent('q4_l', 'q4_r', 3);
new clickEvent('q5_l', 'q5_r', 4);

function clickEvent(id1, id2, index) {
    $('#' + id1).click(function () {
        $('#' + id1).css('background-color', '#c98474');
        $('#' + id1).css('color', 'white');
        $('#' + id2).css('background-color', 'rgba(255, 255, 255, 0)');
        $('#' + id2).css('color', '#c98474');
        model[index].q = 1;
        setTimeout(function () {
            showSlideDown(index);
        }, 500);
    });
    $('#' + id2).click(function () {
        $('#' + id2).css('background-color', '#c98474');
        $('#' + id2).css('color', 'white');
        $('#' + id1).css('background-color', 'rgba(255, 255, 255, 0)');
        $('#' + id1).css('color', '#c98474');
        model[index].q = 2;
        setTimeout(function () {
            showSlideDown(index);
        }, 500);
    })
}
