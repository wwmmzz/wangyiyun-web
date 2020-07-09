
/* 轮播图 */
$(function () {
    var $imgrolls = $("#ban div img");
    // $imgrolls.css("opacity","0.7");
    var len = $imgrolls.length;
    var index = 0;
    var adTimer = null;
    //滑入 停止动画，滑出开始动画.
    $("#ban-btn").hover(function () {
        console.log("abc", !adTimer)
        if (adTimer) {
            clearInterval(adTimer);
            console.dir(adTimer)
        }
    }, function () {
        adTimer = setInterval(function () {
            showImg(index);
            index++;
            if (index == len) { index = 0; }
        }, 3000);
    }).trigger("mouseleave");


    $('#ban-btn div').each(function (i, ele) {
        if ($(this).is(".ban-left")) {
            $(this).click(function () {
                index--
                showImg(index)
                console.log("left", index)

                if (index < 0) { index = len - 1; }
            })
        } else {
            $(this).click(function () {
                index++
                showImg(index)
                console.log("right", index)
                if (index == 2) { index = -1; }
            })
        }
    })
})
//显示不同的幻灯片
function showImg(index) {
    $("#ban-a").find("img").eq(index).stop(true, true).fadeIn().siblings().fadeOut();

}

/* 品牌活动模块横向滚动 */
$(function () {
    $("").click(function () {
        $(this).parent().addClass("chos").siblings().removeClass("chos");
        var idx = $("#jnBrandTab li a").index(this);
        showBrandList(idx);
        return false;
    }).eq(0).click();
});
//显示不同的模块
function showBrandList(index) {
    var $rollobj = $("#jnBrandList");
    var rollWidth = $rollobj.find("li").outerWidth();
    rollWidth = rollWidth * 4; //一个版面的宽度
    $rollobj.stop(true, false).animate({ left: -rollWidth * index }, 1000);
}

$(function () {
    let box = $("#n-disk").find("#roll-box");
    let ul = $("#n-disk").find("ul")
    let width = $("#n-disk").find("ul").width()
    let i = 1;

    ul.eq(0).attr("style", "left : -645px")
    ul.eq(1).attr("style", "left : 0px")
    ul.eq(2).attr("style", "left : 645px")
    ul.eq(3).attr("style", "left : 1290px")


    $("#album-btn .left").click(function () {
        if (i == 0) {
            ul.eq(0).attr("style", "left : -645px")
            ul.eq(1).attr("style", "left : 0px")
            ul.eq(2).attr("style", "left : 645px")
            ul.eq(3).attr("style", "left : 1290px")
            i = 2
        }

        ul.animate({ left: '-=' + width }, "slow");
        console.log(i)
        i--
        ul.eq(i).attr("style", "left : 1290px")
        
    })
    $("#album-btn .right").click(function () {
        if (i == 0) {
            ul.eq(0).attr("style", "left : -645px")
            ul.eq(1).attr("style", "left : 0px")
            ul.eq(2).attr("style", "left : 645px")
            ul.eq(3).attr("style", "left : 1290px")
            i = 3
        }
            ul.animate({ left: '+=' + width }, "slow");
        // console.log(i)
        setTimeout(() => {
            ul.eq(i).attr("style", "left : -645px")
        i--

        }, 0); 
        
        

        
    })
})


