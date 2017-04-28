/**
 * Created by lingweicong on 17-4-24.
 */
$(".sex div").click(function () {
    $(".sex div").removeClass("sexactive");
    $(this).addClass("sexactive")
})
$("#label").click(function () {
    var asd = $("#label input[type='checkbox']").is(':checked')
    if(asd){
        console.log(123)
        $("#label div").addClass("active")
        $("#label div").removeClass("checked_span")
    }else {
        console.log(456)
        $("#label div").removeClass("active")
        $("#label div").addClass("checked_span")
    }
})