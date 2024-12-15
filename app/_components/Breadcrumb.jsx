import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Breadcrumb({path}) {
  return (
<nav aria-label="Breadcrumb" className="flex">
  <ol className="flex overflow-hidden rounded-lg  bg-purple-300 text-white">
    <li className="flex items-center">
      <a
        href="/"
        className="flex h-10 items-center gap-1 sm:gap-1.5 bg-purple-800 px-2 sm:px-4 transition hover:text-purple-100"
      >
        <FontAwesomeIcon icon={faHome} />

        <span className="ms-1 sm:ms-1.5 text-xs font-medium"> Home </span>
      </a>
    </li>

    <li className="relative flex items-center">
      <span
        className="absolute inset-y-0 -start-px h-10 w-4 bg-purple-800 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
      >
      </span>

      <p
        className="flex h-10 items-center bg-button1 text-white pe-4 ps-6 sm:ps-8 text-xs font-medium transition hover:text-purple-200"
      >
        {path?.split('/')[1]}
      </p>
    </li>
  </ol>
</nav>
  )
}

export default Breadcrumb
