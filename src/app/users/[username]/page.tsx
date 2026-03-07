export default function UserName({ params }: { params: { username: string } }) {
  return (
    <div>
      <h1>{params.username}</h1>
      <p>This is the user page for {params.username}.</p>
    </div>
  );
}
