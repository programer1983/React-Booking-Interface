import React from 'react'
import "./hotel.css"
import Navbar from "./../../components/navbar/Navbar"
import Header from "./../../components/header/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faLocationDot, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import  MailList from "./../../components/mailList/MailList"
import Footer from "./../../components/footer/Footer"
import {photos} from "./../../DataImg"

const Hotel = () => {
  const [slideNumber, setSlideNumber] = React.useState(0)
  const [open, setOpen] = React.useState(false)


  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
  }
  
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='hotelContainer'>
        {open && 
          <div className='slider'>
            <FontAwesomeIcon 
               icon={faCircleXmark} 
               className="close"
               onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon 
               icon={faCircleArrowLeft} 
               className="arrow"
               onClick={() => handleMove("l")} 
            />
              <div className='sliderWrapper'>
                <img 
                  src={photos[slideNumber].src} 
                  alt=""
                  className='slideImg'
                />
              </div>
            <FontAwesomeIcon 
              icon={faCircleArrowRight} 
              className="arrow"
              onClick={() => handleMove("r")} 
            />
          </div>
        }
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAdress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <spsn>Elton St 125 New york</spsn>
          </div>
          <spam className='hotelDistance'>
            Excellent location – 500m from center
          </spam>
          <spam className='hotelPriceHighLight'>
            Book a stay over $114 at this property and get a free airport taxi
          </spam>
          <div className='hotelImages'>
            {photos.map((photo, i) => (
              <div className='hotelImgWrapper'>
                <img 
                  src={photo.src} 
                  alt=""
                  className='hotelImg'
                  onClick={() => handleOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1>Stay in the heart of City</h1>
              <p className='hotelDesc'>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for a 9-night stay!</h1>
              <span> 
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2><b>$945</b> (9 nights)</h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel