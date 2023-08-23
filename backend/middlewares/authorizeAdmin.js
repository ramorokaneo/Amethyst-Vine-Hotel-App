const jwt = require('jsonwebtoken');

const authorizeAdmin = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authorization token missing' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Access forbidden' });
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { authorizeAdmin };
