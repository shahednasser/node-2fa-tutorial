const sqlite3 = require('sqlite3')
const { authenticator } = require('otplib')



function verify_login(email, code, req, res, failUrl) {
    //load user by email
    const db = new sqlite3.Database('db.sqlite')
    db.serialize(() => {
        db.get('SELECT secret FROM users WHERE email = ?', [email], (err, row) => {
            if (err) {
                throw err
            }

            if (!row) {
                return res.redirect('/')
            }

            if (!authenticator.check(code, row.secret)) {
                //redirect back
                return res.redirect(failUrl)
            }

            //correct, add jwt to session
            req.session.qr = null
            req.session.email = null
            req.session.token = jwt.sign(email, 'supersecret')

            //redirect to "private" page
            return res.redirect('/private')
        })
    })
}

module.exports = { verify_login }