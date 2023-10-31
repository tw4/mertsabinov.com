import { FC, ReactNode } from "react";

interface SocialMediaItemProps {
  icon: ReactNode;
  link: string;
  title: string;
}

const SocialMediaItem: FC<SocialMediaItemProps> = ({ icon, link, title }) => {
  return (
    <div className="flex flex-row space-x-3 text-white hover:underline">
      <a className="flex flex-row space-x-2 items-center text-lg" href={link}>
        {icon}
        <p>{title}</p>
      </a>
    </div>
  );
};

export default SocialMediaItem;
