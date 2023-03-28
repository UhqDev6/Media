import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/layout';
import bgNews from '@/assets/image/bg-news.jpg';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>
          About-us
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
            <h1>About-us</h1>
            <p className="font-extralight tracking-wide leading-relaxed text-sm mt-2">
              Share the same vision with IDN Media? Let’s work together to
              democratize information for every Indonesian.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
