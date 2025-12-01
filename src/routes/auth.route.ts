import * as AuthController from '../controllers/auth.controller';

export const AuthRoutes = {
    '/api/v1/login': {
        POST: async (req: Request) => await AuthController.login(req),
    },
    '/api/v1/register': {
        POST: async (req: Request) => await AuthController.register(req),
    },
    '/api/v1/logout': {
        POST: async (req: Request) => await AuthController.logout(req),
    },
}