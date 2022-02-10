/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import TrendingPosts from '../data/trending.json'

export default function Home() {
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

      <section className="border border-slate-200">
        <div className="main-container py-10">
          <div className="w-full">

            <div className="flex items-center gap-x-2 mb-4">
              <Image 
                src="/icons/trending.svg"
                width="28px"
                height="28px"
                alt="Trending icon"
                layout="fixed"
              />
              <h2 className="uppercase font-bold text-sm tracking-wider">
                TRENDING ON MEDIUM
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TrendingPosts.map((post, index) => {
                const trendingIndex = `0${index + 1}`
                return (
                  <div key={post.id} className="flex gap-x-4">
                    <span className="text-slate-300 text-4xl font-extrabold">
                      {trendingIndex}
                    </span>
                    <div>
                      <div className="flex items-center gap-x-2 mb-2">
                        <Image 
                          src={post.avatar}
                          width="20px"
                          height="20px"
                          alt={post.username}
                          layout="fixed"
                        />
                        <h2 className="text-sm tracking-tight">
                          <span>
                            <Link href="#" passHref>
                              <a>{post.username}</a>
                            </Link>
                          </span>
                          {post.group_name && (
                            <>
                              <span className="mx-1 text-slate-400">in</span>
                              <span>
                                <Link href="#" passHref>
                                  <a>{post.group_name}</a>
                                </Link>
                              </span>
                            </>
                          )}
                        </h2>
                      </div>
                      <h3 className="font-bold mb-2 line-clamp-2">{post.title}</h3>
                      <div className="flex items-center gap-x-1">
                        <p className="text-sm text-slate-500 flex items-center gap-x-1">
                          <span>{post.date}</span>
                          <span className="-mt-2 font-weight">.</span>
                          <span>{`${post.min_read} min read`}</span>
                        </p>
                        {post.star && (
                          <div>
                            <Image 
                              src="/icons/star.svg"
                              width="15px"
                              height="15px"
                              alt="Start icon"
                              layout="fixed"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

    </>
  )
}
