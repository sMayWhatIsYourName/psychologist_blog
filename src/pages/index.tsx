import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

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
      </main>
    </>
  )
}
