import React from 'react'
import Navbar from "./../../components/navbar/Navbar"
import Header from "./../../components/header/Header"
import "./list.css"
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'

const List = () => {
  const location = useLocation()
  const [open, setOpen] = React.useState(false)
  const [destination, setDestination] = React.useState(location.state.destination)
  const [date, setDate] = React.useState(location.state.date)
  const [options, setOptions] = React.useState(location.state.options)
  
  
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className='lsItem'>
              <label>Chack-in Date</label>
              <span
                onClick={() => setOpen(!open)}
              >
               {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {open && (
                <DateRange 
                  onChange={item => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date} 
                />
              )}
            </div>
            <div className='lsItem'>
              <label>Options</label>
              <div className='lsOptions'> 
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionsInput"/>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionsInput"/>
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Adult
                  </span>
                  <input 
                    type="number" 
                    className="lsOptionsInput" 
                    placeholder={options.abult}
                    min={1}
                  />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Children
                  </span>
                  <input 
                    type="number" 
                    className="lsOptionsInput" 
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Room
                  </span>
                  <input 
                    type="number" 
                    className="lsOptionsInput" 
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className='listResult'>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List 