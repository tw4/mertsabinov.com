'use client';

import React, { useEffect } from 'react';

const TwitterTimeline: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <a
        className="twitter-timeline"
        data-theme="dark"
        href="https://twitter.com/mertsabinov?ref_src=twsrc%5Etfw"
      >
        Tweets by mertsabinov
      </a>
    </div>
  );
};

export default TwitterTimeline;
