import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "http://schema.org",
                "@type": "Person",
                "name": "Mert Sabinov",
                "jobTitle": "Front-end Developer",
                "email": "info@mertsabinov.com",
                "url": "https://www.mertsabinov.com/",
                "sameAs": [
                  "https://www.linkedin.com/in/mertsabinov",
                  "https://github.com/mertsabinov"
                ],
                "knowsAbout": "Problem-solving, Computer Games, Music, Travel, Food",
                "worksFor": {
                  "@type": "Organization",
                  "name": "ProfileCard",
                  "url": "https://www.profilecard.co/",
                  "knowsAbout": "React, Next.js, TypeScript"
                }
              }
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
