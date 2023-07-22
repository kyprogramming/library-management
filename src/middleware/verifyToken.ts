import jwt from 'jsonwebtoken';

function verifyToken(req: any, res: any, next: any) {
    const accessToken = req.cookies.accessToken;
    const key = process.env.secret_key || "";
    jwt.verify(accessToken, key, (err: any, data: any) => {
        if (err) {
            err.statusCode = 403;
            next(err);
        } else if (data.user) {
            req.user = data.user;
            next();
        }
    })
}

export default verifyToken; 