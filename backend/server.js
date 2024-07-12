const { app } = require(".");
const { connectDb } = require("./config/db");

const PORT = 5454;
app.listen(PORT, async () => {
  await connectDb();
  console.log(`server running at port http://localhost:${PORT}`);
  console.log("connected to mongodb");
});
