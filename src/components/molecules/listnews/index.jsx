import Image from 'next/image';
import Moment from 'react-moment';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { configHost } from '@/constants/host';
import Card from '../card';
import CardSkeleton from '@/components/atoms/CardSkeleton';

export default function ListNews(props) {
  const [isLoading, setIsLoading] = useState(true);
  const {
    data,
  } = props;

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="flex w-full mx-auto justify-center">
      <div className="flex flex-wrap md:gap-5 justify-center pl-10 pr-10">
        <SkeletonTheme>
          {
            isLoading ? (
              <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </>
            ) : (

              data?.map((blog) => (
                <Card key={`${blog?.id}`} className="grid md:w-[300px] w-full  h-auto shadow-lg mt-10 relative">
                  <Card.Body>
                    <Image
                      src={`${configHost?.LOCAL_IMAGE_HOST}${blog?.media?.media_url}`}
                      alt={blog?.media?.media_url}
                      width={500}
                      height={200}
                      priority
                      className="w-[500px] h-[200px]"
                    />
                    <Card.Title>
                      <div className="text-gray-500 tracking-wide leading-relaxed text-sm pt-4 pl-4">
                        <span className="font-extrabold text-black">{blog?.author?.name}</span>
                        {' | '}
                        <span>
                          <Moment format="D MMMM YYYY">
                            {blog?.release_date}
                          </Moment>
                        </span>
                      </div>
                    </Card.Title>
                    <Card.Title className="font-extralight tracking-wide leading-relaxed text-sm pt-4 pb-4 pl-4 pr-4 hover:underline hover:text-gray-700 cursor-pointer">
                      <Link href={`/news/blog/${blog.id}/${blog.slug}`}>
                        {
                          blog.title
                        }
                      </Link>
                    </Card.Title>
                  </Card.Body>
                  <Card.Footer className="w-full h-1 mt-auto bg-gradient-to-br from-[#B1B2FF] to-fuchsia-300 rounded-b-xl" />
                </Card>
              ))
            )
          }

        </SkeletonTheme>
      </div>
    </div>
  );
}
