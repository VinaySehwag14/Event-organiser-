import { hashPassword } from "../../../helper/auth";
import { connectToDatabase } from "../../../helper/db";

async function handler(req, res) {
  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.include("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "Invalid input - password should be at least 7 characters long",
    });
  }

  const client = await connectToDatabase();

  const db = client.db();

  const hashedPassword = hashPassword(password);

  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!" });
}

export default handler;