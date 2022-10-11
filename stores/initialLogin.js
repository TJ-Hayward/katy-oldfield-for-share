import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AuthContext from "./authContext";

export default function InitialLoginRedirect() {
  const router = useRouter();
  const { user, login, loggedIn } = useContext(AuthContext);
  useEffect(() => {
    if (loggedIn) {
      {
        setTimeout(() => router.replace("/projects"), 500);
      }
    }
  });
}
