const express = require("express");
const app = express();
const userRoute = require("./Route/UserRoute");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(userRoute);

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`My Server is running on port ${PORT}`);
});

