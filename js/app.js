/**
 * Created by vanqisher on 2016/1/24.
 */

function focusInpfnc($inp,callback){
    var wh=$("body").height();

        console.log(wh)
        $inp.each(function(){
            console.log($(this))
            $(this).data("option",{"data-h":wh + ($(this).offset().top),"data-offTop":$(this).offset().top+20})
            console.log($(this).data("option")["data-offTop"])
        });

            callback($inp,wh)

       /* $("body").height(cacheh).scrollTop(offTop + 20);

        $inp.blur(function(){
            $("body").height(wh)
        })*/
}
