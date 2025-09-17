import jwt from "jsonwebtoken";

const auth = (requireRole = null) => {
  return async (req, res, next) => {
    let token = req.headers["authorization"];
    if (!token)
      return res
        .status(401)
        .json({ message: "Access denied.No token provided." });

    token = token.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decodoed) => {
      if (err) {
        return res.status(400).json({ message: "Invalid token." });
      } else {
        console.log(decodoed);
        req.user = decodoed;
        if(requireRole && decodoed.role !== requireRole ){
          return res.status(403).json({
            message:'Accss denied. Insufficien permissions.'
          })
        }
        next();
      }
    });
  };
};
export default auth;
