// import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Stay Updated!</h1>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a sucess</li>
        <li>And much more!</li>
      </ul>

      <form action="">
        <label htmlFor="email">Email address</label>
        <input type="email" name="email" id="email" placeholder="email@company.com" />
        <input type="submit" value="Subscribe to monthly newsletter" />
      </form>
    </main>
  )
}
