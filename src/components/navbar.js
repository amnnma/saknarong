import Link from 'next/link';

const Navbar = () => {
  return (
<nav className= "text-white py-4 px-6 flex items-center justify-between w-full">
      <Link href="/" className='font-bold text-xl'>
       Saknarong Sombutjaroan
      </Link>
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/">
           Projects
          </Link>
        </li>
        <li>
          <Link href="/about">
           About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
