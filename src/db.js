import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://alejuda:${process.env.DB_PASSWORD}@cluster0.uvfehrw.mongodb.net/`);
    console.log('>>> DB connected')
  } catch (error) {
    console.log(error);
  }
}