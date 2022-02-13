import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Latest = (props) => {
  const minReadText = `${props.min_read} min read`
  return (
    <div className="flex gap-x-6 mb-16">
      <div className="w-full">
        <div className="flex items-center gap-x-2 mb-2">
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
        <h3 className="text-2xl font-bold mb-2 line-clamp-2">
          {props.title}
        </h3>
        <p className="text-slate-500 line-clamp-2 mb-2">
          {props.description}
        </p>
        <div className="flex items-center gap-x-1">
          <p className="text-slate-500 text-sm">{props.date}</p>
          <span className="text-slate-500 text-sm -mt-2">.</span>
          <p className="text-slate-500 text-sm">{minReadText}</p>
          <span className="text-slate-500 text-sm -mt-2">.</span>
          <div className="px-3 py-1 text-sm text-slate-500 bg-slate-200 hover:bg-slate-300 transition-colors rounded-full">
            <Link href="#" passHref>
              <a>{props.tag}</a>
            </Link>
          </div>
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
          <div className="ml-auto cursor-pointer">
            <Image 
              unoptimized
              src="/icons/bookmark.svg"
              width="28px"
              height="28px"
              alt="Bookmark icon"
              layout="fixed"
            />
          </div>
          <div className="cursor-pointer">
            <Image 
              unoptimized
              src="/icons/dots.svg"
              width="28px"
              height="28px"
              alt="Choices icon"
              layout="fixed"
            />
          </div>
        </div>
      </div>
      <div>
        <Image
          src={props.thumbnail}
          width="200px"
          height="135px"
          alt={props.title}
          layout="fixed"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Latest