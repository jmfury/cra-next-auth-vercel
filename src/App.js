import * as React from "react";
import Layout from "./components/layout";

import { SessionProvider } from "next-auth/react";

export default function App() {
  return (
    <SessionProvider>
      <Layout>
        <h1>NextAuth.js Example</h1>
        <p>
          An example site to demonstrate how to use&nbsp;
          <a href="https://next-auth.js.org">NextAuth.js</a>&nbsp;for authentication
          in Create React App.
        </p>
      </Layout>
    </SessionProvider>
  );
}
