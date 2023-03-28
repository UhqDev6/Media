import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import thumbnail from '@/assets/image/city.jpg';
import Button from '../button';

export default function Thumbnail() {
  return (
    <div className="relative mt-6 w-full h-screen bg-gradient-to-tr from-gray-900 to-[#B1B2FF]">
      <Image
        src={thumbnail}
        alt="city show"
        object-fit="cover"
        placeholder="blur"
        overflow="hidden"
        className="w-full h-screen object-cover absolute mix-blend-overlay"
      />
      <div className="text-4xl md:text-7xl font-bold shadow-xl text-white relative flex justify-center">
        <div className="absolute mt-[250px]">
          <Typewriter
            options={{
              strings: ['IDN Media', 'Media in the world'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="relative flex justify-center">
        <Button
          type="button"
          className="capitalize text-2xl text-white absolute bg-[#B1B2FF] p-2 rounded-full w-1/2 md:w-1/5 mt-[350px]"
        >
          <p className="text-sm">explore now</p>
        </Button>
      </div>
    </div>
  );
}
