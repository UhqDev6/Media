import Title from '@/components/atoms/title';

export default function Footer() {
  return (
    <div className="w-full relative bg-gradient-to-t from-[#B1B2FF] to-white h-[100px]">
      <Title className="text-center pt-10 text-2xl font-bold">
        <span className="text-white">IDN</span>
        {' '}
        Media.
      </Title>
    </div>
  );
}
