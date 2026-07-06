import mongoose from "mongoose";

const uri =
  "mongodb+srv://bookstoreadmin:Vani200714%2A@cluster0.38xhvzp.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Connected Successfully");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });