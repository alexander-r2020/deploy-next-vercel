import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Pricing() {
  return (
    <MainLayout>
      <h2>Esto es la pagina Pricing</h2>
        <h1 className={"title"}>
          ir a <Link href="/">Home</Link>
          {/* ir a <a href="/about">About</a> */}
        </h1>

        <p className={"description"}>
          Get started by editing{' '}
          <code className={"code"}>pages/Pricing.js</code>
        </p>

    </MainLayout>
  )
}