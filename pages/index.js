// Tutorial on how to use nextjs
// https://flaviocopes.com/nextjs/

/**
 * TODO: Find a css framework that I actually want to use
 * (Let's try to move away from bootstrap/foundation)
 *
 * remember to use yarn run dev, not npm
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
import { Container, Grid, Header } from 'semantic-ui-react';
import ListLinks from '../components/list-links';
import AppGrid from '../components/app-grid';
import SubHeader from '../components/subheader';

const redditLinks = {
  titleDest: 'https://reddit.com',
  title: 'Reddit',
  sites: [
    { dest: 'https://reddit.com/r/gunpla', key: 'Gunpla' },
    { dest: 'https://reddit.com/r/vancouver', key: 'Vancouver' },
    { dest: 'https://reddit.com/r/programmerhumor', key: 'Programmer Humor' },
    { dest: 'https://reddit.com/r/Genshin_Impact', key: 'Genshin Impact' },
    { dest: 'https://reddit.com/r/monsterhunter', key: 'MonsterHunter' },
    { dest: 'https://reddit.com/r/salty', key: 'Salty' },
    { dest: 'https://reddit.com/r/warframe', key: 'Warframe' },
  ],
};

const newsLinks = {
  titleDest: 'https://news.google.com',
  title: 'News',
  sites: [
    { dest: 'https://bc.ctvnews.ca/', key: 'CTV News BC' },
    { dest: 'https://www.cbc.ca/news/canada/british-columbia', key: 'CBC News BC' },
    { dest: 'https://globalnews.ca/bc/', key: 'Global News BC' },
    { dest: 'https://en.wikinews.org/wiki/Main_Page', key: 'Wiki News' },
    { dest: 'https://www.reuters.com/', key: 'Reuters' },
    { dest: 'https://arstechnica.com/', key: 'Ars Technica' },
    { dest: 'https://www.economist.com/', key: 'The Economist' },
  ],
};

const appList = [
  [
    { icon: 'youtube', name: 'youtube', dest: 'https://www.youtube.com/' },
    { icon: 'facebook messenger', name: 'messenger', dest: 'https://messenger.com' },
    { icon: 'twitter', name: 'twitter', dest: 'https://twitter.com' },
  ],
  [
    { icon: 'whatsapp', name: 'whatsapp', dest: 'https://web.whatsapp.com' },
    { icon: 'discord', name: 'discord', dest: 'https://discordapp.com' },
    { icon: 'telegram', name: 'telegram', dest: 'https://web.telegram.org' },
  ],
  [
    { icon: 'mail', name: 'gmail', dest: 'https://gmail.com' },
    { icon: 'paw', name: 'mhrise', dest: 'https://mhrise.kiranico.com/' },
    { icon: 'wikipedia w', name: 'gentoo', dest: 'https://wiki.installgentoo.com/index.php/Main_Page' },
  ],
];

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home Sweet Home(page)</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css" />
        <link rel="stylesheet" type="text/css" href="../static/main.css" />
      </Head>

      {/* Header, Info */}
      <Header as="h1">Home Sweet Home(page)</Header>
      <SubHeader time={new Date()} />

      {/* First Row */}
      <Grid stackable columns={2} stretched>
        {/* Site Links */}
        <Grid.Column width={8}>
          <Grid columns={2} stretched>
            <Grid.Column>
              <ListLinks
                title={redditLinks.title}
                titleDest={redditLinks.titleDest}
                links={redditLinks.sites}
              />
            </Grid.Column>
            <Grid.Column>
              <ListLinks
                title={newsLinks.title}
                titleDest={newsLinks.titleDest}
                links={newsLinks.sites}
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>
        {/* Some kind of media widget, I don't know */}
        <Grid.Column width={8}>
          <AppGrid apps={appList} />
        </Grid.Column>
        {/* TODO: a news feed, daily phrase, something else */}
      </Grid>
    </Container>
  );
}
