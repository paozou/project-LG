import { ReactNode, VFC } from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface Props {
  children: ReactNode
  title: string
}
export const Layout: VFC<Props> = ({
  children,
  title = 'Welcome to Nextjs',
}) => {
  return (
    <div className="flex flex-col justify-center min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="test-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </a>
              </Link>
              <Link href="/mypage">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  マイページ
                </a>
              </Link>
              <Link href="/match">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  マッチング
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 flex-col justify-center items-center w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <Link href="/">
          <a className="flex items-center">Launch Games</a>
        </Link>
      </footer>
    </div>
  )
}
