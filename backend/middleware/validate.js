export const validateCart = (req, res, next) => {
  const { productId, quantity } = req.body;
  if (!productId || !quantity || quantity < 1) {
    return res.status(400).json({ error: "Invalid cart data" });
  }
  next();
};
