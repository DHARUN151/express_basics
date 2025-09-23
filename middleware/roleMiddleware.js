const roleCheck = (roles) => {
  return (req, res, next) => {
    const role = req.body.role || req.query.role;
    if (!role) {
      return res.status(400).json({ message: "Role is required" });
    }
    if (!roles.includes(role)) {
      return res.status(403).json({ message: "Access denied for your role" });
    }
    next();
  };
};

module.exports = roleCheck;
