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
    <div style="display: flex; align-items: center; justify-content: center; flex-direction: column">
            <div class="itinerary-container" style="display: flex; align-items: center; flex-direction: column; min-height: 30rem; width: 80%; background: #f2f2f2; border-radius: 20px; box-shadow: 0 0 20px 8px #d0d0d0; margin-bottom: 5rem; box-sizing: border-box;">
                <img class="logo" src="./logo-black.png" alt="" style="width: 10rem; padding-top: 1rem;">
                <h1 style="font-family: 'Montserrat', sans-serif;">Welcome to MyTinerary</h1>
                <h2 style="font-family: 'Montserrat', sans-serif;">Hello ${mail}</h2>
            <div class="itinerary-user" style="display: flex;justify-content: center; background-color: #d7e7e3; min-width: 70%; margin: 1rem; box-shadow: 0 0 20px 8px #d0d0d0; border-radius: 20px;">
                <p style="padding: 1rem; font-family: 'Montserrat', sans-serif;">Welcome as a MyTinerary user! Before we start, we have to confirm that it's really you. Please verify your email:</p>
            </div>
            <a style="text-decoration:none; display: flex; padding: 8px 12px; margin: 8px 0 0; font-family: 'Montserrat', sans-serif; border: 2px solid #78788c; background: 0; color: #5a5a6e; cursor: pointer; border-radius: 5px;" href='http://localhost:4000/auth/verify/${code}'> click to verify account</a>
        </div>
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