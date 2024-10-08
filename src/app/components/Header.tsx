import { getSignInUrl, getUser, signOut, } from '@workos-inc/authkit-nextjs';
import Link from "next/link";

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();
    return (
        <header>
        <div className="container flex items-center justify-between my-4">
        <Link href={'/'} className="font-bold text-xl">Job Board</Link>
        <nav className="flex gap-2">
          {!user && (
          <Link href={signInUrl} className="bg-gray-200 rounded-md py-2 px-4">Login</Link>
          )}
          {user && (
            <form action={async () => {
              'use server';
              await signOut();
            }}>
              <button
              type='submit'
              className="bg-gray-200 rounded-md py-2 px-4">
                Logout
              </button>
            </form>
          )}
          <Link href={'/new-listing'} className="bg-blue-600 text-white rounded-md py-2 px-4">
            Post a job
          </Link>
        </nav>
        </div>
      </header>
    );
}