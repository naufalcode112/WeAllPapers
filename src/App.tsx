import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './tail.css'
import BottomTabs from './components/BottomTabs.tsx'
import WelcomeText from './components/welcomeText.tsx'
import WalpaperList from './pages/WalpaperList.tsx'
import DownloadWalpaper from './pages/DownloadWalpaper.tsx'
import AddToCart from './pages/AddToCart.tsx'
import UploadWP from './pages/upload.tsx' 
function App() {
  return (
    <>
      <div className="m-5">
        <FunText /> 
        <ListItem />
      </div>
    </>
  )
}

export default App

function ListItem() {
  const walpapers = [
    {
      image: '/public/FB_IMG_17376991689086056.jpg',
      title: 'Walpaper 1',
      edition: 'Pro Versions',
      author: 'WAP',
      rating: 4.3,
      price: 12500
    },
    {
      image: '/public/FB_IMG_17376991689086056',
      title: 'Walpaper 2',
      edition: 'Free',
      author: 'WAP',
      rating: 3.0,
      price: 0
    }
  ]
  const handlePro = () => {
    console.log("Clicked...")
  }
  return (
  <>
    <div className="bg-white">
      <div className="mx-w-sm p-2 max-w-2xl px-4 py-16 sm:px-6 sm:py-24 shadow-md">
        <h2 className="text-2xl font-bold tracking-tight
        text-gray-900">WeAllPapers</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-center">
          {walpapers.map((walpaper,index) => (
            <div key={walpaper.index} className="group relative">
              <WalpaperList image={walpaper.image} title={walpaper.title} author={walpaper.author} rate={walpaper.rating} />
              <div className="mt-4 flex justify-between">
                {walpaper.price === 0 ? (
                  <DownloadWalpaper image={walpaper.image} title={walpaper.title} />
                ) : (
                  <button onClick={handlePro} className="bg-red-500 hover:bg-red-800  rounded-sm text-white"><i
                  className="fa fa-shop"></i></button>
                )}
                <div>
                  <h3 className="text-sm text-gray-700">
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Rp{walpaper.price}</p>
                </div>
                <p className="text-sm font-medium
                text-gray-900" style={{color: walpaper.price > 0 ? 'crimson' : 'dodgerblue'}} >{walpaper.edition}</p>
              </div>
              <div className="justify-between gap-5">
                  <AddToCart image={walpaper.image} title={walpaper.title} />
                  <button className="bg-black-100 rounded-sm p-2 mr-5 text-black">
                    <i className="fa fa-arrow-up"></i>
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </>
  )
}

function FunText() {
  return (
   <>
      <div dir="ltr" className="border-5 border-green-100"></div>
      <div className="bg-green-300 border-2 border-green-500 rounded-md p-5 mb-2">
        <h2 className="text-white text-lg">hello</h2>
      </div>
   </>
  )
}
function Navigation() {
  return (
   <>
      <div>
        <div className="border-1 border-indigo-200">
          <nav className="nav p-3"></nav>
        </div>
      </div>
    </>
  )
}
