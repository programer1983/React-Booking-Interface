import React from 'react'
import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className='fpItem'>
            <img 
              src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" 
              alt=""
              className="fpImg"
            />
          <span className='fpName'>Aparthotel Stare Miasto</span>
          <span className='fpCity'>Madrid</span>
          <span className='fpPrice'>Starting from $120</span>
          <div className="fpRating">
            <button>8. 9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className='fpItem'>
            <img 
              src="https://cf.bstatic.com/xdata/images/hotel/max300/309838583.webp?k=53c898313bd050350d39176f3573c2944d952cb74433575fbd55b927a3a781ab&o=" 
              alt=""
              className="fpImg"
            />
          <span className='fpName'>Comfort Suites Airport</span>
          <span className='fpCity'>Austin</span>
          <span className='fpPrice'>Starting from $140</span>
          <div className="fpRating">
            <button>8. 9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className='fpItem'>
            <img 
              src="https://cf.bstatic.com/xdata/images/hotel/max300/233068046.webp?k=34ed1e299a89f4f8eb08d8bc51e7195bfaaccc214bf2b20343a5b6e713431a30&o=" 
              alt=""
              className="fpImg"
            />
          <span className='fpName'>Four Seasons Hotel</span>
          <span className='fpCity'>Lisbon</span>
          <span className='fpPrice'>Starting from $99</span>
          <div className="fpRating">
            <button>8. 9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className='fpItem'>
            <img 
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1" 
              alt=""
              className="fpImg"
            />
          <span className='fpName'>Hilton Garden Inn</span>
          <span className='fpCity'>Berlin</span>
          <span className='fpPrice'>Starting from $105</span>
          <div className="fpRating">
            <button>8. 9</button>
            <span>Excellent</span>
          </div>
        </div>
    </div>
  )
}

export default FeaturedProperties