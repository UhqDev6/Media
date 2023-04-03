import Link from 'next/link';
import { useRouter } from 'next/router';
import { navLink } from '@/routes';

export default function DefaultNavbar() {
  const router = useRouter();
  return (
    <div>
      <ul className="flex justify-between gap-8">
        {
          navLink.map(({ link, name }) => (
            <Link key={`${name}-defaultNavbar`} href={link} prefetch={false}>
              <li
                className={`${router.pathname === link ? ('bg-[#B1B2FF] p-2 rounded-full text-white')
                  : ('p-2 text-gray-500 capitalize inline-block relative cursor-pointer transition-all duration-500 before:content-[ ] before:absolute before:bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-[#B1B2FF] before:bg-fuchsia-300 before:to-bg-fuchsia-300 hover:before:w-full hover:before:opacity-100')
                }`}
              >
                {name}
              </li>
            </Link>
          ))
        }
      </ul>
    </div>
  );
}
