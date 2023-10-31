import SocialMediaItem from "@/components/SocialMediaItem";
import {
  RiTwitterXFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const home = () => {
  return (
    <main>
      <div className="flex flex-row justify-center items-center w-[100vw] h-[100vh] bg-gradient-to-r from-violet-600 to-indigo-600 ">
        <div className="text-center">
          <a
            className="text-white hover:cursor-pointer hover:underline"
            href="https://github.com/buzzspire">
            <h1 className="text-3xl">Mert Sabinov Stuff</h1>
          </a>
          <p className="text-white">
            Creator of the{" "}
            <a href="https://www.buzzspire.net/" className="hover:underline">
              @BuzzSpire
            </a>{" "}
            Ecosystem. Tech Entrepreneur. Full Stack Developer
          </p>
        </div>
        <div className="absolute h-20 w-full flex flex-row items-end justify-center space-x-3 bottom-10 z-10">
          <SocialMediaItem
            icon={<RiTwitterXFill className="text-white" />}
            link="https://x.com/mertsabinov"
            title="X.com"
          />
          <SocialMediaItem
            icon={<RiGithubFill className="text-white" />}
            link="https://github.com/mertsabinov"
            title="GitHub"
          />
          <SocialMediaItem
            icon={<RiLinkedinBoxFill className="text-white" />}
            link="https://linkedin.com/in/mertsabinov"
            title="LinkedIn"
          />
        </div>
      </div>
    </main>
  );
};

export default home;
