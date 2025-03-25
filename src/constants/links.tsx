/**
 * Site entry for one of the link objects.
 *
 * @key dest: URL destination to visit
 * @Key key: String to be displayed
 */
export type siteLink = {
  dest: string;
  key: string;
};

/**
 * Object containing header text and a list of links
 *
 * @key titleDest: URL contained in title
 * @key title: title to be rendered
 * @key sites: list of sites in this batch
 */
export type linkBatch = {
  titleDest: string;
  title: string;
  sites: siteLink[];
};

/**
 * Formatting for an app to be displayed in the grid
 *
 * @key icon: semantic-ui icon to render
 * @key name: string to display in view
 * @key dest: destination URL
 */
export type appEntry = {
  icon: string;
  name: string;
  dest: string;
};

export type appList = appEntry[];

export const newsLinks: linkBatch = {
  titleDest: "https://news.google.com",
  title: "News",
  sites: [
    { dest: "https://bc.ctvnews.ca/", key: "CTV News BC" },
    {
      dest: "https://www.cbc.ca/news/canada/british-columbia",
      key: "CBC News BC",
    },
    { dest: "https://globalnews.ca/bc/", key: "Global News BC" },
    { dest: "https://www.npr.org/", key: "NPR" },
    { dest: "https://www.reuters.com/", key: "Reuters" },
    { dest: "https://arstechnica.com/", key: "Ars Technica" },
    { dest: "https://www.techdirt.com/", key: "techdirt" },
  ],
};

export const redditLinks: linkBatch = {
  titleDest: "https://reddit.com",
  title: "Reddit",
  sites: [
    { dest: "https://reddit.com/r/gunpla", key: "Gunpla" },
    { dest: "https://reddit.com/r/vancouver", key: "Vancouver" },
    { dest: "https://reddit.com/r/programmerhumor", key: "Programmer Humor" },
    {
      dest: "https://reddit.com/r/bapcsalescanada",
      key: "Build a PC Sales - Canada",
    },
    { dest: "https://reddit.com/r/monsterhunter", key: "MonsterHunter" },
    { dest: "https://reddit.com/r/EhBuddyHoser", key: "EhBuddyHoser" },
    { dest: "https://reddit.com/r/warframe", key: "Warframe" },
  ],
};

/**
 * 2D array. Probably not the best formatting for this.
 */
export const apps: appList[] = [
  [
    { icon: "youtube", name: "youtube", dest: "https://www.youtube.com/" },
    { icon: "twitch", name: "twitch", dest: "https://twitch.tv" },
    { icon: "twitter", name: "bluesky", dest: "https://bsky.app" },
  ],
  [
    { icon: "whatsapp", name: "whatsapp", dest: "https://web.whatsapp.com" },
    { icon: "discord", name: "discord", dest: "https://discordapp.com" },
    { icon: "telegram", name: "telegram", dest: "https://web.telegram.org" },
  ],
  [
    { icon: "mail", name: "gmail", dest: "https://gmail.com" },
    { icon: "paw", name: "mhwilds", dest: "https://mhwilds.kiranico.com/" },
    {
      icon: "wikipedia w",
      name: "wikipedia",
      dest: "https://en.wikipedia.org/wiki/Main_Page",
    },
  ],
];
