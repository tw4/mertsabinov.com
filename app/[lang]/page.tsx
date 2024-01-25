import { NewsCard } from '@/app/components/NewsCard';
import { getDictionary, Locale } from '@/app/[lang]/dictionaries';

interface HomeProps {
  params: {
    lang: string;
  };
}

export default async function Home({ params: { lang } }: HomeProps) {
  const intl = await getDictionary(lang as Locale);
  return (
    <main>
      <div className="flex flex-row items-center justify-between md:flex-col-reverse">
        <div>
          <h1 className="text-3xl">{intl.bio.name}</h1>
          <div className="space-y-3 mt-5">
            {intl.bio.description.map((text: string, index: number) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        <div>
          <img
            className="rounded-full border-2 border-b-textHighlight border-t-textHighlight md:h-40"
            src="/avatar.jpeg"
            alt="avatar"
          />
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-3xl mb-5">news</h1>
        <div className="space-y-3">
          {intl.news.map((news: any, index: number) => (
            <NewsCard key={index} date={news.date} content={news.content} />
          ))}
        </div>
        {/*<div className="mt-20">*/}
        {/*  <h1 className="text-3xl mb-5">latest posts</h1>*/}
        {/*  <div className="space-y-3">*/}
        {/*    <NewsCard date="2024/01/01" content="news " />*/}
        {/*    <NewsCard date="2024/01/01" content="news " />*/}
        {/*    <NewsCard date="2024/01/01" content="news " />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </main>
  );
}
