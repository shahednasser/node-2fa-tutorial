const verify_login = require("../../services/verify_login")

function sign_in(req, res) {
    const email = req.body.email,
        code = req.body.code

    return verify_login(email, code, req, res, '/login')
}

module.exports = { sign_in }