import { FC } from 'react';

interface NewsCardProps {
  date: string;
  content: string;
}

export const NewsCard: FC<NewsCardProps> = ({ content, date }) => {
  return (
    <div className="flex flex-row items-center justify-between text-end">
      <p className="font-bold">{date}</p> <p>{content}</p>
    </div>
  );
};
