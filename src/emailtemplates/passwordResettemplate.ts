export const getPasswordResetEmailTemplate = (resetLink: string): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 40px 40px 30px 40px; text-align: center; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 8px 8px 0 0;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">Password Reset Request 🔐</h1>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <h2 style="margin: 0 0 20px 0; color: #333333; font-size: 24px; font-weight: 600;">Reset Your Password</h2>
                            
                            <p style="margin: 0 0 20px 0; color: #666666; font-size: 16px; line-height: 1.6;">
                                We received a request to reset the password for your TrustFarokht account. If you made this request, click the button below to reset your password.
                            </p>
                            
                            <!-- CTA Button -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                                <tr>
                                    <td align="center">
                                        <a href="${resetLink}" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 12px rgba(245, 87, 108, 0.3);">
                                            Reset Password
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Security Notice -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                                <tr>
                                    <td style="padding: 20px; background-color: #fff3cd; border-radius: 6px; border-left: 4px solid #ffc107;">
                                        <h3 style="margin: 0 0 10px 0; color: #856404; font-size: 16px; font-weight: 600;">⚠️ Security Notice</h3>
                                        <p style="margin: 0; color: #856404; font-size: 14px; line-height: 1.5;">
                                            This password reset link will expire in <strong>1 hour</strong> for security reasons.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="margin: 0 0 20px 0; color: #666666; font-size: 16px; line-height: 1.6;">
                                If the button doesn't work, you can copy and paste the following link into your browser:
                            </p>
                            
                            <div style="padding: 15px; background-color: #f8f9fa; border-radius: 4px; margin-bottom: 20px; word-break: break-all;">
                                <a href="${resetLink}" style="color: #667eea; text-decoration: none; font-size: 14px;">${resetLink}</a>
                            </div>
                            
                            <!-- Didn't Request -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                                <tr>
                                    <td style="padding: 20px; background-color: #e7f3ff; border-radius: 6px; border-left: 4px solid #2196F3;">
                                        <h3 style="margin: 0 0 10px 0; color: #0c5460; font-size: 16px; font-weight: 600;">ℹ️ Didn't Request This?</h3>
                                        <p style="margin: 0; color: #0c5460; font-size: 14px; line-height: 1.5;">
                                            If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged, and your account is secure.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="margin: 0 0 10px 0; color: #666666; font-size: 16px; line-height: 1.6;">
                                If you continue to have problems, please contact our support team.
                            </p>
                            
                            <p style="margin: 0; color: #666666; font-size: 16px; line-height: 1.6;">
                                Best regards,<br>
                                <strong style="color: #333333;">The TrustFarokht Security Team</strong>
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; text-align: center;">
                            <p style="margin: 0 0 10px 0; color: #999999; font-size: 12px;">
                                © ${new Date().getFullYear()} TrustFarokht. All rights reserved.
                            </p>
                            <p style="margin: 0; color: #999999; font-size: 12px;">
                                This is an automated security email. Please do not reply to this message.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
  `;
};
