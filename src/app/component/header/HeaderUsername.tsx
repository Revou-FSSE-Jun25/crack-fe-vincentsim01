"use client";

import { useEffect, useState } from "react";

export default function HeaderClient() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const value = document.cookie
      .split("; ")
      .find((row) => row.startsWith("username"))
      ?.split("=")[1] || null;

    setUsername(value);
  }, []);

  return <span className='mr-5'>{username ? `Hi, ${username}` : ""}</span>;
}