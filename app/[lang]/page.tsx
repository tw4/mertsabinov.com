import { NewsCard } from '@/app/components/NewsCard';
import { getDictionary, Locale } from '@/app/[lang]/dictionaries';
import { Articles } from '@/app/components/Articles';
import React from 'react';

interface HomeProps {
  params: {
    lang: string;
  };
}

export default async function Home({ params: { lang } }: HomeProps) {
  const intl = await getDictionary(lang as Locale);
  return (
    <main>
      <div className="mt-10 flex flex-row items-center justify-between lg:flex-col-reverse md:mt-16 sm:mt-20">
        <div className="w-1/2 lg:w-full">
          <h1 className="text-3xl">{intl.bio.name}</h1>
          <div className="space-y-3 mt-5">
            {intl.bio.description.map((text: string, index: number) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        <img
          className="rounded-full border-2 border-b-textHighlight border-t-textHighlight h-80 md:h-40"
          src="/avatar.jpeg"
          alt="avatar"
        />
      </div>

      <div className="mt-20">
        <h1 className="text-3xl mb-5">{intl.bio.news}</h1>
        <div className="space-y-3">
          {intl.news.map((news: any, index: number) => (
            <NewsCard key={index} date={news.date} content={news.content} />
          ))}
        </div>
        <div className="mt-20">
          <h1 className="text-3xl mb-5">{intl.bio.lastPost}</h1>
          <Articles lang={lang} />
          <div className="space-y-3"></div>
        </div>
      </div>
    </main>
  );
}
