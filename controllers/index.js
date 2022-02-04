const { logout } = require("./logout/logout");
const { sign_in } = require("./sign_in/sign_in");
const { sign_up } = require("./sign_up/sign_up");
const { sign_up_2fa } = require("./sign_up_2fa/sign_up_2fa");

module.exports = {
    sign_in,
    sign_up,
    sign_up_2fa,
    logout
}