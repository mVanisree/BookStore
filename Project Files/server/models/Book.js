import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    rating: {
      type: Number,
      default: 4.5,
    },

    stock: {
      type: Number,
      default: 20,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", bookSchema);