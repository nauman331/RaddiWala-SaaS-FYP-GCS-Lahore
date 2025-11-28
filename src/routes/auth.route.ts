import * as AuthController from '../controllers/auth.controller';

export const AuthRoutes = {
    '/api/v1/login': {
        GET: async (req: Request) => await AuthController.login(req),
        POST: async (req: Request) => await AuthController.login(req),
    },
    '/api/v1/register': {
        GET: async (req: Request) => await AuthController.register(req),
        POST: async (req: Request) => await AuthController.register(req),
    },
    '/api/v1/logout': {
        GET: async (req: Request) => await AuthController.logout(req),
        POST: async (req: Request) => await AuthController.logout(req),
    },
}