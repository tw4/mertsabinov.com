import { NewsCard } from '@/app/components/NewsCard';

export default function Home() {
  return (
    <main>
      <div className="flex flex-row items-center justify-between md:flex-col-reverse">
        <div>
          <h1 className="text-3xl">Mert Sabinov</h1>
          <div className="space-y-5 mt-5">
            <p>
              Merhaba, ben{' '}
              <span className="text-textHighlight">Mert Sabinov</span>!{' '}
              <span className="text-textHighlight">1999</span> yılında doğmuş,
              yazılım geliştirme alanında kariyerine odaklanan bir{' '}
              <span className="text-textHighlight">
                bilgisayar bilimleri öğrencisiyim
              </span>
              .{' '}
              <span className="text-textHighlight">
                İstanbul Üniversitesinde Yönetim Bilişim Sistemleri bölümünde
              </span>{' '}
              öğrenim görmekteyim. Aynı zamanda{' '}
              <span className="text-textHighlight">
                Trakya Üniversitesinde İktisadi ve İdari Bilimler bölümünde
              </span>{' '}
              eğitim almaktayım.
            </p>
            <p>
              Bilgisayar dünyasına olan ilgim ve tutkum,{' '}
              <span className="text-textHighlight">
                .NET 8 Web API, Java, TypeScript
              </span>{' '}
              gibi farklı teknolojilerle gerçekleştirdiğim çeşitli projelerle
              birleşerek, geniş bir{' '}
              <span className="text-textHighlight">
                yazılım geliştirme yetenek setine
              </span>{' '}
              sahip olmama olanak tanıdı. Özellikle, açık kaynak projelerdeki
              katkılarımla bilinen bir{' '}
              <span className="text-textHighlight">Front End Developer</span> ve{' '}
              <span className="text-textHighlight">Full Stack Developer</span>{' '}
              olarak kendimi geliştirdim.
            </p>
            <p>
              <span className="text-textHighlight">Twitch-Stats</span> ve{' '}
              <span className="text-textHighlight">BuzzSpire</span> gibi
              projelerde lider geliştirici olarak rol almak, benim hem teknik
              hem de liderlik becerilerimi geliştirmeme olanak sağladı. Ayrıca,{' '}
              <span className="text-textHighlight">responserun-mock</span> adlı{' '}
              <span className="text-textHighlight">TypeScript NPM</span>{' '}
              paketini oluşturarak, rastgele veri oluşturma konusundaki
              yeteneklerimi ortaya koydum.
            </p>
            <p>
              Eğitim hayatımda başarılı bir öğrenci olarak çeşitli sertifikalara
              sahibim ve bu sertifikalar,{' '}
              <span className="text-textHighlight">
                HTML5 ile Web Geliştirme, Go İle Programlamaya Giriş, REACT İle
                Web Programcılığı
              </span>{' '}
              gibi alanlarda uzmanlığımı pekiştirmeme yardımcı oldu.
            </p>
            <p>
              Teknoloji dünyasındaki gelişmeleri takip etmek, seyahat etmek ve
              farklı kültürleri keşfetmek, yüzmek, film ve dizi izlemek, kişisel
              gelişim ve açık kaynaklı projelere katkıda bulunmak benim ilgi
              alanlarımdan sadece birkaçı.
            </p>
            <p>
              Gelecekte, yazılım dünyasındaki kariyerimi daha da ileriye
              taşımayı ve teknolojiye katkıda bulunmayı hedefliyorum.
            </p>
          </div>
        </div>
        <div>
          <img
            className="rounded-full border-2 border-b-textHeighlight border-t-textHeighlight md:h-40"
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
            content="npm package that makes it easy to create mock data
responserun-mock"
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
