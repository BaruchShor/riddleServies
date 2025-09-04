import jwt from "jsonwebtoken";

const auth = (rolse) => (req, res, next) => {
  try {
    const headerToken = req.headers["authorization"];
    if (!headerToken) return res.status(403).send("Unauthorized");

    const token = headerToken.split(" ")[1];
    if (!token) return res.status(403).send("Unauthorized");

    const decoded = jwt.verify(token, process.env.SECRET);

    if (!rolse.includes(decoded.role)) {
      return res.status(403).send("Unauthorized");
    }

    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default auth;
