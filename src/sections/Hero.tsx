'use client';
import ArrowIcon from '@/assets/arrow-right.svg';
import mainImage from '@/assets/mic.png';
import HeadphoneImage from '@/assets/headph.png';
import likeImage from '@/assets/likeicon.png';
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { use, useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useMotionValueEvent(scrollYProgress, 'change', (latestValue) => console.log(latestValue))
  return (
    <section ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7518c2,#EAEEFE_100%)] overflow-x-clip'>
      <div className="container">
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Die lehrerin Pod</div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#7518c2] text-transparent bg-clip-text mt-6">Inspiring Growth Through Education</h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">A podcast posted on a weekly basis where I randomly discuss topics in an inconsistent way</p>
            <div className="flex gap-1 items-center mt-[30px]">
              <a href="https://linktr.ee/Latiiiifa">
                <button className="btn btn-primary">Listen Now</button>
              </a>
              <a href="#about">
                <button className="btn btn-text gap-1">
                  <span>About</span>
                  <ArrowIcon className="h-5 w-5" />
                </button>
              </a>
            </div>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <motion.img src={mainImage.src} alt='Main image' className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0' animate={{
              translateY: [-30, 30],
            }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 1,
                ease: 'easeInOut',
              }}
            />
            <motion.img src={HeadphoneImage.src} width={220} height={220} alt='Headphone Image' className='hidden md:block -top-8 -left-32 md:absolute' style={{
              translateY: translateY,
            }}
            />
            <Image src={likeImage} width={220} alt='Like image' className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]' />
          </div>
        </div>
      </div>
    </section>
  );
};
