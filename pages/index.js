import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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
                  <button className="button">
                    Get Started
                  </button>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>

    </>
  )
}
