export default function OurCulture(props) {
  const {
    data,
  } = props;
  return (
    <div className="w-full mt-20">
      <div className="flex justify-center">
        <h1 className="text-3xl underline decoration-[#B1B2FF]">
          <span className="text-[#B1B2FF] font-bold">
            Our
          </span>
          {' '}
          Culture
        </h1>
      </div>
      <div className="w-full mt-10">
        <div className="flex justify-center">
          <div className="md:pl-40 md:pr-40 pl-8 pr-8">
            <p className="tracking-wider font-extralight">
              Our culture
              plays an important part to make Info Media like it is today.
              We want to be a company with a genuinely good
              culture that values inclusion and growth mindset.
              We also have Timmyness, 10 values that
              must be owned by everyone in Info Media
            </p>
          </div>
        </div>
        <div className="w-full mt-10">
          <div className="sticky top-20 bg-white py-3 shadow-xl shadow-white z-40  pl-8 pr-8 md:pl-40 md:pr-40">
            <h2 className="group-date">
              Budaya Kerja
            </h2>
          </div>
          {
            data.map((cult) => (
              <div className="timeline" key={cult.id}>
                <div className="relative">
                  <div className="dot" title="current event">
                    <div className={`${cult.priority === true ? 'dot absolute -top-1 -left-1 animate-ping' : ''}`} />
                  </div>
                  <div className="pl-10 pr-10 md:pr-60 ">
                    {/* <span className="timeline-date">13 November 2021</span> */}
                    <h3 className="timeline-title">{cult.title}</h3>
                    <p className="tracking-wider font-extralight text-sm">
                      {
                          cult.description
                        }
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
