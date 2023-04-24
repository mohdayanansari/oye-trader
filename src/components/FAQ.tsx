import React from 'react';
import SectionHeading from './SectionHeading';
import { Accordion } from 'flowbite-react';

type Props = {};

const FAQ = (props: Props) => {
  return (
    <section className="h-screen bg-slate-50 flex flex-col items-center">
      <div className="pt-16">
        <SectionHeading title="FAQ" />
      </div>
      <div className="flex justify-center w-[80%]  mt-10">
        <Accordion
          collapseAll={true}
          flush={true}
          className="w-full transition-all ease-in-out duration-300 border p-5 rounded-2xl bg-white drop-shadow-xl"
        >
          {data.map((item, index) => (
            <Accordion.Panel key={index}>
              <Accordion.Title>{item.title}</Accordion.Title>
              <Accordion.Content>{item.desc}</Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const data = [
  {
    title: 'What is Flowbite?',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit repellendus nulla seqi molestiae amet  quas molestias vero, voluptas vitae? Natus soluta rem ab laudantium quae eos temporibus? Optio!',
  },
  {
    title: 'What is Flowbite?',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit repellendus nulla seqi molestiae amet  quas molestias vero, voluptas vitae? Natus soluta rem ab laudantium quae eos temporibus? Optio!',
  },
  {
    title: 'What is Flowbite?',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit repellendus nulla seqi molestiae amet  quas molestias vero, voluptas vitae? Natus soluta rem ab laudantium quae eos temporibus? Optio!',
  },
  {
    title: 'What is Flowbite?',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit repellendus nulla seqi molestiae amet  quas molestias vero, voluptas vitae? Natus soluta rem ab laudantium quae eos temporibus? Optio!',
  },
  {
    title: 'What is Flowbite?',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit repellendus nulla seqi molestiae amet  quas molestias vero, voluptas vitae? Natus soluta rem ab laudantium quae eos temporibus? Optio!',
  },
  {
    title: 'What is Flowbite?',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit repellendus nulla seqi molestiae amet  quas molestias vero, voluptas vitae? Natus soluta rem ab laudantium quae eos temporibus? Optio!',
  },
];

export default FAQ;
