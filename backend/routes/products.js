import express from "express";
const router = express.Router();

const products = [
  { id: 1, name: "Gold Ring", price: 200, image: "/images/ring.jpg" },
  {
    id: 2,
    name: "Diamond Necklace",
    price: 500,
    image: "/images/necklace.jpg",
  },
  { id: 3, name: "Silver Bracelet", price: 150, image: "/images/bracelet.jpg" },
];

router.get("/", (req, res) => {
  res.json(products);
});

export default router;
