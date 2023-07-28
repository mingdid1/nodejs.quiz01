const service = require("../../service/member/member_service")

const loginCheck = (req, res)=> {
    const result = service.loginCheck(
        req.param("id"), req.param("name") );
    if (result === 0){
        res.redirect("/member/list");
    }
    res.redirect("/member/login");
}

const list = (req, res)=> {
    res.render("member/list", { list:service.getList() });
}

const login = (req, res)=> {
    res.render("member/login");
};

const info = (req, res)=> {
    res.render("member/info",
        { info:service.getInfo(req.param("id"))});
}

module.exports = {loginCheck, list, login, info};