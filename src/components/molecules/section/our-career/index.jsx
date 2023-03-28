import Image from 'next/image';
import Link from 'next/link';
import photoCareer from '@/assets/image/career_image.jpg';
import Button from '@/components/atoms/button';
import Title from '@/components/atoms/title';

export default function OurCareer() {
  return (
    <div className="w-full mt-20">
      <div className="flex justify-center">
        <h1 className="text-3xl underline decoration-[#B1B2FF]">
          <span className="text-[#B1B2FF] font-bold">
            Our
          </span>
          {' '}
          Career
        </h1>
      </div>
      <div className="pt-16 md:hidden">
        <div className="w-full">
          <Image
            src={photoCareer}
            alt="photo-career"
            height={100}
            width={200}
            priority
            className="w-full"
          />
        </div>
        <div className="w-full">
          <p className="tracking-wider font-extralight p-6">
            Share the same vision
            {' '}
            <span className="underline decoration-[#B1B2FF]">Info Media?</span>
            {' '}
            Let`s work together to demonstrate information
            for every Indonesia.`
          </p>
        </div>
        <div className="pl-6">
          <Link href="/" className="w-1/3 bg-[#B1B2FF] hover:bg-[#9798f8] p-2 rounded-full shadow-lg">
            <Button
              type="button"
              className="text-white text-sm w-1/3"
            >
              Go to Career
            </Button>
          </Link>
        </div>
      </div>
      <div className="pt-16 hidden md:block">
        <div className="flex justify-between">
          <div className="flex w-full pl-20">
            <div className="w-full">
              <div className="pt-28">
                <Title className="text-6xl font-bold">
                  Career
                </Title>
              </div>
              <div className="pt-8">
                <p className="tracking-wider font-extralight">
                  Share the same vision
                  {' '}
                  <span className="underline decoration-[#B1B2FF]">Info Media?</span>
                  {' '}
                  Let`s work together to demonstrate information
                  for every Indonesia.`
                </p>
              </div>
              <div className="pt-6">
                <Link href="/" className="w-1/3 bg-[#B1B2FF] hover:bg-[#9798f8] p-2 rounded-full shadow-lg">
                  <Button
                    type="button"
                    className="w-1/3 text-white "
                  >
                    Go to Career
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-full pr-20">
            <div className="w-full">
              <Image
                src={photoCareer}
                alt="photo-career"
                height={500}
                width={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
