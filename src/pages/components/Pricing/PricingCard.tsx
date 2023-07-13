import type { FC } from "react";
import { MdVerified } from "react-icons/md";

type IProps = {
  planName: string;
  planPrice: string;
  planDescriptions: string;
  suggested: boolean;
  buttonHref: string;
  planFeatures: string[];
};

const PricingCard: FC<IProps> = ({
  planName,
  planPrice,
  planDescriptions,
  suggested,
  buttonHref,
  planFeatures,
}) => {
  return (
    <div>
      <div className="bg-white p-5 text-start rounded-md border-[1px] border-gray-400">
        <div
          className={`flex flex-row items-center ${
            suggested && "justify-between"
          }`}>
          <p className="mt-5 font-bold text-xl">{planName}</p>
          {suggested && (
            <p className="mt-5 ml-5 text-sm text-white bg-black px-2 rounded-lg">
              Suggested
            </p>
          )}
        </div>
        <h3 className="mt-5 text-3xl">{planPrice}</h3>
        <p className="mt-5 mb-10 h-32">{planDescriptions}</p>
        <a
          href={buttonHref}
          className="w-full inline-block text-center px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800  border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-black focus:border-white">
          Get Started
        </a>
      </div>
      <div className="mt-10">
        {planFeatures &&
          planFeatures.map((feat, index) => {
            return (
              <div key={index}>
                <div className="flex flex-row items-center text-start space-x-3">
                  <MdVerified className="text-gray-500 w-5 " />
                  <p className="text-xs text-gray-500">{feat}</p>
                </div>
                <hr className="mt-5 mb-5 w-full border-[1px] border-gray-200" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PricingCard;
