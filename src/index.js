import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["*"],
  }),
);

app.use(express.json());

app.get("/:data", (req, res) => {
  return res.json({ "hey your message": req.params.data });
});

app.listen(8080, () => console.log(`Listening at port: 8080`));
