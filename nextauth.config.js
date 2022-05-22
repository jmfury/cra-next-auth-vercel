import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      credentials: {
        Password: { placeholder: `type "password"`, type: "password" },
      },
      authorize(credentials) {
        if (credentials.Password === "password") {
          return {
            name: "John Doe",
            email: "john@doe.com",
            image: "https://www.fillmurray.com/200/200",
          };
        }
      },
    }),
  ],
  theme: {
    logo: "",
    colorScheme: "light",
    brandColor: "#663399",
  },
};
