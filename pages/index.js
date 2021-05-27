import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div id="container" style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <div id="button-wrapper" style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center', width: 500, height: 500 }}>
        <Link href="/states" ><button>Estados</button></Link>
        <Link href="/cities" ><button>Cidades</button></Link>

      </div>
    </div>
  )
}
