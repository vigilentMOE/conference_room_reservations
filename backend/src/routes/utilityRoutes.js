import express from "express";

const router = express.Router();

// TODO: utility health check route

router.get("", (req, res) => {
  res.send("Hello World from the Resource Reservation backend!");
});

export default router;
