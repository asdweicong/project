/**
 * Created by gthowe on 17/2/24.
 */
$(document).ready(function(){
    $('.w1,.w2,.w3').css('font-size', document.body.clientWidth / 28.5 + 'px');
    $('.form_label').css('font-size', document.body.clientWidth / 24.5 + 'px');
    $('.submit_btn,.modal_btn').css('font-size', document.body.clientWidth / 22.5 + 'px');
    $('.form_allow_r').css('font-size', document.body.clientWidth / 33.5 + 'px');

    var allow = true;
    $('.form_allow').click(function(){
        if(allow){
            $('#unselected').show();
            $('#selected').hide();
        }else {
            $('#unselected').hide();
            $('#selected').show();
        }
        allow = !allow
    });

    $('.modal_btn').click(function () {
        $('.modal').hide();
    });


    //名称验证
    function name_check(name) {
        if (name == "" || name == undefined || name == null) {
            return false
        } else {
            //验证逻辑
            var patt1 = new RegExp("^[\u4e00-\u9fa5]{2,}$");//验证只能中文输入
            if (!patt1.test(name)) {
                return false;
            } else {
                return true;
            }
        }
    }

    //手机校验
    function moblie_check(moblie) {
        if (moblie == "" || moblie == undefined || moblie == null) {
            return false
        } else {
            //验证逻辑
            var patt1 = new RegExp("^[1][3,4,5,7,8][0-9]{9}$");//验证长度，第一位数必须是1
            if (!patt1.test(moblie)) {
                return false;
            } else {
                return true;
            }
        }
    }

    //校验
    function check_all(data) {
        if(!name_check(data.name)){
            showToastTips("请输入正确的姓名");
            return false
        }
        if(!moblie_check(data.mobile)){
            showToastTips("请输入正确的手机号");
            return false
        }
        return true;
    }

    //提交
    $(".submit_btn").click(function () {
        //赋值
        var dataToPost = {
            name:$('#name').val(),
            mobile:$('#mobile').val()
        };
        //验证
        $('.modal').show();
        //提交
        // if (check_all(dataToPost)) {
        //     $('.loading').show();
        //     //ajax
        //     $.ajax({
        //         url: url,
        //         type: 'post',
        //         timeout: 20000,//超时
        //         data: dataToPost,
        //         dataType: 'json',
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         },
        //         success: function (data) {
        //             $('.loading').hide();
        //         },
        //         error: function (xmlHttpRequest, error) {
        //             $('.loading').hide();
        //             showToastTips("连接超时");
        //         }
        //     });
        // }

    });




    /*******Tosat提示********/
    var err_mLeft = (document.body.offsetWidth - 200) / 2;
    $('#tips').css('left', err_mLeft);
    function showToastTips(content) {
        $('#tips').css('display', 'block');
        $('#tips_content').text(content);
        setTimeout(function () {
            $('#tips').css('display', 'none');
        }, 1500)
    }
});