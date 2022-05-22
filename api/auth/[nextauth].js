import NextAuth from "next-auth/next";
import { authConfig } from "../../nextauth.config";

export default async function handler(req, res) {
  const { nextauth, provider, ...rest } = req.query;
  req.query = { nextauth: [nextauth, provider], ...rest };
  return await NextAuth(req, res, authConfig);
}
