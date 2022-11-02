import Link from 'next/link'

export default function Home() {
  return (
      <>
        <div>
          <h1 className={'text-6xl text-indigo-700'}>siema</h1>
            <Link href={'/contact'}>to contact, go</Link>
        </div>
      </>
  )
}
