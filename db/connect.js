const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://lightir21:<password>@node-express-projects.hwrpkou.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTED TO THE DB...");
  })
  .catch((err) => console.log(err));
