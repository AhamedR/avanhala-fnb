import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Items from '@/components/Items'

const inter = Inter({ subsets: ['latin'] })
const GOOGLE_MAP_LINK = 'https://www.google.com/maps/dir//avahala+fnb/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3ae371debf3702e1:0xcbc9679f7eca048e?sa=X&ved=2ahUKEwjcrIijy979AhU7g1YBHWzIBkgQ9Rd6BAg_EAU'
export default function Menu() {
  return (
    <>
      <Head>
        <title>Avanhala FnB Menu</title>
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
            <h2 className={inter.className}>Today&apos;s menu</h2>
          </div>
        </div>
        <Items/>
        <p className={[styles.placeOder, inter.className].join(' ')}>
          You can place your order by calling
        </p>
        <ul className={styles.contact}>
          <li><a href='tel:0772422235'>077 24222 35</a></li>
          <li><a href='tel:0758125407'>075 812 5407</a></li>
          <li><a href='tel:0763537277'>076 353 7277</a></li>
        </ul>
        <a className={styles.quickAccess} href='tel:0772422235'><span className={styles.call}>CALL</span><span className={styles.order}>ORDER NOW</span></a>
      </main>
    </>
  )
}
