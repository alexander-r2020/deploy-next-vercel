import { MainLayout } from "../../components/layouts/MainLayout";
import Link from 'next/link'

export default function Contact() {
  return (
    <MainLayout>
      <h2>Esto es el contacto</h2>
        <h1 className={"title"}>
           ir a <Link href="/home">Home</Link>
          
        </h1>

        <p className={"description"}>
          Get started by editing{' '}
          <code className={"code"}>pages/contact.js</code>
        </p>

    </MainLayout>
  )
}