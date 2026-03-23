const express = require("express");
const router = express.Router();
const { mockRestaurants } = require("../data/mockRestaurants");
const { calculateDistance } = require("../utils/calculateDistance");

// GET /api/restaurants - list all restaurants, optionally filtered by proximity
router.get("/", (req, res) => {
  const { lat, lng, radius } = req.query;

  if (lat && lng) {
    const userLat = parseFloat(lat);
    const userLng = parseFloat(lng);
    const maxRadius = radius ? parseFloat(radius) : 5; // default 5 km

    const nearby = mockRestaurants
      .map((r) => ({
        ...r,
        distance: calculateDistance(userLat, userLng, r.lat, r.lng),
      }))
      .filter((r) => r.distance <= maxRadius)
      .sort((a, b) => a.distance - b.distance);

    return res.json(nearby);
  }

  res.json(mockRestaurants);
});

// GET /api/restaurants/:id - get a single restaurant
router.get("/:id", (req, res) => {
  const restaurant = mockRestaurants.find(
    (r) => r.id === parseInt(req.params.id, 10)
  );
  if (!restaurant) {
    return res.status(404).json({ message: "Restaurant not found" });
  }
  res.json(restaurant);
});

module.exports = router;
