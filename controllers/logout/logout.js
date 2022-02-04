function logout(req, res) {
    req.session.destroy()
    return res.redirect('/')
}

module.exports = { logout }