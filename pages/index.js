// Tutorial on how to use nextjs
// https://flaviocopes.com/nextjs/

import Link from 'next/link'
import Head from 'next/head'

const HeaderDrop = (props) => (
    <ul>
        <a href={props.titleDest}>{props.title}</a>
    </ul>
)

export default () => (
<div>
    <Head>
        <title>Home Sweet Home(page)</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>H E L L O  W O R L D</h1>
    <Link href="https://duckduckgo.com"><a>Test link component</a></Link>
    <HeaderDrop titleDest="https://google.ca" title="Display String for UL"/>
</div>
)