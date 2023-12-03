import React from 'react'
import PageBanner from '../components/PageBanner';
import BirthdaypartyGallery from '/images/BirthdaypartyGallery.jpg'
import useLoadGallery from '../Hooks/LoadGallery';
import GallerySection from '../components/Home/GallerySection'
import Pagetitle from '../Hooks/Pagetitle';
export default function Gallery() {
    const {Gallerys} = useLoadGallery()
  return (
    <> <Pagetitle>Gallery - Birthday Planner</Pagetitle>
     <PageBanner Banner={BirthdaypartyGallery}>
     <div className="grid gap-4" >
          <h2 className="text-4xl">Our Gallery</h2>
          <p className="text-xl leading-8">
          Some memrobale Momments capture in frame with our client and his familly member  </p>
        </div>
     </PageBanner>
     <br />
     <br />
     <br />
      {Gallerys.length > 0 && <GallerySection elements={Gallerys}/>}
    </>
  )
}
