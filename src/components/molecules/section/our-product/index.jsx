import Image from 'next/image';

export default function OurProduct() {
  const ProductData = [
    {
      id: 1,
      icon: '/logo/duniaku-prod.svg',
    },
    {
      id: 2,
      icon: '/logo/fortune-prod.svg',
    },
    {
      id: 3,
      icon: '/logo/ggwp-prod.svg',
    },
    {
      id: 4,
      icon: '/logo/popmama-prod.svg',
    },
    {
      id: 5,
      icon: '/logo/popbela-prod.svg',
    },
    {
      id: 6,
      icon: '/logo/ice-logo.png',
    },
    {
      id: 7,
      icon: '/logo/yummy-prod.svg',
    },
  ];
  return (
    <div className="w-full mt-20">
      <div className="flex justify-center">
        <h1 className="text-3xl underline decoration-[#B1B2FF]">
          <span className="text-[#B1B2FF] font-bold">
            Our
          </span>
          {' '}
          Product
        </h1>
      </div>
      <div className="w-full mt-10">
        <div className="flex justify-center">
          <div className="md:pl-40 md:pr-40 pl-8 pr-8">
            <p className="tracking-wider font-extralight">
              More than just a media company, IDN Media continuously develops its
              ecosystem to support its vision to democratize information and give
              positive impacts to society.
            </p>
          </div>
        </div>
        <div className="flex w-full mx-auto justify-center pt-10">
          <div className="flex flex-wrap md:gap-8 md:w-[70%] justify-center pl-10 pr-10 gap-8">
            {
            ProductData.map((product) => (
              <div key={product.id}>
                <Image
                  priority
                  src={product.icon}
                  height={100}
                  width={100}
                  alt="Follow us on Twitter"
                  className="w-[100px] h-[60px]"
                />
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
}
