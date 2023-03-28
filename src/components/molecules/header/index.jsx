import Link from 'next/link';
import Title from '@/components/atoms/title';
import Navbar from '../navbar';

export default function Headers() {
  return (
    <div className="w-full h-[80px] mx-auto ">
      <div className="flex fixed w-full h-[110px] justify-between bg-white z-20 pt-7">
        <Link href="/">
          <Title className="ml-10 text-3xl md:p-2 font-bold">
            <span className="text-[#B1B2FF]">IDN </span>
            Media.
          </Title>
        </Link>
        <Navbar />
      </div>
    </div>
  );
}
