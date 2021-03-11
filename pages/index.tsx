import Link from 'next/link'
import Layout from '../components/Layout'

import s from '../styles/app.module.sass'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p className={s.p} >
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
