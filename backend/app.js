const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const authRouter = require("./routers/authRouter.js");
const contactsRouter = require("./routers/contactsRouter.js");
const chatRoomRouter = require("./routers/chatRoomRouter.js");
const profileRouter = require("./routers/profileRouter.js");
const uploadRouter = require("./routers/uploadRouter.js");
const ReqError = require("./utilities/ReqError.js");
const errorController = require("./controllers/errorController.js");

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/api/user", authRouter);

// Protector
app.use("/api/*", (req, res, next) => {
  if (!req.cookies.userId)
    return next(new ReqError(400, "You are not logged in"));

  next();
});

app.use("/api/contacts", contactsRouter);
app.use("/api/profile", profileRouter);
app.use("/api/chatRoom", chatRoomRouter);
app.use("/api/upload", uploadRouter);

// Error handle middleware
app.use(errorController);

module.exports = app;
