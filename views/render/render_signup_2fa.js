function render_signup_2fa(req,res) {
    if (!req.session.qr) {
        return res.redirect('/')
    }

    return res.render('signup-2fa.ejs', { qr: req.session.qr })
}

module.exports = { render_signup_2fa };