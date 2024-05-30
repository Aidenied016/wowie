"use client";
export const runtime = "edge";
import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const [signOutText, setSignOutText] = useState("Sign Out");

  const router = useRouter();

  const handleSignOut = async () => {
    setSignOutText("Signing Out");
    await router.push("/");
  };

  return (
    <div>
      <SignOutButton>
        {signOutText}
      </SignOutButton>
    </div>
  );
}
