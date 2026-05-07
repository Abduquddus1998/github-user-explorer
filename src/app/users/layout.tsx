import { ReactNode } from "react";

export default function UsersLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex gap-8">
      <aside className="w-1/4 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Quick Tips</h2>
        <ul className="list-disc pl-4">
          <li>Search by username</li>
          <li>View repos and followers</li>
        </ul>
      </aside>
      <section className="w-3/4">{children}</section>
    </div>
  );
}
