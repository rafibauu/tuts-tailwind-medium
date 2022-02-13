import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Trending = (props) => {
    const trendingIndex = `0${props.index + 1}`
    const minReadText = `${props.min_read} min read`
    return (
      <div key={props.id} className="flex gap-x-4">
        <p className="text-4xl font-extrabold text-slate-300">{trendingIndex}</p>
        <div>
          <div className="flex items-center gap-x-2 mb-4">
            <Image 
              unoptimized
              src={props.avatar}
              width="20px"
              height="20px"
              alt={props.username}
              layout="fixed"
            />
            <h4 className="text-sm">
              <span>
                <Link href="#" passHref>
                  <a>{props.username}</a>
                </Link>
              </span>
              {props.group_name && (
                <>
                  <span className="mx-1 text-slate-400">in</span>
                  <span>
                    <Link href="#" passHref>
                      <a>{props.group_name}</a>
                    </Link>
                  </span>
                </>
              )}
            </h4>
          </div>
          <h3 className="font-bold mb-2 line-clamp-2">{props.title}</h3>
          <div className="flex items-center gap-x-1">
            <p className="text-slate-500 text-sm">{props.date}</p>
            <span className="text-slate-500 text-sm -mt-2">.</span>
            <p className="text-slate-500 text-sm">{minReadText}</p>
            {props.star && (
              <Image 
                unoptimized
                src="/icons/star.svg"
                width="15px"
                height="15px"
                alt="Star icon"
                layout="fixed"
              />
            )}
          </div>
        </div>
      </div>
    )
}

export default Trending