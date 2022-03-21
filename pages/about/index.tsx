import {MainLayout} from '../../components/layouts/MainLayout'
import {DarkLayout} from '../../components/layouts/DarkLayout'
import Link from 'next/link'

export default function About() {
  return (
    <>

      <h2>Esto es el about</h2>
        <h1 className={"title"}>
           ir a <Link href="/">Home</Link>
          {/* ir a <a href="/">Home</a> */}
        </h1>

        <p className={"description"}>
          Get started by editing{' '}
          <code className={"code"}>pages/about.js</code>
        </p>

    </>

     
  )
}

About.getLayout = function getLayout (page: JSX.Element){
  return(
    <MainLayout>
      <DarkLayout>
        {page}

      </DarkLayout>

    </MainLayout>
  )
}