import express from "express";
import AuthRoutes from "./routes/auth";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", AuthRoutes);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3030, () => {
  console.log("Server is running on port 3030");
});
