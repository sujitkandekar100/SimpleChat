const express = require("express");
const chatRoomController = require("../controllers/chatRoomController.js");

const router = express.Router();

router.route("/summary").get(chatRoomController.getChatRoomSummaryForUser);

router
  .route("/:chatRoomId")
  .get(chatRoomController.getChatRoom)
  .post(chatRoomController.pinChatRoom)
  .patch(chatRoomController.unpinChatRoom);

module.exports = router;
