const express = require("express");
const app = express();
const port = 3000;
const connection = require("./db");
app.use(express.json());
connection();
const roleRouter = require("./routes/roleRoute");
const userRouter = require("./routes/userRoutes");
const timeNow = require("./routes/timestampsRoute");

app.use("/", userRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/", timeNow);

app.use("/role", roleRouter);

app.use((req, res) => {
  res.send(404).json({ message: "404 Not found" });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
