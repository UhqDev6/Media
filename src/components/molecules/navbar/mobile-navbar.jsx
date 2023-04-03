import Link from 'next/link';
import { useRouter } from 'next/router';
import { navLink } from '@/routes';

export default function MobileNavbar() {
  const router = useRouter();

  return (
    <div className="flex justify-end">
      <div className="bg-white w-[335px] h-[500px] absolute z-20 mt-10 rounded-b-3xl shadow-lg">
        <ul className="text-center flex-none pt-16">
          {
            navLink.map(({ link, name }) => (
              <Link key={`${name}-mobileNavbar`} href={link}>
                <li className={`${router.pathname === link ? 'border-b-2 border-[#D2DAFF] p-4' : 'border-b-[1px] border-gray-100 p-4'}`}>
                  {name}
                </li>
              </Link>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
