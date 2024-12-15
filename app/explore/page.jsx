import Link from 'next/link'
import React from 'react'
import Ads from '../_adsense/Ads'

function Explore() {
    const cards = [
        { id: 1, title: 'Python Projects', link:"/category/python", image: '/assets/explore/python.jpeg' },
        { id: 2, title: 'DBMS Projects', link:"/category/dbms", image: '/assets/explore/dbms.jpeg' },
        { id: 3, title: 'React JS Projects', link:"/category/react", image: '/assets/explore/react.jpeg' },
        { id: 4, title: 'Resume Templates', link:"/category/resume", image: '/assets/explore/resume.jpeg' },
        { id: 5, title: 'Notes and Cheatsheets', link:"/category/notes", image: '/assets/explore/notes.jpeg' },
        { id: 6, title: 'Wallpapers', link:"/category/wallpaper", image: '/assets/explore/wallpaper.jpeg' },
      ]
  
    return (
      <section className='min-h-screen p-8'>
        <h2 className='text-xl font-semibold text-center mb-12'>Category</h2>
        <Ads
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
        dataAdSlot="5740744081"
      />
        <div className='grid mt-10 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-11'>
          {cards.map(card => (
            <Link href={card.link}>
            <div
              key={card.id}
              className='relative h-64 border border-white shadow-indigo-500 shadow-md hover:shadow-2xl hover:shadow-indigo-500 rounded-lg overflow-hidden '
              style={{ backgroundImage: `url(${card.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                <h3 className='text-white text-2xl font-bold'>{card.title}</h3>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </section>
    )
  }
  
  export default Explore