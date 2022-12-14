import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Social Stars!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Social Stars
        </h1>
        <p className={styles.description}>
          The friendship website for people with disabilities.
        </p>
        <div className={styles.grid}>
          <a href="/SignUp" className={styles.card}>
            <h2>Sign Up &rarr;</h2>     
          </a>
          <a href="/Login" className={styles.card}>
            <h2>Log In &rarr;</h2>
          </a>
          <a href="/HomePage"className={styles.card}>
            <h2>Home Page &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  )
}
