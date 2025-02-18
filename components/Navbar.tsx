'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { ShoppingBagIcon } from 'lucide-react';
import ThemeSelector from './ThemeSelector';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';

interface NavItem {
  id: number;
  text: string;
  path: string;
}

const Navbar: React.FC = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState<boolean>(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav((prev) => !prev);
  };

  // Array containing navigation items
  const navItems: NavItem[] = [
    { id: 1, text: 'Company', path: '/company' },
    { id: 2, text: 'Products', path: '/products' },
    { id: 3, text: 'About', path: '/about' },
    { id: 4, text: 'Contact', path: '/contact' },
    { id: 5, text: 'Register', path: '/register' },
  ];

  const products: any[] = []; // Replace with your actual products array
  const { isSignedIn } = useUser(); // Check if the user is signed in

  return (
    <div className="bg-black flex justify-between items-center h-24 w-full px-4 text-white">
      <Link href="/" passHref>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">
          MEGAGIG
        </h1>
      </Link>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
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
                {products.length}
              </span>
            </div>
          </div>
        )}
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          MEGAGIG
        </h1>
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            <Link href={item.path} passHref>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
