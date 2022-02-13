/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import TrendingPosts from '../data/trending.json'
import TrendingItem from '../components/Items/Trending'
import LatestPosts from '../data/latest.json'
import LatestItem from '../components/Items/Latest'
import Tags from '../data/discover.json'
import Menus from '../data/menu.json'

export default function Home() {
  const [trendingPosts, setTrendingPosts] = useState(null)
  const [latestPosts, setLatestPosts] = useState(null)

  const GetTrendingPosts = () => {
    // Get data dari database trending posts
    setTrendingPosts(TrendingPosts)
  }

  const GetLatestsPosts = () => {
    // Get data dari database trending posts
    setLatestPosts(LatestPosts)
  }

  useEffect(() => {
    GetTrendingPosts()
    GetLatestsPosts()
  }, [])

  return (
    <>
      <Head>
        <title>Medium - Where good ideas find you.</title>
        <meta 
          name="description" 
          content="Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic." 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="nav">
        <div className="main-container gap-x-6 justify-between h-full w-full">

          <div>
            <Link href="/" passHref>
              <a>
                <Image 
                  src="/medium.svg"
                  alt="Medium Logo"
                  height="25px"
                  width="160px"
                />
              </a>
            </Link>
          </div>
          <div>
            <ul className="flex items-center gap-x-5">
              <li className="hidden md:list-item text-sm">
                <Link href="#" passHref>
                  <a>
                    Our story
                  </a>
                </Link>
              </li>
              <li className="hidden md:list-item text-sm">
                <Link href="#" passHref>
                  <a>
                    Membership
                  </a>
                </Link>
              </li>
              <li className="hidden md:list-item text-sm">
                <Link href="#" passHref>
                  <a>
                    Write
                  </a>
                </Link>
              </li>
              <li className="hidden sm:list-item text-sm">
                <Link href="#" passHref>
                  <a>
                    Sign In
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <button className="btn-rounded bg-black text-white">
                    Get Started
                  </button>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <header className="header">
        <div className="main-container header-bg p-10">
          <div className="w-3/4 md:w-3/6">
            <h1 className="hidden sm:inline-block font-serif text-6xl lg:text-7xl mb-2">
              Medium is a place to write, read, and connect
            </h1>
            <h1 className="sm:hidden font-serif text-5xl mb-2">Write, read, and connect</h1>
            <h2 className="sm:font-semibold text-lg">
              It's easy and free to post your thinking on any topic and connect with millions of readers.
            </h2>
            <button className="btn-rounded border border-black bg-white mt-6">
              Start Writing
            </button>
          </div>
        </div>
      </header>

      <section className="border-b border-slate-200">
        <div className="main-container py-10">

          <div className="w-full">
            <div className="flex items-center gap-x-1 mb-4">
              <Image 
                unoptimized
                src="/icons/trending.svg"
                width="28px"
                height="28px"
                alt="Trending icon"
                layout="fixed"
              />
              <h2 className="uppercase font-bold text-sm tracking-wider">TRENDING ON MEDIUM</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingPosts && trendingPosts.map((trending, index) => {
                return (
                  <TrendingItem key={trending.id} {...trending} index={index} />
                )
              })}
            </div>
          </div>

        </div>
      </section>

      <section>
        <div className="main-container py-10">
            
          <div className="w-full flex flex-col lg:flex-row gap-x-24">

            {/* Latests Posts */}
            <div className="w-full order-2 lg:order-1 lg:w-2/3">
              {latestPosts && latestPosts.map((latest) => {
                return <LatestItem key={latest.id} {...latest} />
              })}
            </div>

            {/* Tags */}
            <div className="w-full order-1 lg:order-2 lg:w-1/3 lg:self-start lg:sticky" style={{ top: '11%' }}>
              <h2 className="uppercase font-bold text-sm tracking-wider mb-4">
                DISCOVER MORE OF WHAT MATTERS TO YOU
              </h2>
              <div className="flex flex-wrap gap-2">
                {Tags.map((tag) => {
                  return (
                    <div key={tag} className="px-3 py-1 text-slate-400 border border-slate-200">
                      <Link href="#" passHref>
                        <a>{tag}</a>
                      </Link>
                    </div>
                  )
                })}
              </div>
              <div className="mt-8 mb-12 lg:mb-6 border-b border-slate-200"></div>
              <div className="hidden lg:flex flex-wrap gap-2">
                {Menus.map((menu) => {
                  return (
                    <div key={menu} className="px-2 text-slate-400">
                      <Link href="#" passHref>
                        <a>{menu}</a>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
