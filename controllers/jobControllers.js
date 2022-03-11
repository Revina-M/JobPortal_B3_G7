const Job = require("../models/jobModel");
const asyncHandler = require("express-async-handler");
// const generateToken = require("../utils/generateToken");

const getJobs = asyncHandler(async (req, res) => {
  // const getJobs =
  // router.get("/getalljobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.send(jobs);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

const postJobs = asyncHandler(async (req, res) => {
  // router.post("/postjob", async (req, res) => {
  try {
    const newjob = new Job(req.body);
    await newjob.save();
    res.send("job posted successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

const editJobs = asyncHandler(async (req, res) => {
  // router.post("/editjob", async (req, res) => {
  try {
    const updatedjob = await Job.findOneAndUpdate(
      { _id: req.body._id },
      req.body
    );
    res.send("Job Updated Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

const applyJobs = asyncHandler(async (req, res) => {
  // router.post("/applyjob", async (req, res) => {
  const { user, job } = req.body;
  try {
    const jobDetails = await Job.findOne({ _id: job._id });
    const appliedCandidate = {
      userid: user._id,
      appliedDate: moment().format("MMM DD yyyy"),
    };
    jobDetails.appliedCandidates.push(appliedCandidate);
    await jobDetails.save();

    const userDetails = await User.findOne({ _id: user._id });
    const appliedJob = {
      jobid: job._id,
      appliedDate: moment().format("MMM DD yyyy"),
    };
    userDetails.appliedJobs.push(appliedJob);
    await userDetails.save();

    res.send("Job applied Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = { getJobs, postJobs, editJobs, applyJobs };
// module.exports = router;
