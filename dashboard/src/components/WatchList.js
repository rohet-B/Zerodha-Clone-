import React from "react";

// Material UI is now required to make this component, Install this:
// npm install @mui/material @emotion/react @emotion/styled

// Tooltip -> shows text when you hover
// Grow -> animation effect
import {Tooltip, Grow} from '@mui/material';
// KeyboardArrowDown / Up -> arrow icons
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from '@mui/icons-material'

import { useState } from "react";

import { watchlist } from "../data/data";

import { useContext } from "react";
import GeneralContext from "./GeneralContext";


const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return(
          <WatchListItem stock={stock} key={index}/>)
          })}
          {/* What happens here:
              Loops through watchlist
              Sends one stock object to WatchListItem
              Creates one list item per stock */}
      </ul>
    </div>
  );
};

export default WatchList;

// This component handles ONE stock row.
const  WatchListItem = ({stock}) =>{
  
  const [showWatchlistActions,setShowWatchListAction] = useState(false);
  // It decides whether to show or hide buttons/options for a stock.

  const handleMouseEnter = (e) =>{
    setShowWatchListAction(true);
    // It shows the buttons/options when the mouse enters the stock item.
  }
  const handleMouseExit = (e) =>{
    setShowWatchListAction(false);
    // It hides the buttons/options when the mouse leaves the stock item.
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down"/>
          ):(<KeyboardArrowUp className="down"/>)}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} show={showWatchlistActions}/>}
    </li>
  )
}

const WatchListActions = ({ uid, show }) => {
  const { openActionWindow } = useContext(GeneralContext);

  return (
    <Grow in={show}>
      <span className="actions">
        <span>
          <Tooltip title="Buy (B)" placement="top" arrow>
            <button
              className="buy"
              onClick={() => openActionWindow(uid, "BUY")}
            >
              Buy
            </button>
          </Tooltip>

          <Tooltip title="Sell (S)" placement="top" arrow>
            <button
              className="sell"
              onClick={() => openActionWindow(uid, "SELL")}
            >
              Sell
            </button>
          </Tooltip>

          <Tooltip title="Analytics (As)" placement="top" arrow>
            <button className="action">
              <BarChartOutlined className="icon" />
            </button>
          </Tooltip>

          <Tooltip title="More" placement="top" arrow>
            <button className="action">
              <MoreHoriz className="icon" />
            </button>
          </Tooltip>
        </span>
      </span>
    </Grow>
  );
};