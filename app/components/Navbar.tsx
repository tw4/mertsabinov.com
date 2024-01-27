'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getDictionary, Locale } from '@/app/[lang]/dictionaries';

export const Navbar = () => {
  const [progressWidth, setProgressWidth] = useState<number>(0);
  const [currentLang, setCurrentLang] = useState<string>();
  const [navbarHomeTexts, setNavbarTexts] = useState<string>('');

  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'tr';
    setCurrentLang(lang);
    getDictionary(lang as Locale).then(res => {
      setNavbarTexts(res.navbar.home);
    });
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

  const handleLangChange = (lang: string) => {
    localStorage.setItem('lang', lang);
    window.location.href = `/${lang}`;
  };

  return (
    <nav className="fixed w-full bg-background">
      <div className="flex flex-row items-center justify-between space-x-5 p-5">
        <div className="space-x-3">
          <Link href={`/${currentLang}`} className="hover:text-textHighlight">
            {navbarHomeTexts}
          </Link>
          <Link
            href={`/${currentLang}/twitter`}
            className="hover:text-textHighlight"
          >
            Twitter
          </Link>
        </div>
        <div className="space-x-3">
          <button
            onClick={() => handleLangChange('tr')}
            className="hover:text-textHighlight"
          >
            TR
          </button>
          <button
            onClick={() => handleLangChange('en')}
            className="hover:text-textHighlight"
          >
            EN
          </button>
        </div>
      </div>
      <div className="relative">
        <div className=" absolute w-full h-[2px] bg-gray-500"></div>
        <div
          className={`absolute bg-textHighlight z-20`}
          style={{
            width: `${progressWidth}%`,
            height: '2px',
            transition: 'width ease-in-out',
          }}
        ></div>
      </div>
    </nav>
  );
};
