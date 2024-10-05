'use client';
import { useState } from 'react';
import Logo from '@/assets/logosaas.png';
import Image from "next/image";
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className='text-white/60 hidden md:block'>Behind Every Great Student is a Teacher</p>
        <div className='inline-flex gap-1 items-center'>
          <p>Official Website</p>
        </div>
      </div>
      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Image src={Logo} alt='Saas Logo' height={40} width={40} />

            <MenuIcon className="h-5 w-5 md:hidden cursor-pointer" onClick={toggleNav} />

            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href="#about">About</a>
              <a href="#goals">Goals</a>
              <a href="#contact">
                <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight'>Contact</button>
              </a>
            </nav>
            <nav
              className={`absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-lg text-center flex flex-col gap-2 p-4 md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                isNavOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
              <a href="#about" className="py-2 text-white">About</a>
              <a href="#goals" className="py-2 text-white">Goals</a>
              <a href="#contact">
                <button className='bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight'>Contact</button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
