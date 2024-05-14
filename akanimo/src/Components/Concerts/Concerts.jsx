import React from 'react'
import Title from '../Layout/Title'
import concertOne from '../../assets/con-1.jpg'
import concertTwo from '../../assets/con-2.jpg'
import concertThree from '../../assets/con-3.jpg'
import concertFour from '../../assets/con-4.jpg'
import concertFive from '../../assets/con-5.jpg'
import concertSix from '../../assets/con-6.jpg'
import ConcertsCard from './ConcertsCard';

const Concerts = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Concerts & Events"
          des="My Upcoming Concerts & Tours"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ConcertsCard
          title="ABUJA CAMPUS RAID"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={concertOne}
        />
        <ConcertsCard
          title="LAGOS STREET CARNIVAL"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={concertTwo}
        />
        <ConcertsCard
          title="INDUSTRY NITE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={concertThree}
        />
        <ConcertsCard
          title="HOMECOMING NITE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={concertFour}
        />
        <ConcertsCard
          title="CAMPUS INVASION 1.0"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={concertFive}
        />
        <ConcertsCard
          title="AKANIMO LIVE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={concertSix}
        />
      </div>
    </section>
  );
}

export default Concerts