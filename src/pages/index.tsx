import Head from 'next/head';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Миля Тагировна</title>
        <meta name="description" content="Сайт психолога-эзотерика Миляуши Тагировны" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>Миля Тагировна</p>
        <h1>Миля Тагировна</h1>
        <p className='medium'>Миля Тагировна</p>
        <Link href={`/blog/`}>Blog</Link>
      </main>
    </>
  )
}
