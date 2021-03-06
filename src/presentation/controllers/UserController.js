const UserService = require("../../domain/user/services/UserService")
class UserController {
    handle(req, res, next) {
        const {body} = req
        UserService.create(body)
        res.send({
            name: req.body.name,
            email: req.body.email,
            cemail: req.body.cemail,
            cpf: req.body.cpf,
            celular: req.body.celular,
            nascimento: req.body.nascimento,
            email_sms: req.body.email_sms,
            whatsapp: req.body.whatsapp
        });
    }
}
module.exports = new UserController();