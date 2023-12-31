const express = require("express");
const contactsController = require("../controllers/contactsController.js");
const router = express.Router();

router
  .route("/")
  .get(contactsController.getAllContacts)
  .post(contactsController.addNewContact)
  .delete(contactsController.deleteContact);

module.exports = router;
