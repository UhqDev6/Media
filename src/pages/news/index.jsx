import Image from 'next/image';
// import Moment from 'react-moment';
// import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '@/components/layout';
// import Card from '@/components/molecules/card';
// import { configHost } from '@/constants/host';
import bgNews from '@/assets/image/bg-news.jpg';
import api from '@/utils/api';
import ListNews from '@/components/molecules/listnews';
import Button from '@/components/atoms/button';
import ListPressRelease from '@/components/molecules/listpressrelease';

export default function Blog(props) {
  const {
    dataNews,
    dataPressRelease,
  } = props;
  const [startNews, setStartNews] = useState(8);
  const [news, setNews] = useState(dataNews);
  const [startPressRelease, setStartPressRelease] = useState(8);
  const [pressRelease, setPressRelease] = useState(dataPressRelease);
  const [active, setActive] = useState(true);

  const handleAction = () => {
    setActive(!active);
  };

  async function loadNewsData() {
    const response = await fetch(`https://idnapi.jvalleyserver.net/api/blog_read?limit=${startNews}`);
    const responseJson = await response.json();

    const {
      query: { rows },
    } = responseJson;

    setNews(rows);
    setStartNews(startNews + 8);
  }

  async function loadPressReleaseData() {
    const response = await fetch(`https://idnapi.jvalleyserver.net/api/pr_read?limit=${startPressRelease}`);
    const responseJson = await response.json();

    const {
      query: { rows },
    } = responseJson;

    setPressRelease(rows);
    setStartPressRelease(startPressRelease + 8);
  }

  useEffect(() => {
    loadNewsData();
    loadPressReleaseData();
  }, []);

  // const dispatch = useDispatch();
  // dispatch(receiveNewsActionCreator(rows));

  // const {
  //   data: {
  //     query: {
  //       rows,
  //     },
  //   },
  // } = useQuery(['query'], api.getNews);
  // console.log(rows);

  return (
    <Layout>
      <Head>
        <title>
          News
        </title>
      </Head>
      <div className="relative w-full h-[500px] bg-gradient-to-tr from-black to-[#B1B2FF]">
        <Image
          src={bgNews}
          alt="bg-news"
          width={1440}
          height={500}
          object-fit="cover"
          placeholder="blur"
          overflow="hidden"
          className="w-full h-[500px] object-cover absolute mix-blend-overlay"
          priority
        />
        <div className="text-4xl md:text-7xl font-bold shadow-xl text-white relative flex justify-center">
          <div className="absolute mt-[250px] pl-8 pr-8 md:text-center">
            <h1>News</h1>
            <p className="font-extralight tracking-wide leading-relaxed text-sm mt-2">
              Share the same vision with IDN Media? Let’s work together to
              democratize information for every Indonesian.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-10">
        <div>
          <Button
            type="button"
            onClick={() => handleAction()}
            className={`${active === true ? 'bg-[#B1B2FF] p-2 rounded-lg text-white' : 'p-2'}`}
          >
            Blog
          </Button>
        </div>
        <div>
          <Button
            type="button"
            onClick={() => handleAction()}
            className={`${active === false ? 'bg-[#B1B2FF] p-2 rounded-lg text-white' : 'p-2'}`}
          >
            Press Release
          </Button>
        </div>
      </div>
      {
        active ? (
          <>
            <div>
              <ListNews data={news} />
            </div>
            <div className="w-full flex justify-center mt-10">
              <div className="w-1/2 md:w-1/5 underline decoration-[#B1B2FF] p-3">
                <button
                  type="button"
                  className="text-[#B1B2FF] flex mx-auto text-base font-bold"
                  onClick={() => loadNewsData()}
                >
                  Load more
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <ListPressRelease data={pressRelease} />
            </div>
            <div className="w-full flex justify-center mt-10">
              <div className="w-1/2 md:w-1/5 underline decoration-[#B1B2FF] p-3">
                <button
                  type="button"
                  className="text-[#B1B2FF] flex mx-auto text-base font-bold"
                  onClick={() => loadPressReleaseData()}
                >
                  Load more
                </button>
              </div>
            </div>
          </>
        )
      }
    </Layout>
  );
}

export async function getServerSideProps() {
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery(['query'], api.getNews);
  // return {
  //   props: {
  //     dehydratedState: dehydrate(queryClient),
  //   },
  // };
  const dataNews = await api.getNews();
  const dataPressRelease = await api.getPressRelease();

  return {
    props: {
      dataNews,
      dataPressRelease,
    },
  };
}
