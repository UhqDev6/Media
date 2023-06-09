import Head from 'next/head';
import Moment from 'react-moment';
import parse from 'html-react-parser';
import Image from 'next/image';
import Layout from '@/components/layout';
import { configHost } from '@/constants/host';

export default function BlogDetail(props) {
  const {
    blog,
  } = props;

  return (
    <Layout>
      <Head>
        <title>
          {`Blog | ${blog?.title}`}
        </title>
      </Head>
      <div className="mt-12 ml-10 mr-10 md:m-20 md:flex md:justify-between">
        <div className="md:w-[70%]">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide leading-relaxed capitalize">
            {
            blog?.title
          }
          </h1>
          <div className="text-gray-500 tracking-wide leading-relaxed text-sm mt-4">
            <span className="font-extrabold text-black">{blog?.author?.name}</span>
            {' | '}
            <span>
              <Moment format="D MMMM YYYY">
                {blog?.release_date}
              </Moment>
            </span>
          </div>
          <div className="mt-2">
            <Image
              src={`${configHost?.LOCAL_IMAGE_HOST}${blog?.media?.media_url}`}
              alt={blog?.media?.media_url}
              width={500}
              height={200}
              className="w-[500px] h-[200px] md:w-full md:h-[500px]"
            />
          </div>
          <div className="mt-4 tracking-wide leading-relaxed font-light text-gray-500 text-sm">
            {
            parse(blog?.description)
          }
          </div>
        </div>
        <div />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://idnapi.jvalleyserver.net/api/blog_read');
  const data = await res.json();
  const paths = data.query.rows.map((dt) => ({
    params: {
      id: `${dt.id}`,
      slug: dt.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id, slug } = params;
  // eslint-disable-next-line radix
  const intId = parseInt(id);
  const res = await fetch('https://idnapi.jvalleyserver.net/api/blog_read');
  const data = await res.json();

  const {
    query: { rows },
  } = data;

  let blog = null;
  if (rows && rows.length > 0) {
    blog = rows.find((item) => item.id === intId && item.slug === slug) || null;
  }

  return {
    props: {
      blog,
    },
  };
}
