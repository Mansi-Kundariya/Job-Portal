const User = require("../models/userModel");
const ErrorResponse = require("../utils/errorResponse");

// load all users
exports.allUsers = async (req, res, next) => {
    
  // enable pagination
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const count = await User.find({}).estimatedDocumentCount();

  try {
    const users = await User.find()
      .sort({ createdAt: -1 })
      .select("-password")
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    res.status(200).json({
      success: true,
      users,
      page,
      pages: Math.ceil(count / pageSize),
      count,
    });
    next();

  } catch (error) {
    return next(error);
  }
}

// Show single user
exports.singleUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);  //  .../user/id
    res.status(200).json({
      successs: true,
      user
    })
    next(); 

  } catch (error) {
    return next(error)
  }
}

// Edit user
exports.editUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new : true });  
    res.status(200).json({
      successs: true,
      user
    })
    next(); 

  } catch (error) {
    return next(error)
  }
}

// Delete user
exports.deleteUser = async (req, res, next) => {
  try {
      const user = await User.findByIdAndRemove(req.params.id);
      res.status(200).json({
          success: true,
          user,
          message: "user deleted"
      })
      next();

  } catch (error) {
      return next(error);
  }
}

/* ---------------------------  Jobs History  ----------------------------------- */

// Create jobs history
exports.createUserJobsHistory = async (req, res, next) => {
  const { title, description, salary, location } = req.body;
  try {
      const currentUser = await User.findOne({ _id: req.user._id });
      if (!currentUser) {
          return next(new ErrorResponse("You need to login first", 401));
      } else {

          const addJobHistory = {
              title,
              description,
              salary,
              location,
              user: req.user._id
          }
            currentUser.jobsHistory.push(addJobHistory);
            await currentUser.save();
  
      }

      res.status(200).json({
          success: true,
          currentUser
      })
      next();

  } catch (error) {
      return next(error);
  }
}

// Delete job History
exports.deleteUserJobsHistory = async (req, res, next) => {
  const { user_id , job_id } = req.params;
  try {
      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      user.jobsHistory.pull(job_id);
    await user.save();

      res.status(200).json({
          success: true,
          user,
          message: "Job history deleted successfully"
      })
      next();

  } catch (error) {
      return next(error);
  }
}