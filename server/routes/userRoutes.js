const express = require("express");
const { allUsers, singleUser, editUser, deleteUser, createUserJobsHistory, deleteUserJobsHistory } = require("../controllers/userController.js");
const { isAuthenticated, isAdmin } = require("../middleware/auth.js");
const router = express.Router();

// user routes
router.get("/allusers", isAuthenticated, isAdmin, allUsers); /* /api/allusers */
router.get("/user/:id", isAuthenticated, singleUser); /* /api/user/id */
router.put("/user/edit/:id", isAuthenticated, editUser); /* /api/user/edit/id */
router.delete("/admin/user/delete/:id", isAuthenticated, isAdmin, deleteUser); /* /api/admin/user/delete/id */

router.post("/user/jobhistory", isAuthenticated, createUserJobsHistory); /* /api/user/jobhistory */
router.delete("/user/:user_id/delete/jobhistory/:job_id", isAuthenticated, deleteUserJobsHistory); /* /api/user/userId/delete/jobhistory/jobId */

module.exports = router;