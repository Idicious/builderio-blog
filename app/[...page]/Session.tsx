"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function Session() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <button onClick={() => signIn("github")}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => signOut()}>Logout</button>
      <pre>{JSON.stringify(session, undefined, 2)}</pre>
    </div>
  );
}
