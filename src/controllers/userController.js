const express = require("express");
const { checkIfAdmin } = require("../middleware/userMiddleware");
const { getUsersFromDatabase } = require("../middleware/databaseMiddleware");
const router = express.Router();

// Get all users 
// but only if the admin is the one making this request! 
// domainName:port/users/
router.post(
	"/",
	checkIfAdmin, // middleware to check auth 
	getUsersFromDatabase, // middleware to query the database 
	(request, response) => {
		response.json({
			users: request.userData // use the middleware results in the endpoint response
		});
	}
);

module.exports = router;