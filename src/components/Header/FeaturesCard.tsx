/* eslint-disable @next/next/no-img-element */

import type { FC } from "react";

type IProps = {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
};

const FeaturesCard: FC<IProps> = ({
  cardDescription,
  cardImage,
  cardTitle,
}) => {
  return (
    <div className="flex flex-col items-center p-5 border-[1px] border-gray-300 bg-white rounded-lg text-start">
      <img
        className="rounded-lg"
        src={cardImage}
        alt="Feature Card"
        height={316}
        width={316}
      />
      <h3 className="text-2xl font-bold mt-5">{cardTitle}</h3>
      <p className="mt-5 w-full text-gray-500">{cardDescription}</p>
    </div>
  );
};

export default FeaturesCard;
