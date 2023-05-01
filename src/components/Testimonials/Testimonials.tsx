import React from 'react';
import Cards from './Cards';
import SectionHeading from '../SectionHeading';

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-slate-50">
      <div className="mt-[-80px] mb-[80px]">
        <SectionHeading title="Testimonials" />
      </div>
      <div className="flex justify-center gap-14">
        {cardData.map((item, index) => {
          return (
            <Cards
              key={index}
              name={item.name}
              img={item.img}
              desc={item.desc}
              rating={item.rating}
            />
          );
        })}
      </div>
    </section>
  );
};

const cardData = [
  {
    name: 'Ayan Ansari',
    img: 'https://avatars.githubusercontent.com/u/84264814?v=4',
    desc: 'The online live trading program has been a game-changer for me! The expert tutor has helped me understand the intricacies of trading, from technical analysis to risk management. I now feel more confident and knowledgeable in making profitable trades',
    rating: [true, true, true, true, true],
  },
  {
    name: 'Arun Sharma',
    img: 'https://i1.rgstatic.net/ii/profile.image/406844792164352-1474010765018_Q512/Shekhar-Tyagi-3.jpg',
    desc: "I struggled with trading until I joined the online trading program. The live sessions and practical guidance from the tutor have been invaluable. I've learned effective trading strategies and have seen a noticeable improvement in my trading performance.",
    rating: [true, true, true, true, true],
  },
  {
    name: 'Shekhar Tyagi',
    img: 'https://media.licdn.com/dms/image/D4D03AQEgM55PuY4kKg/profile-displayphoto-shrink_400_400/0/1673509715473?e=1687996800&v=beta&t=a5SlxDMKPyf0_Qc5XL5t4uVGOvLF1eddf6XIDAGfpMI',
    desc: "Thanks to the online trading program, I've gained a solid understanding of once-confusing trading concepts. The program's comprehensive curriculum and interactive sessions have given me the skills and confidence to make informed trading decisions. Highly recommended for aspiring traders!",
    rating: [true, true, true, true, true],
  },
];

export default Testimonials;
