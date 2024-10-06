'use client';
import productImage from '@/assets/podcast-image.png';
import Image from 'next/image';
import SearchImage from '@/assets/search-icon.png';
import Picture from '@/assets/Picture-image.png';
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react';

export const AboutPodcast = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end','end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section id='about' ref={sectionRef} className='bg-gradient-to-b from-[#FFFFFF] to-[#f9d1ff] py-24 overflow-x-clip'>
      <div className="container">
        <div className='max-w-[540px] mx-auto'>
          <div className='flex justify-center'>
            <div className='info'>About : Learn more about the podcast</div>
          </div>
          <h2 className='text-center text-3xl md:text-[55px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#7518c2] text-transparent bg-clip-text mt-5'>A more effective way to track progress</h2>
          <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#34012f] mt-5'>The podcast at ear is a space where the host magically blends an enthusiasm for teaching and football. Get your earphones fully charged cuz there's no way on earth you would get such a blend. In here, she speaks everything Academia, pedagogy and linguistics! But how the hell is it related to football again? Well listen to one of her episodes to find out</p>
        </div>
        <div className='relative'>
          <Image src={productImage} alt="Podcast Image" className='mt-9' />
          <motion.img src={SearchImage.src} height={260} width={260} alt='Search Image' className='hidden md:block absolute -right-36 -top-32' style={{
            translateY,
          }} 
          />
          <motion.img src={Picture.src} alt='tube image' width={248} height={250} className='hidden md:block absolute bottom-24 -left-36' style={{translateY}}/>
        </div>
      </div>
    </section>
  );
};
