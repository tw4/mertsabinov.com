'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [progressWidth, setProgressWidth] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const newProgressWidth = (scrollPosition / pageHeight) * 100;
      setProgressWidth(newProgressWidth);
      console.log(newProgressWidth);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed w-full bg-background">
      <div className="text-end space-x-5 p-5">
        <Link className="hover:text-textHighlight" href="/">
          TR
        </Link>
        <Link className="hover:text-textHighlight" href="/en">
          EN
        </Link>
      </div>
      <div className="relative">
        <div className=" absolute w-full h-[2px] bg-gray-500"></div>
        <div
          className={`absolute bg-textHighlight z-20`}
          style={{
            width: `${progressWidth}%`,
            height: '2px',
            transition: 'width 0.3s ease-in-out',
          }}
        ></div>
      </div>
    </nav>
  );
};
