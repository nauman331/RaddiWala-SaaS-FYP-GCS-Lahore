import { User, type IUser } from "../models/user.model";
import { hashPassword, comparePassword } from "../utils/bcryptpassword";
import { sendPasswordResetEmail } from "../utils/mailsender";
import { randomUUIDv7 } from "bun";

const register = async (req: Request): Promise<Response> => {
    try {
        const { username, password, email, phone } = await req.json() as IUser;
        if(!username || !password || !email || !phone) {
            return new Response('Missing required fields', { status: 400 });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return new Response('Email already in use', { status: 400 });
        }

        const existingPhone = await User.findOne({ phone });
        if (existingPhone) {
            return new Response('Phone number already in use', { status: 400 });
        }
        const hashedPassword = await hashPassword(password);
        const token = randomUUIDv7();
        await sendPasswordResetEmail(email, token);
        const newUser = new User({
            username,
            email,
            phone,
            password: hashedPassword,
            isVerified: false,
            token
        });
        return new Response('Register successful', { status: 200 });
    } catch (error) {
        return new Response('Register failed', { status: 500 });
    }
}

const login = async (req: Request): Promise<Response> => {
    try {
        return new Response('Login successful', { status: 200 });
    } catch (error) {
        return new Response('Login failed', { status: 500 });
    }
}
const logout = async (req: Request): Promise<Response> => {
    try {
        return new Response('Logout successful', { status: 200 });
    } catch (error) {
        return new Response('Logout failed', { status: 500 });
    }
}

export { register,login,logout };