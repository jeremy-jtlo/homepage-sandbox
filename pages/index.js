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

import Link from 'next/link'
import Head from 'next/head'

var mylinks = {
    "titleDest": "http://google.ca",
    "title": "This is my list",
    "sites": [
        {"dest": "http://reddit.com", "key": "reddit"},
        {"dest": "http://reddit.com/r/kappa", "key": "Kappa"},
        {"dest": "http://reddit.com/r/monsterhunter", "key": "MonsterHunter"},
        {"dest": "http://reddit.com/r/salty", "key": "Salty"},
    ]
};

const HeaderDrop = (props) => {
    var linkObjects = [];

    props.links.sites.forEach(element => {
        linkObjects.push(<Link href={element.dest}><a>{element.key}</a></Link>);
    });

    return(
    <ul>
        <a href={props.titleDest}>{props.title}</a>
        {linkObjects}
    </ul>
    );
}

export default () => (
<div>
    <Head>
        <title>Home Sweet Home(page)</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>H E L L O  W O R L D</h1>
    <Link href="https://duckduckgo.com"><a>Test link component</a></Link>
    <HeaderDrop titleDest="https://google.ca" title="Display String for UL" links={mylinks}/>
</div>
)