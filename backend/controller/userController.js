const User =require("../Models/User");

const saveUserDetails = async (req, res) => {
  const { firstName, lastName, phoneNumber, email, dateOfBirth } = req.body; // Ensure correct field names
  const { ipAddress, deviceType, browser, userAgent } = req.deviceInfo || {}; // Fallback if deviceInfo is missing

  try {
    // Check for duplicates
    const existingUser = await User.findOne({
      $or: [{ phoneNumber }, { email }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Phone Number or Email already exists." });
    }

    // Save user details
    const userData = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      dateOfBirth, // Ensure field name consistency
      ipAddress,
      deviceType,
      browser,
      userAgent,
    });

    await userData.save();
    res.status(201).json({
      message: "User saved successfully.",
      user: userData,
    });
  } catch (error) {
    console.error("Error saving user:", error.message); // Debugging
    res.status(500).json({
      message: "Error saving user.",
      error: error.message,
    });
  }
};

module.exports = { saveUserDetails };
