'use client';

import React, { FC, useEffect, useState } from 'react';
import { getDictionary, Locale } from '@/app/[lang]/dictionaries';

interface Articles {
  title: string;
  link: string;
  pubDate: string;
}

interface ArticlesProps {
  lang?: string;
}

export const Articles: FC<ArticlesProps> = ({ lang = 'en-US' }) => {
  const [items, setItems] = useState<Articles[]>([]);
  const [error, setError] = useState(false);

  const intl = getDictionary(lang as Locale).then(res => res.article.more);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mertsabinov'
        );
        const data = await res.json();
        const items = data.items;
        setItems(items);
      } catch {
        setError(true);
      }
    }
    fetchData();
  }, []);

  return (
    <section>
      <div>
        <h1 className="text-3xl mb-5">latest posts</h1>
        <ul className="space-y-3 mb-10">
          {items.map((item, index) => (
            <div
              className="flex flex-row justify-between text-end hover:cursor-pointer hover:underline hover:decoration-textHighlight"
              key={index}
            >
              <p>
                {new Date(item.pubDate).toLocaleDateString(lang, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <a
                className="text-textHighlight"
                href={item.link}
                target={'_blank'}
              >
                <h3>{item.title}</h3>
              </a>
            </div>
          ))}
        </ul>
        <a
          className="text-textHighlight hover:underline hover:decoration-textHighlight"
          href={'https://medium.com/@mertsabinov'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          {intl}
        </a>
      </div>
    </section>
  );
};
