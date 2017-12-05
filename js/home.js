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
     * 导航栏目点击事件
     */
    $('.home-nav-bar a').unbind('click').click(function () {
        var url = $(this).attr('data-url');
        if (url) {
            $('#container-area').load('./' + url + '.html');
        }
    })
});
