const router = require("express").Router();
const userRoutes = require("./userRoutes");
const modelRoutes = require("./modelRoutes");

router.use("/user", userRoutes);
router.use("/models", modelRoutes);

module.exports = router;
