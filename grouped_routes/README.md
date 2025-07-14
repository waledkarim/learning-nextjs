Create two grouped routes:
(1) public which has routes like Home, About, Contact

(2) admin which has routes like Dashboard, Users, Settings

The public routes will have a shared layout and loading boundary:

```export default function PublicLayout({ children }) {
  return (
    <div style={{ background: '#f0f0f0', padding: '2rem' }}>
      <header>🌐 Public Header</header>
      <main>{children}</main>
    </div>
  );
}```

```export default function LoadingPublic() {
  return <p>Loading public content...</p>;
}```

The admin routes will also have a shared layout and error boundary:

```export default function AdminLayout({ children }) {
  return (
    <div style={{ background: '#222', color: '#fff', padding: '2rem' }}>
      <nav>🛠️ Admin Panel</nav>
      <main>{children}</main>
    </div>
  );
}```

```'use client';
export default function AdminError({ error }) {
  return <h2>🚨 Admin area error: {error.message}</h2>;
}```
