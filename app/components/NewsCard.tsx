import { FC } from 'react';

interface NewsCardProps {
  date: string;
  content: string;
}

export const NewsCard: FC<NewsCardProps> = ({ content, date }) => {
  return (
    <div className="">
      <p className="font-bold">{date}</p>{' '}
      <p className="text-textHighlight">{content}</p>
    </div>
  );
};
