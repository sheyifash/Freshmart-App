const nodemailer = require ("nodemailer")
 const sendMail = async(email, token) => {
    try {
        const mailTransport = nodemailer.createTransport({
            service:"gmail",
            Auth:{
                user:"process.env.EMAIL",
                pass:"process.env.PASS"
            }
        })
        const mailDetails = {
            from:"process.env.EMAIL",
            To:"email",
            Subject:"RESET PASSWORD",
            html:` <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <title>Password Reset</title>
          </head>
          <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center" style="padding: 40px 0;">
                  <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); overflow: hidden;">
                    <tr>
                      <td align="center" style="background-color: #007BFF; padding: 20px; color: #ffffff;">
                        <h2>Password Reset Request</h2>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 30px;">
                        <p style="font-size: 16px; color: #333333;">Hi there,</p>
                        <p style="font-size: 16px; color: #333333;">
                          We received a request to reset your password. Click the button below to continue:
                        </p>
                        <p style="text-align: center; margin: 30px 0;">
                          <a href='https://freshmart-app.onrender.com/reset-password/${token} style="background-color: #007BFF; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-size: 16px;">Reset Password</a>
                        </p>
                        <p style="font-size: 14px; color: #555555;">
                          If you did not request this, you can ignore this email.
                        </p>
                        <p style="font-size: 14px; color: #555555;">This link will expire in 1 hour.</p>
                        <p style="font-size: 16px; color: #333333;">Thanks,<br />The FreshMart Team</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="background-color: #f4f4f4; text-align: center; padding: 20px; font-size: 12px; color: #888888;">
                        FreshMart Inc. &middot; Lagos, Nigeria<br />
                        <a href="mailto:support@freshmart.com" style="color: #007BFF;">Contact Support</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>`
        }
        await mailTransport.sendMail(mailDetails)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
 }
 module.exports =sendMail