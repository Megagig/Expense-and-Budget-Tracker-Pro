'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { ShoppingBagIcon } from 'lucide-react';
import ThemeSelector from './ThemeSelector';
import { signIn, signOut } from '@/auth';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

interface NavItem {
  id: number;
  text: string;
  path: string;
}

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState<boolean>(false);
  const { data: session, status } = useSession();

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav((prev) => !prev);
  };

  // Array containing navigation items
  const navItems: NavItem[] = [
    { id: 1, text: 'Features', path: '/features' },
    { id: 2, text: 'Testimonials', path: '/testimonials' },
    { id: 3, text: 'FAQs', path: '/faqs' },
    { id: 4, text: 'About', path: '/about' },
    { id: 5, text: 'Contact', path: '/contact' },
  ];

  const isLoading = status === 'loading';
  const isSignedIn = !!session?.user;

  return (
    <div className="bg-base-100 shadow-md flex justify-between items-center h-20 w-full px-6 text-base-content">
      <Link href="/" passHref>
        <h1 className="text-2xl md:text-3xl font-bold text-primary cursor-pointer">
          BudgetTracker
        </h1>
      </Link>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-3 hover:bg-base-200 rounded-lg mx-1 cursor-pointer duration-300"
          >
            <Link href={item.path} passHref>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <ThemeSelector />

        {isSignedIn && (
          <div className="indicator">
            <div className="p-2 rounded-full hover:bg-base-200 transition-colors">
              <ShoppingBagIcon className="size-5" />
              <span className="badge badge-sm badge-primary indicator-item">
                0
              </span>
            </div>
          </div>
        )}
        
        {isLoading ? (
          <div className="w-10 h-10 flex items-center justify-center">
            <span className="loading loading-spinner loading-sm"></span>
          </div>
        ) : isSignedIn ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt="User avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="bg-primary text-primary-content rounded-full w-10 h-10 flex items-center justify-center">
                    {session.user.name?.[0] || session.user.email?.[0] || 'U'}
                  </div>
                )}
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link href="/dashboard" className="justify-between">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={() => signOut()}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/auth/signin" className="btn btn-sm btn-ghost">
              Sign In
            </Link>
            <Link href="/auth/signup" className="btn btn-sm btn-primary">
              Sign Up
            </Link>
          </div>
        )}
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[70%] h-full border-r border-base-300 bg-base-100 ease-in-out duration-500 z-50 shadow-lg'
            : 'ease-in-out w-[70%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50'
        }
      >
        <h1 className="text-2xl font-bold text-primary m-4">
          BudgetTracker
        </h1>
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b border-base-200 hover:bg-base-200 duration-300 cursor-pointer"
          >
            <Link href={item.path} passHref>
              {item.text}
            </Link>
          </li>
        ))}
        {!isSignedIn && (
          <>
            <li className="p-4 border-b border-base-200 hover:bg-base-200 duration-300 cursor-pointer">
              <Link href="/auth/signin">Sign In</Link>
            </li>
            <li className="p-4 border-b border-base-200 hover:bg-base-200 duration-300 cursor-pointer">
              <Link href="/auth/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
