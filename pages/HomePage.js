import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function HomePage() 
{
return (
<div className={styles.container}>
<Head>
<title>Welcome to Social Stars!</title>
<meta name="description" content="Generated by create next app" />
<link rel="icon" href="/favicon.ico" />
</Head>
<main className={styles.main}>
<h1 className={styles.title}>
Welcome to Social Stars Home Page!
</h1>
<ul>
 <li>Please insert nav bar at top. </li>
 <li>Nav bar: left to right:  add person, search for people, inbox</li>
 <li>Please insert feed page here.</li>
 <li>Please insert status post here.</li>
 <li>Please insert comment post here.</li>
</ul>
<Link legacyBehavior href="/"> 
        <a className="btn btn-success">Home</a>
        </Link>
</main>
</div>
)
}