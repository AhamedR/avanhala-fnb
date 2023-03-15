import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
const GOOGLE_MAP_LINK = 'https://www.google.com/maps/dir//avahala+fnb/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3ae371debf3702e1:0xcbc9679f7eca048e?sa=X&ved=2ahUKEwjcrIijy979AhU7g1YBHWzIBkgQ9Rd6BAg_EAU'

export default function Home() {
  return (
    <>
      <Head>
        <title>Avanhala FnB</title>
      </Head>
      <main className={styles.main}>  
        <div className={styles.header}>
          <Image
            src="/logo.png"
            alt="Avanhala logo"
            width={255}
            height={105}
            className={styles.logo}
          />
          <p className={inter.className}>Dine In | Takeaway | Delivery</p>
          <small><a href={GOOGLE_MAP_LINK} className={inter.className} target='_blank'>No 21 Kaduganawa Road, Gampola</a></small>
        </div>
        <div className={styles.center}>
          <div className={styles.thirteen}>
            <h2 className={inter.className}>Welcome to Avanhala FnB</h2>
          </div>
        </div>

        <Link className={styles.viewMenu} href="/menu">View Today&apos;s Menu</Link>
      </main>
    </>
  )
}
