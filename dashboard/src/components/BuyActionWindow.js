import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeActionWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleBuyClick = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });
      console.log("Order response:", res.data);
      closeActionWindow();
    } catch (err) {
      console.error("Failed to place order:", err.response?.data || err.message);
      alert("Failed to place order. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min={1}
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick} disabled={loading}>
            {loading ? "Placing order..." : "Buy"}
          </button>
          <button className="btn btn-grey" onClick={closeActionWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
