import Checking from '@/assets/check.svg';
import { twMerge } from 'tailwind-merge';

const podcastGoals = [
  {
    title: "Inspiration",
    description: "Motivating listeners to take action and pursue their dreams.",
    popular: false,
    inverse: false,
    goals: [
      "Share success stories",
      "Provide actionable tips",
      "Offer motivational content",
    ],
  },
  {
    title: "Education",
    description: "Providing valuable insights and lessons across various fields.",
    popular: true,
    inverse: true,
    goals: [
      "Interview experts",
      "Deliver in-depth tutorials",
      "Expand listeners' knowledge",
      "Answer listener questions",
    ],
  },
  {
    title: "Community",
    description: "Building a strong and supportive community of listeners.",
    popular: false,
    inverse: false,
    goals: [
      "Encourage discussions",
      "Promote collaboration",
      "Host community events",
      "Foster a sense of belonging",
    ],
  },
];

export const PodcastGoals = () => {
  return (
    <section id='goals' className="py-24">
      <div className="container">
        <div className='max-w-[540px] mx-auto'>
          <h2 className="text-center text-3xl md:text-[55px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#7518c2] text-transparent bg-clip-text mt-5">Podcast Goals</h2>
          <p className="section-des mt-5">Learn about the most important goals of the podcast</p>
        </div>
        <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
          {podcastGoals.map(({ title, description, popular, inverse, goals }) => (
            <div className={twMerge('p-10 border border-[#99939380] rounded-3xl shadow-[0_8px_15px_#EAEAEA] max-w-xs w-full', inverse === true && 'border-black bg-black text-white')}>
              <div className='flex justify-between'>
                <h3 className='text-lg font-bold text-[#999797]'>{title}</h3> 
              </div>
              <p className='mt-[30px]'>{description}</p>
              <ul className='flex flex-col gap-5 mt-8'>
                {goals.map(goal => (
                  <li className='text-sm flex items-center gap-4'>
                    <Checking className="h-6 w-6" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
