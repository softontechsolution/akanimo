import React from 'react'
import Title from '../Layout/Title';
import Card from "./Card";
import { musicData } from '../../Components/Data/Data';

const Mymusic = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="My Music" des="Stream & Support" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {musicData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Mymusic