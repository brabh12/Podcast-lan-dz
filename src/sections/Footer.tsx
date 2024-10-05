import Logo from '@/assets/logosaas.png';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='bg-black text-[#c5c5c58a] text-sm py-10 text-center'>
      <div className="container">
        <div className='inline-flex relative  before:w-full before:absolute'>
          <Image src={Logo} alt='Podcast Logo' height={40} className='relative' />
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href="#about">About</a>
          <a href="#goals">Goals</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className='mt-7'>&copy; 2024 Die lehrerin Pod, All rights reserved.</p>
      </div>
    </footer>
  );
};
