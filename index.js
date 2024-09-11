const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const sequelize = require("./configs");
const bot = require("./configs/bot");
const authRoute = require("./routes/auth");
const { authenticationChecker } = require("./middlewares");
const mainRoute = require("./routes/main");
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/", authenticationChecker, mainRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => console.error("Error syncing database:", err));

bot.launch();
