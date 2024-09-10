const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const sequelize = require("./configs");
const menuRoute = require("./routes/menu");
const adminRoute = require("./routes/admin");
const bot = require("./configs/bot");
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use("/menu", menuRoute);
app.use("/admin", adminRoute);

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
