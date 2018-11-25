// Tutorial on how to use nextjs
// https://flaviocopes.com/nextjs/

/**
 * TODO: Find a css framework that I actually want to use
 * (Let's try to move away from bootstrap/foundation)
 * https://semantic-ui.com/
 * https://bulma.io/
 * http://yeticss.com/
 *
 * Inspo resources:
    >http://startpages.github.io/
    >https://www.ricing.chloechantelle.com/
    >http://nanami-tan.info/#HTMLPage
    >http://pastebin.com/ZJvDn0eN
 */

import React from 'react';
import Head from 'next/head';

const mylinks = {
  titleDest: 'http://google.ca',
  title: 'This is my list',
  sites: [
    { dest: 'http://reddit.com', key: 'reddit' },
    { dest: 'http://reddit.com/r/kappa', key: 'Kappa' },
    { dest: 'http://reddit.com/r/monsterhunter', key: 'MonsterHunter' },
    { dest: 'http://reddit.com/r/salty', key: 'Salty' },
  ],
};

export default function Home() {
  const testlink1 = 'https://duckduckgo.com';
  return (
    <div>
      <Head>
        <title>Home Sweet Home(page)</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>H E L L O  W O R L D</h1>
      <a href={testlink1}>Test link component</a>
    </div>
  );
}
