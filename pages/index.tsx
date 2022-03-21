import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <h2>Esto es el Home</h2>
        <h1 className={"title"}>
          ir a <Link href="/about">About</Link>
          {/* ir a <a href="/about">About</a> */}
        </h1>

        <p className={"description"}>
          Get started by editing{' '}
          <code className={"code"}>pages/index.js</code>
        </p>

    </MainLayout>
  )
}
