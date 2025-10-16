import nodemailer from "nodemailer"

export const emailConfirmation = async(to, token) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS  
        }
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject: "Hello from Nodemailer 🚀",
        text: "This is a test email sent using Nodemailer and Gmail!",
        html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Confirm Your Email</title>
                    <style>
                        body {
                        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                        }
                        .container {
                        background-color: #ffffff;
                        max-width: 600px;
                        margin: 40px auto;
                        border-radius: 10px;
                        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                        overflow: hidden;
                        }
                        .header {
                        background-color: #4caf50;
                        color: white;
                        text-align: center;
                        padding: 20px 10px;
                        }
                        .content {
                        padding: 30px;
                        text-align: center;
                        color: #333;
                        }
                        .content h2 {
                        margin-bottom: 20px;
                        }
                        .content p {
                        font-size: 16px;
                        line-height: 1.5;
                        margin-bottom: 30px;
                        }
                        .button {
                        display: inline-block;
                        background-color: #4caf50;
                        color: white !important;
                        text-decoration: none;
                        padding: 12px 30px;
                        border-radius: 6px;
                        font-weight: bold;
                        transition: background-color 0.3s ease;
                        }
                        .button:hover {
                        background-color: #45a049;
                        }
                        .footer {
                        background-color: #f4f4f4;
                        color: #777;
                        text-align: center;
                        padding: 15px;
                        font-size: 13px;
                        }
                    </style>
                    </head>
                    <body>
                    <div class="container">
                        <div class="header">
                        <h1>Confirm Your Email</h1>
                        </div>
                        <div class="content">
                        <h2>Welcome to Gemy App</h2>
                        <p>
                            Thanks for signing up! Please confirm your email address by clicking
                            the button below. This helps us ensure your account’s security.
                        </p>
                        <a
                            href="http://localhost:3000/users/verify?token=${token}"
                            class="button"
                            target="_blank"
                        >
                            Confirm Email
                        </a>
                        </div>
                        <div class="footer">
                        <p>© 2025 APP. All rights reserved.</p>
                        </div>
                    </div>
                    </body>
                    </html>
                    `
    });
    
}