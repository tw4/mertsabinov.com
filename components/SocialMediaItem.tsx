import { FC, ReactNode } from "react";

interface SocialMediaItemProps {
  icon: ReactNode;
  link: string;
}

const SocialMediaItem: FC<SocialMediaItemProps> = ({ icon, link }) => {
  return (
    <div className="flex flex-row space-x-3">
      <a className="text-xl" href={link}>
        {icon}
      </a>
    </div>
  );
};

export default SocialMediaItem;
