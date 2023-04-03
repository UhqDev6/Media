import Link from 'next/link';
import Button from '@/components/atoms/button';
import ListNews from '../../listnews';

export default function OurNews(props) {
  const {
    data,
  } = props;
  return (
    <div className="w-full mt-20">
      <div className="flex justify-center">
        <h1 className="text-3xl underline decoration-[#B1B2FF] ">
          <span className="text-[#B1B2FF] font-bold">
            Our
          </span>
          {' '}
          News
        </h1>
      </div>
      <div className="p-5">
        <ListNews data={data} />
        <div className="w-full flex justify-center mt-10">
          <Link href="/news" className="w-1/2 md:w-1/5 bg-[#B1B2FF] hover:bg-[#9798f8] p-3 rounded-full shadow-lg">
            <Button
              type="button"
              className="text-white flex mx-auto"
            >
              Show more...
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
