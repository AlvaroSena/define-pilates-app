import express from "express";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "hello, world" });
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
