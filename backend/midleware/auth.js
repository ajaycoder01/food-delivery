import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.json({ success: false, message: 'Not Authorized Login Again' });
    }

    const token = authHeader.split(" ")[1]; // "Bearer <token>" se token extract karo

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};

export default authMiddleware;