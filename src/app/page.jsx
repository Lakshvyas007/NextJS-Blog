import Image from 'next/image'
import styles from './page.module.css'
import Hero from '/public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design For Your Digital Products.</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil dolor.</p>
        <Button url="/portfolio" text="Click to See" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='good' className={styles.img} />
      </div>
    </div>
  )
}
