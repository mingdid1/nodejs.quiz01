const index = (req, res)=> {
    console.log("컨트롤러 연결");
    res.render("index");
}

module.exports = {index};