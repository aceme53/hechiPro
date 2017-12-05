/**
 * Created by sumi_EC on 2017/12/04.
 */
var login = function () {
    var name = $('[name="username"]').val();
    var password = $('[name="password"]').val();
    if (!name || !password) return;
    location.href = location.href.replace('login', 'home');
};