'use client';
import spotifyLogo from '@/assets/spotify.png';
import appleLogo from '@/assets/apple.png';
import ytpodLogo from '@/assets/ytmu.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div className='flex gap-14 flex-none pr-14' animate={{
            translateX: '-50%',
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          >
            <Image src={spotifyLogo} alt='Spotify logo' className='logo-ticker-image' />
            <Image src={appleLogo} alt='apple logo' className='logo-ticker-image' />
            <Image src={ytpodLogo} alt='Youtube logo' className='logo-ticker-image' />
            <Image src={spotifyLogo} alt='Spotify logo' className='logo-ticker-image' />
            <Image src={appleLogo} alt='apple logo' className='logo-ticker-image' />
            <Image src={ytpodLogo} alt='Youtube logo' className='logo-ticker-image' />

            <Image src={spotifyLogo} alt='Spotify logo' className='logo-ticker-image' />
            <Image src={appleLogo} alt='apple logo' className='logo-ticker-image' />
            <Image src={ytpodLogo} alt='Youtube logo' className='logo-ticker-image' />
            <Image src={spotifyLogo} alt='Spotify logo' className='logo-ticker-image' />
            <Image src={appleLogo} alt='apple logo' className='logo-ticker-image' />
            <Image src={ytpodLogo} alt='Youtube logo' className='logo-ticker-image' />
          </motion.div>
        </div>
      </div>

    </div>
  );
};
