const sqlite3 = require('sqlite3')
const { authenticator } = require('otplib')
const QRCode = require('qrcode')


function sign_up(req, res) {
    const email = req.body.email,
        secret = authenticator.generateSecret()

    const db = new sqlite3.Database('db.sqlite')
    db.serialize(() => {
        db.run('INSERT INTO `users`(`email`, `secret`) VALUES (?, ?)',
            [email, secret],
            (err) => {
                if (err) {
                    throw err
                }

                //generate qr and put it in session
                QRCode.toDataURL(authenticator.keyuri(email, '2FA Node App', secret), (err, url) => {
                    if (err) {
                        throw err
                    }

                    req.session.qr = url
                    req.session.email = email
                    res.redirect('/sign-up-2fa')
                })
            })
    })
}

module.exports = { sign_up }