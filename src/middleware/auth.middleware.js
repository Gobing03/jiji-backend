module.exports = (req, res, next) => {
  const userId = req.headers['x-user-id'];

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized: Missing user id' });
  }

  req.user = { id: userId };
  next();
};
