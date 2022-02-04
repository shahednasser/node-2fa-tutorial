const sqlite3 = require('sqlite3')


function db() {
  const db = new sqlite3.Database('db.sqlite')
  db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS `users` (`user_id` INTEGER PRIMARY KEY AUTOINCREMENT, `email` VARCHAR(255) NOT NULL, `secret` varchar(255) NOT NULL)')
  })
  db.close()
}

module.exports = { db }
