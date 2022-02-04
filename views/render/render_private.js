function render_private(req, res) {
    return res.render('private.ejs', { email: req.user })
}

module.exports = { render_private }