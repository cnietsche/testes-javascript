const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.office365.com', // procurar por smtp hotmail ou smtp gmail
    port: 587,
    secure: false, // true para porta 465 e false para as outras
    auth: {
        user: 'PetSchedule@hotmail.com',
        pass: 'Qwewq@12321'
    }
});

transport.sendMail({
    from: 'Pet Schedule <PetSchedule@hotmail.com>',
    to: 'christiannietsche@hotmail.com',
    subject: 'Teste de envio de email!',
    html: '<h1>Olá Dev!</h1> <p>Esse e-mail foi enviado usando o Nodemailer!</p>',
    text: 'Olá Dev! Esse e-mail foi enviado usando o Nodemailer!'
})
.then(() => console.log('E-mail enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar o e-mail: ', err));