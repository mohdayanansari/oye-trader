import React from 'react';
import SectionHeading from './SectionHeading';
import { FcWorkflow } from 'react-icons/fc';

type Props = {};

const TimelineItem = ({ data }:any) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      {/* <time>{data.date}</time> */}
      <ul className="list-disc ml-[10px] mt-[25px]">
        {data.text.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )} */}
      <span className="circle" />
    </div>
  </div>
);

const Curriculum = (props: Props) => {
  return (
    <section className=" bg-slate-50">
      <div className="pt-16">
        <SectionHeading title="What you are going to learn" />
      </div>
      <div className="flex justify-center w-full mt-10">
        <div className="flex ">
          {timelineData.length > 0 && (
            <div className="timeline-container">
              {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const timelineData = [
  {
    text: [
      'Introduction',
      'Basics of Trading',
      'Trading View Demonstration',
      'Trading v/s Investing',
      'Types of Trading',
      'Technical v/s Fundamental Analysis',
      'Market Condition',
    ],
    category: {
      tag: 'Week-1',
      color: '#e6c718',
    },
  },
  {
    text: [
      'Support & Resistance',
      'Candle Stick Patterns',
      'Price Action Patterns',
    ],
    category: {
      tag: 'Week-2',
      color: '#4fe618',
    },
  },
  {
    text: [
      'Multi-Time Frame Analysis',
      'Indicators',
      'Risk Management',
      'Emotional Management',
      'Money Management',
      'Trading Psychology',
      'Rules & Setup',
      'Operator Psychology',
      'Smart Money Concept',
    ],
    category: {
      tag: 'Week-3',
      color: '#1848e6',
    },
  },
  {
    text: [
      'Strategies for Job Going Professionals',
      'Zerodha App Overview',
      'Trading View Demonstration',
      'Placing Orders',
      'GTT Orders',
      'How to Select Stocks',
      'End of Session',
    ],
    category: {
      tag: 'Week-4',
      color: '#e66018',
    },
  },
];
export default Curriculum;
