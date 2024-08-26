import mongoose from "mongoose";

export const conectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/merndb");
    console.log("se conecto");
  } catch (error) {
    console.log("El error es ", error);
  }
};
