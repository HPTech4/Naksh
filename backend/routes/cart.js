import express from "express";
import { validateCart } from "../middleware/validate.js";

const router = express.Router();
let cart = [];

router.post("/", validateCart, (req, res) => {
  const { productId, quantity } = req.body;
  const exists = cart.find((item) => item.productId === productId);
  if (exists) {
    exists.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  res.json({ message: "Cart updated", cart });
});

export default router;
