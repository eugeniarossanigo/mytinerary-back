const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const {GOOGLE_REFRESH, GOOGLE_ID, GOOGLE_URL, GOOGLE_SECRET, GOOGLE_USER} = process.env 

const sendMail = async(mail, code) => {
    const client = new OAuth2(
        process.env.GOOGLE_ID,
        process.env.GOOGLE_SECRET,
        process.env.GOOGLE_URL
    )
    
    client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH
    })

    const accessToken = client.getAccessToken()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: GOOGLE_USER,
        to: mail,
        subject: 'Verify mytinerary account',
        html: `
            <div>
                <h1>Bienvenidx ${mail}</h1>
                <a href='http://localhost:4000/auth/verify/${code}'>click to verify account</a>
            </div>
        `
    }

    await transport.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error)
        } else {
            console.log('mail checked')
        }
    })
}

module.exports = sendMail