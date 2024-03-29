import Head from 'next/head'
import Image from 'next/image' 
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'
 

export default function Home() {
 
  return (
    <>
      <Head>
        <title>---</title>
        <meta name="description" content="---" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}> 
       <Link href="/welcome">Login</Link> 
      </main>
    </>
  )
}
