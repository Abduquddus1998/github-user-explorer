import type { Metadata } from "next";
import Image from "next/image";

import { getUserDto } from "@shared/api";

type Props = {
  params: Promise<{ username: string }>;
};

export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { username } = await params;
    const user = await getUserDto(username);

    return {
      title: `${user.login} (${user.name || "GitHub User"})`,
      description: user.bio || `Profile of ${user.login}`,
    };
  } catch {
    return { title: "User Not Found" };
  }
}

export default async function UserProfile({ params }: Props) {
  const { username } = await params;
  const user = await getUserDto(username);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-24 h-24 rounded-full"
          width={450}
          height={450}
        />
        <div>
          <h1 className="text-3xl font-bold">{user.name || user.login}</h1>
          <p className="text-gray-600">@{user.login}</p>
        </div>
      </div>
      <p className="mb-4">{user.bio || "No bio available."}</p>
      <div className="grid grid-cols-3 gap-4">
        <div>Followers: {user.followers}</div>
        <div>Following: {user.following}</div>
        <div>Repos: {user.public_repos}</div>
      </div>
    </div>
  );
}
