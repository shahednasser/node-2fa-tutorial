const verify_login = require("../../services/verify_login")

function sign_up_2fa(req, res) {
    if (!req.session.email) {
        return res.redirect('/')
    }

    const email = req.session.email,
        code = req.body.code

    return verify_login(email, code, req, res, '/sign-up-2fa')
}

module.exports = { sign_up_2fa }