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
import { Container, Grid } from 'semantic-ui-react';
import ListLinks from '../components/list-links';

const redditLinks = {
  titleDest: 'https://reddit.com',
  title: 'Reddit',
  sites: [
    { dest: 'https://reddit.com/r/programmerhumor', key: 'Programmer Humor' },
    { dest: 'https://reddit.com/r/kappa', key: 'Kappa' },
    { dest: 'https://reddit.com/r/monsterhunter', key: 'MonsterHunter' },
    { dest: 'https://reddit.com/r/salty', key: 'Salty' },
  ],
};

const fourChLinks = {
  titleDest: 'https://4chan.org',
  title: '4chan',
  sites: [
    { dest: 'https://4chan.org/a/', key: '/a/ - Anime' },
    { dest: 'https://4chan.org/g/', key: '/g/ - Technology' },
    { dest: 'https://4chan.org/o/', key: '/o/ - Automotive' },
    { dest: 'https://4chan.org/v/', key: '/v/ - Videogames' },
  ],
};

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home Sweet Home(page)</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css" />
        <link rel="stylesheet" type="text/css" href="../static/main.css" />
      </Head>

      {/* First Row */}
      <Grid stackable columns={2}>
        {/* Site Links */}
        <Grid.Column width={8}>
          <Grid columns={2}>
            <Grid.Column>
              <ListLinks
                title={redditLinks.title}
                titleDest={redditLinks.titleDest}
                links={redditLinks.sites}
              />
            </Grid.Column>
            <Grid.Column>
              <ListLinks
                title={fourChLinks.title}
                titleDest={fourChLinks.titleDest}
                links={fourChLinks.sites}
              />
            </Grid.Column>
          </Grid>
        </Grid.Column>
        {/* Some kind of media widget, I don't know */}
        <Grid.Column width={8}>
          <div><p>TEST TEXT</p></div>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
