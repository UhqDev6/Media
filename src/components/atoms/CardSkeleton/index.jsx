import Skeleton from 'react-loading-skeleton';
import Card from '@/components/molecules/card';

export default function CardSkeleton() {
  return (
    <Card className="grid md:w-[300px] w-full  h-auto shadow-lg mt-10 relative">
      <Card.Body>
        <Skeleton
          height={150}
          width={335}
        />
        <Card.Title>
          <div className="text-gray-500 tracking-wide leading-relaxed text-sm pt-4 pl-4 pr-4">
            <span className="font-extrabold text-black">
              <Skeleton />
            </span>
          </div>
        </Card.Title>
        <Card.Title className="font-extralight tracking-wide leading-relaxed text-sm pt-4 pb-4 pl-4 pr-4 hover:underline hover:text-gray-700 cursor-pointer">
          <Skeleton height={60} />
        </Card.Title>
      </Card.Body>
      <Card.Footer className="w-full h-1 mt-auto bg-gradient-to-br from-[#B1B2FF] to-fuchsia-300 rounded-b-xl" />
    </Card>
  );
}
