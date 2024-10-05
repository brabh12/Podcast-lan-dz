import Conversation from '@/assets/conver.png';
import Message from '@/assets/mess.png';
import Image from 'next/image';

export const Contact = () => {
  return (
    <section id='contact' className="bg-gradient-to-b from-[#EAEEFE] to-[#7618c281] py-24 overflow-hidden">
      <div className="container relative">
        <div className="section-heading relative">
          <h2 className="text-center text-3xl md:text-[55px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#7518c2] text-transparent bg-clip-text">Contact the podcast host now.</h2>
          <p className="section-des mt-5">If you want to talk to the podcast host or ask him direct questions or try to find out some inquiries, here are all the social media accounts</p>
          <Image src={Conversation} alt="conversation image" width={360} className='absolute -left-[350px] -top-[137px]' />
          <Image src={Message} alt='message image' width={360} className='absolute -right-[331px] -top-[19px]' />
        </div>
        <div className="flex mt-10 justify-center">
          <a href="https://www.instagram.com/die_lehrerin_pod/">
            <button className="btn btn-primary">Insta Account</button>
          </a>
        </div>
      </div>
    </section>
  );
};
