/**
 * Created by gthowe on 17/2/24.
 */
$(document).ready(function () {
    $('.x1_contain_t p,.line').css('font-size', document.body.clientWidth / 26.5 + 'px');
    $('.x_contain_select_l,.x_contain_select_r').css('font-size', document.body.clientWidth / 22.5 + 'px');
    $('.result_btn').css('font-size', document.body.clientWidth / 22.5 + 'px');
    $('.tab1').css('font-size', document.body.clientWidth / 28 + 'px');

    //题选模型
    var model = [
        {q: 0},
        {q: 0},
        {q: 0},
        {q: 0},
        {q: 0}
    ];
    var clauseIcon = false;  //勾模型

    // 省份处理
    $("#selectCity").change(function () {
        if ($("#selectCity").val() != "请选择") {
            $("#selectCity").css("color", "black");
        } else {
            $("#selectCity").css("color", "#E2BDB4");
        }
    });

    //弹窗处理
    $("#Know").click(function () {
        $("#successPopUp").css("display", "none");
    })

    //form提交处理
    $("#commit").click(function () {
        if (clauseIcon){
            $("#successPopUp").css("display", "block");
        }else{
            alert("请勾选保险服务")
        }
    });

    // 性别
    $("#man").click(function () {
        sex(0);
    });

    $("#female").click(function () {
        sex(1);
    });
    
    //勾选
    $("#clauseIcon").click(function () {
        clauseIcon = !clauseIcon;
        if (clauseIcon){
            $("#clauseIcon").attr("src","./img/agree_highlight.png");
        }else{
            $("#clauseIcon").attr("src","./img/agree_icons.png");

        }
    });

    function sex(v) { //0为男，1为女
        if(v == 1){
            $("#female").css("color", "white");
            $("#female").css("background-color", "#c98474");
            $("#man").css("color", "#c98474");
            $("#man").css("background-color", "white");
        }else{
            $("#man").css("color", "white");
            $("#man").css("background-color", "#c98474");
            $("#female").css("color", "#c98474");
            $("#female").css("background-color", "white");
        }
    }

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

    //问题处理
    function showSlideDown(index) {
        for (var num = 0; num < 5; num++) {
            $('#q' + num).css("display", "none");
        }

        if (index == 4) {
            $('#tab1').slideDown();
        } else {
            var qNum = (parseInt(index, 10) + 1);
            $('#q' + qNum).slideDown();
        }
    }
});