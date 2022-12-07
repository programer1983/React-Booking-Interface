import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./header.css"
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns' // theme css file

const Header = () => {
  const [openDate, setOpenDate] = React.useState(false)
  const [openOptions, setOpenOptions] = React.useState(false)
  const [options, setOptions] = React.useState({
    abult: 1,
    children: 0,
    room: 1,
  })
  const [date, setDate] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1

      }
    })
  }
  
  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Statys</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Statys</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Statys</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Statys</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Statys</span>
          </div>
        </div>
        <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
        <p className='headerDisc'>
          Get rewarded for your travels – unlock instant savings of 10% or
          more with a free Lamabooking account
        </p>
        <button className='headerBtn'>Sign in / Register</button>
        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon'/>
            <input 
              type="text" 
              placeholder="Where are you going?"
              className='headerSearchInput'
            />
          </div>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
            <span 
               onClick={() => setOpenDate(!openDate)}
               className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
            </span>
              {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />}
          </div>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className='headerSearchText'>{`${options.abult} abult •  ${options.children} children  • ${options.room} room `}</span>
            {openOptions && <div className='options'>
              <div className='optionItem'>
                <span className='optionText'>Adult</span>
                <div className='optionCounter'>
                  <button
                    disabled={options.abult <= 1}
                    className='optionCounterButton' 
                    onClick={() => handleOption("abult", "d")}>
                      -
                  </button>
                  <span className='optionCounterNumber'>{options.abult}</span>
                  <button className='optionCounterButton' onClick={() => handleOption("abult", "i")}>+</button>
                </div>
              </div>
              <div className='optionItem'>
                <span className='optionText'>Children</span>
                <div className='optionCounter'>
                  <button 
                    disabled={options.children <= 1} 
                    className='optionCounterButton' 
                    onClick={() => handleOption("children", "d")}>
                      -
                  </button>
                  <span className='optionCounterNumber'>{options.children}</span>
                  <button className='optionCounterButton' onClick={() => handleOption("children", "i")}>+</button>
                </div>
              </div>
              <div className='optionItem'>
                <span className='optionText'>Room</span>
                <div className='optionCounter'>
                  <button 
                     disabled={options.room <= 1} 
                     className='optionCounterButton' 
                     onClick={() => handleOption("room", "d")}>
                      -
                  </button>
                  <span className='optionCounterNumber'>{options.room}</span>
                  <button className='optionCounterButton' onClick={() => handleOption("room", "i")}>+</button>
                </div>
              </div>
            </div>
            }
          </div>
          <div className='headerSearchItem'>
            <button className='headerBtn'>Search</button> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header 