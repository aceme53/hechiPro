/**
 * Created by sumi_EC on 2017/12/04.
 */
$(function () {
    /**
     * 顶部日期获取
     */
    var now = new Date();
    var mouth = now.getMonth() + 1;
    var date = now.getDate();
    var day = now.getDay();
    var dayArr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    $('#calendarClock1').text(mouth + "月" + date + "日   " + dayArr[day]);
    /**
     * 栏目跳转初始化事件
     */
    var containerInit = function () {
        var hashPage = location.hash.substring(location.hash.indexOf("?container=") + 11);
        if (hashPage) {
            $('#container-area').load('./container.html');
            var inter = setInterval(function () {
                //加载页面需要时间，使用计数器来循环获取新界面元素来操作，找到或者20秒清空计数器
                var $newPageList = $('[id="containerTab"] li[data-url=' + hashPage + ']');
                window.cnt = 0;
                if ($newPageList.length || cnt >= 100) {
                    $newPageList.addClass('active').siblings().removeClass('active');
                    var children = $newPageList.children();
                    var chosedId = children.attr('href').substring(1);
                    $('#' + chosedId).addClass('in active').siblings().removeClass('in active');
                    var labelText = $('#' + chosedId + ' td a').get(0).innerHTML;
                    $('.label-name').text(labelText);
                    clearInterval(inter);
                    delete window.cnt;
                }
                window.cnt++;
            }, 200);
        }
    };
    /**
     * 导航栏目点击事件
     */
    $(document).on('click', '.home-nav-bar a , #containerTab a', function () {
        var newPage = $(this).attr('data-url') || $(this).parent().attr('data-url');
        if (newPage) {
            $('#container-area').load('./container.html');
            location.hash = "?container=" + newPage;
            $('.labelAndTable').show();
            containerInit();
        } else {
            $('.labelAndTable').hide();
        }
    });
    /**
     * 二级菜单点击事件
     */
    $(document).on('click', '#containerTabContent a', function () {
        $('.label-name').text($(this).text());
    });
    containerInit();
});
