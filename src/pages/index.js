// import { useDispatch } from 'react-redux';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Thumbnail from '@/components/atoms/thumbnail';
import Layout from '@/components/layout';
import OurCareer from '@/components/molecules/section/our-career';
import OurCulture from '@/components/molecules/section/our-culture';
import OurNews from '@/components/molecules/section/our-news';
import OurProduct from '@/components/molecules/section/our-product';
import api from '@/utils/api';
import { getCulture } from '@/utils/culture';
import SpinnerLoading from '@/components/atoms/SpinnerLoading';
// import { receiveNewsActionCreator } from '@/states/news/action';
// import api from '@/utils/api';

export default function Home(props) {
  const [isLoading, setIsLoading] = useState(true);
  const {
    dataNews,
    culture,
  } = props;

  // const dispatch = useDispatch();
  // dispatch(receiveNewsActionCreator(rows));
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <Layout>
      <Head>
        <title>
          Home
        </title>
      </Head>
      {
        isLoading ? (
          <SpinnerLoading />
        ) : (
          <>
            <section>
              <Thumbnail />
            </section>
            <section>
              <OurNews data={dataNews} />
            </section>
            <section>
              <OurCareer />
            </section>
            <section>
              <OurCulture data={culture} />
            </section>
            <section>
              <OurProduct />
            </section>
          </>
        )
      }
    </Layout>
  );
}

export async function getServerSideProps() {
  const dataNews = await api.getNews();
  const dataPressRelease = await api.getPressRelease();
  const culture = getCulture();

  return {
    props: {
      dataNews,
      dataPressRelease,
      culture,
    },
  };
}
