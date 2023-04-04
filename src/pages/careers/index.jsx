import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Layout from '@/components/layout';
import bgCareer from '@/assets/image/bg-news.jpg';
import { getBenefit } from '@/utils/benefit';
import { getEmployee } from '@/utils/employe';
import ListCareer from '@/components/molecules/listcareers';
import api from '@/utils/api';

export default function Career(props) {
  const {
    employee,
    jobs,
  } = props;

  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(6);
  const [careers, setCareers] = useState(jobs);
  const carousel = useRef();

  const loadMore = async () => {
    const response = await fetch(`https://idnapi.jvalleyserver.net/api/job_read?offset=0&limit=${start}`, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    const {
      jobs,
    } = responseJson;

    setCareers(jobs);
    setStart(start + 6);
  };

  const benefits = getBenefit();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    loadMore();
  }, []);

  return (
    <Layout>
      <Head>
        <title>
          Career
        </title>
      </Head>
      <div className="relative w-full h-[500px] bg-gradient-to-tr from-black to-[#B1B2FF]">
        <Image
          src={bgCareer}
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
            <h1>Careers</h1>
            <p className="font-extralight tracking-wide leading-relaxed text-sm mt-2">
              Share the same vision with IDN Media? Let’s work together to
              democratize information for every Indonesian.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full pl-10 pr-10 pt-10">
        <div className="flex justify-center">
          <h1 className="text-2xl md:text-4xl tracking-wide leading-relaxed font-bold flex justify-center">Benefits Working</h1>
        </div>
        <div className="flex md:w-[800px] mx-auto pt-10">
          <div className="flex flex-wrap md:gap-8 gap-8">
            {
              benefits?.map((benefit) => (
                <div key={benefit.id} className="mx-auto justify-center hover:bg-gradient-to-br hover:from-[#B1B2FF] hover:to-fuchsia-300 bg-[#B1B2FF]  p-4 rounded-xl">
                  <div className="w-[200px] ">
                    {
                      benefit.icon
                    }
                  </div>
                  <div className="mt-2 w-[200px]">
                    <p className="text-xs text-white tracking-wide leading-relaxed">
                      {
                        benefit.desc
                      }
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="md:w-[80%] mx-auto mt-10">
        <div className="flex justify-center">
          <h1 className="text-2xl md:text-4xl tracking-wide leading-relaxed font-bold flex justify-center">Employee statement</h1>
        </div>
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {
              employee.map((emp) => (
                <motion.div key={emp.id} className="item relative bg-gradient-to-tr from-black to-[#B1B2FF] mt-10">
                  <Image
                    src={emp.picture}
                    alt="picture"
                    width={500}
                    height={200}
                    object-fit="cover"
                    placeholder="blur"
                    overflow="hidden"
                    priority
                    className="img pl-0 md:pl-0 absolute mix-blend-overlay"
                  />
                  <div className="text-4xl md:text-4xl font-bold shadow-xl text-white relative flex justify-center">
                    <div className="absolute mt-[240px] pl-8 pr-8 ">
                      <h1>
                        {
                          emp.position
                        }
                      </h1>
                      <p className="text-base">
                        {`~${emp.name}~`}
                      </p>
                      <p className="font-extralight tracking-wide leading-relaxed text-xs mt-2">
                        {
                          `"${emp.comment}"`
                        }
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
            }
          </motion.div>
        </motion.div>
        <div className="w-full p-8 md:p-0 md:pt-8">
          <p className="tracking-wide leading-relaxed text-slate-600 text-justify text-sm">
            More importantly, you’ll get the opportunity to shape the future of media industry
            in Indonesia Our perks and benefits are specially designed to keep you happy and
            healthy physically, emotionally, and financially. We want to take care of you and
            make sure that you can focus and enjoy what you are doing here. Ultimately,
            we want you to become a better person by working at IDN Media.
          </p>
        </div>
      </div>
      <div className="md:w-[80%] mx-auto mt-10">
        <div className="flex justify-center">
          <h1 className="text-2xl md:text-4xl tracking-wide leading-relaxed font-bold flex justify-center">Current Openings</h1>
        </div>
        <div>
          <ListCareer careers={careers} />
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <div className="w-1/2 md:w-1/5 underline decoration-[#B1B2FF] p-3">
          <button
            type="button"
            className="text-[#B1B2FF] flex mx-auto text-base font-bold"
            onClick={() => loadMore()}
          >
            Load more
          </button>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const careers = await api.getCareer();
  const {
    jobs,
  } = careers;

  const employee = getEmployee();

  return {
    props: {
      employee,
      jobs,
    },
  };
}
