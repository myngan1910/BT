

module.exports = {
    requireRegister: (req,res,next) => {
        const name = req.body.name;
        const mail = req.body.mail;
        const phone = parseInt(req.body.phone);
        const add = req.body.address;

        if (name === "" || job === "" || phone === "" || add === "") {
            return res.redirect('/register');
        }
        if (mail) {
            const email = /^[^\s@]+@[^\s@]+\.(com)$/;
            if (!email.test(mail)) {
                return res.redirect('/register');
            }
        } else {
            return res.redirect('/register');
        }
        next();
    }
};
