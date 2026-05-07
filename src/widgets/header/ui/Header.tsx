"use client";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="max-w-6xl mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        GitHub Explorer
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link href="/users">Search Users</Link>
        </li>
      </ul>
    </nav>
  );
};
