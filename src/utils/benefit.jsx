import {
  FaBed,
  FaBrain,
  FaHeartbeat,
  FaSnowboarding,
  FaHandHoldingHeart,
  FaToriiGate,
  FaUtensils,
  FaUserNurse,
  FaBookReader,
  // FaArchway,
} from 'react-icons/fa';

const benefits = [
  {
    id: 'benefit-1',
    icon: <FaBed size={50} color="#ffffff" />,
    desc: 'Sleeping room and nursing room',
  },
  {
    id: 'benefit-2',
    icon: <FaBrain size={50} color="#ffffff" />,
    desc: 'Opportunity for every timmy to grow',
  },
  {
    id: 'benefit-3',
    icon: <FaHeartbeat size={50} color="#ffffff" />,
    desc: 'Medical and health insurance',
  },
  {
    id: 'benefit-4',
    icon: <FaSnowboarding size={50} color="#ffffff" />,
    desc: 'Super fun teammates',
  },
  {
    id: 'benefit-5',
    icon: <FaHandHoldingHeart size={50} color="#ffffff" />,
    desc: 'Anything dress-code policy',
  },
  {
    id: 'benefit-6',
    icon: <FaToriiGate size={50} color="#ffffff" />,
    desc: 'Performance driven culture',
  },
  {
    id: 'benefit-7',
    icon: <FaUtensils size={50} color="#ffffff" />,
    desc: 'Free launch and gym',
  },
  {
    id: 'benefit-8',
    icon: <FaUserNurse size={50} color="#ffffff" />,
    desc: 'Mental health counseling',
  },
  {
    id: 'benefit-9',
    icon: <FaBookReader size={50} color="#ffffff" />,
    desc: 'Open culture',
  },
];

const getBenefit = () => benefits;

export {
  getBenefit,
};
