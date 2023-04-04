import parse from 'html-react-parser';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Moment from 'react-moment';
import { useEffect, useState } from 'react';
import Button from '@/components/atoms/button';
import Card from '../card';
import { configHost } from '@/constants/host';
import SpinnerLoading from '@/components/atoms/SpinnerLoading';

export default function ListCareer(props) {
  const [isLoading, setIsLoading] = useState(true);
  const {
    careers,
  } = props;

  const smartSubstr = (str, len) => {
    let temp = str.substr(0, len);
    if (temp.lastIndexOf('<') > temp.lastIndexOf('>')) {
      temp = str.substr(0, 1 + str.indexOf('>', temp.lastIndexOf('<')));
    }
    return temp;
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div>
      {
        isLoading ? (
          <SpinnerLoading />
        ) : (
          <div className="flex w-full mx-auto justify-center">
            <div className="flex flex-wrap md:gap-5 justify-center pl-10 pr-10">
              {
            careers.map((career) => (
              <Card key={`${career?.id}`} className="grid md:w-[300px] w-full  h-auto shadow-lg mt-10 relative">
                <Card.Title>
                  <div className="tracking-wide leading-relaxed text-base pt-6 pl-6 pr-6 font-bold">
                    {career.name}
                  </div>
                </Card.Title>
                <Card.Body>
                  <div className="w-full text-gray-500 font-light tracking-wide leading-relaxed text-sm pt-6 pl-6 pr-6">
                    {
                        parse(`${smartSubstr(career.description, 70)}...`)
                    }
                  </div>
                  <Button
                    type="button"
                    className="underline tracking-wide leading-relaxed text-xs pl-6 pb-2"
                    onClick={() => {
                      window.open(`${configHost.EXTERNAL_HOST}${career.id}/${career.slug}`);
                    }}
                  >
                    View More
                  </Button>
                </Card.Body>

                <Card.Body className="flex justify-between pl-6 pr-6 pt-4 pb-4 tracking-wide leading-relaxed text-xs">
                  <div className="flex gap-2">
                    <div className="mt-[1.5px]">
                      <FaCalendarAlt size={15} />
                    </div>
                    <div className="flex-none">
                      <Moment format="D MMMM YYYY">
                        {
                          career.application_end_date
                        }
                      </Moment>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="mt-[1.5px]">
                      <FaMapMarkerAlt size={15} />
                    </div>
                    <div>
                      {
                        career.google_location.address_components.city
                      }
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="w-full h-1 mt-auto bg-gradient-to-br from-[#B1B2FF] to-fuchsia-300 rounded-b-xl" />
              </Card>
            ))
          }
            </div>
          </div>
        )
      }
    </div>
  );
}
