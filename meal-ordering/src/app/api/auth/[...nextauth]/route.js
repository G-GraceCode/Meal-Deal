import NextAuth from "next-auth";
import mongoose from "mongoose";
import User from "@/models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/MongoConnet";

export const authOption = {
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise), // help use to auth a user that login
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        mongoose.connect(process.env.DB_URI);
        const user = await User.findOne({ email });
        const checkUser = user && bcrypt.compareSync(password, user.password);

        if (checkUser) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
