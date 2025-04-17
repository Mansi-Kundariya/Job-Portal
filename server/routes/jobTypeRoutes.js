const express = require("express");
const { createJobType, allJobsType, updateType, deleteType } = require("../controllers/jobTypeController");
const { isAuthenticated, isAdmin } = require("../middleware/auth.js");
const router = express.Router();

// Job type routes
router.post("/type/create", isAuthenticated, isAdmin, createJobType); /* /api/type/create */
router.get("/type/jobs", allJobsType); /* /api/type/jobs */
router.put("/type/update/:type_id", updateType); /* /api/type/update/:type_id */
router.delete("/type/delete/:type_id", deleteType); /* /api/type/delete/:type_id */

module.exports = router;