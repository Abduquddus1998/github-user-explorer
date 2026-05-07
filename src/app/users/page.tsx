import Image from "next/image";
import Link from "next/link";

import { getPopularUsersDto } from "@shared/api";

export const revalidate = 3600;

export default async function UsersPage() {
  const users = await getPopularUsersDto();

  console.log("Fetched users:", users);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Popular GitHub Users</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <li key={user.id} className="bg-white p-4 rounded-lg shadow">
            <Image
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="w-16 h-16 rounded-full mb-2"
              width={250}
              height={250}
            />

            <h2 className="text-xl font-semibold">{user.login}</h2>
            <p>Followers: {user.followers}</p>

            <Link href={`/users/${user.login}`}>View Profile</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
