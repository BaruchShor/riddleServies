import jwt from "jsonwebtoken";

const auth = (rolse) => (req, res, next) => {
    try{
        const token = req.cookies.token;
        if (!token) return res.status(403).send('Unauthorized');
        const decoded = jwt.verify(token , process.env.SECRET);
        const user = {id : decoded.id};
        if (!rolse.includes(decoded.role)) return res.status(403).send('Unauthorized');
        next();
    }catch(error){
        res.status(500).send(error.message);
    };
};

export default auth;