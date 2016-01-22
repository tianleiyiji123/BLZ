/**
 * Created by wanglei on 2016/1/22.
 */

$(function(){
    $(".j-radio-1").click(function(){
        $(".buy-way .radio-on").removeClass("radio-on");
        $(this).addClass("radio-on");
    });
    $(".j-radio-2").click(function(){
        $(".buy-handle .radio-on").removeClass("radio-on");
        $(this).addClass("radio-on");
    });
});
