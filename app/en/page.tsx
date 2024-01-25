import { NewsCard } from '@/app/components/NewsCard';

export default function Home() {
  return (
    <main>
      <div className="flex flex-row items-center justify-between md:flex-col-reverse">
        <div>
          <h1 className="text-3xl">Mert Sabinov</h1>
          <div className="space-y-5 mt-5">
            <p>
              Hello, I am{' '}
              <span className="text-textHighlight">Mert Sabinov</span>! Born in
              the year <span className="text-textHighlight">1999</span>, I am a{' '}
              <span className="text-textHighlight">
                computer science student
              </span>{' '}
              focusing on a career in software development. Currently, I am
              studying at{' '}
              <span className="text-textHighlight">
                Istanbul University in the Management Information Systems
                department
              </span>{' '}
              and also pursuing education in the{' '}
              <span className="text-textHighlight">
                Faculty of Economics and Administrative Sciences at Trakya
                University
              </span>
              .
            </p>
            <p>
              My interest and passion for the world of computers, combined with
              various projects using different technologies such as{' '}
              <span className="text-textHighlight">
                .NET 8 Web API, Java, TypeScript
              </span>
              , have allowed me to develop a broad{' '}
              <span className="text-textHighlight">
                software development skill set
              </span>
              . Particularly, my contributions to open-source projects have
              established me as a recognized{' '}
              <span className="text-textHighlight">Front End Developer</span>{' '}
              and{' '}
              <span className="text-textHighlight">Full Stack Developer</span>.
            </p>
            <p>
              Taking on the role of lead developer in projects like{' '}
              <span className="text-textHighlight">Twitch-Stats</span> and{' '}
              <span className="text-textHighlight">BuzzSpire</span> has provided
              me the opportunity to enhance both my technical and leadership
              skills. Additionally, creating the{' '}
              <span className="text-textHighlight">responserun-mock</span>{' '}
              TypeScript NPM package showcased my abilities in generating random
              data.
            </p>
            <p>
              As a successful student in my academic journey, I hold various
              certificates, reinforcing my expertise in areas such as{' '}
              <span className="text-textHighlight">
                HTML5 Web Development, Introduction to Programming with Go, and
                Web Programming with REACT
              </span>
              .
            </p>
            <p>
              Following technological advancements, traveling, exploring
              different cultures, swimming, watching films and series, personal
              development, and contributing to open-source projects are just a
              few of my interests.
            </p>
            <p>
              In the future, I aim to further advance my career in the software
              world and make contributions to technology.
            </p>
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
          <NewsCard
            date="2023/12/01"
            content="BuzzSpire Help desk application released as open source"
          />
          <NewsCard
            date="2023/11/28"
            content="npm package that makes it easy to create mock data responserun-mock"
          />
          <NewsCard
            date="2023/09/01"
            content="BuzzSpire brand was established"
          />
          <NewsCard date="2022/06/01" content="ProfileCard" />
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
