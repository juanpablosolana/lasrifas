import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  const route = router.pathname.substring(1);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{route}</h1>
      </div>
    </nav>
  );
}
