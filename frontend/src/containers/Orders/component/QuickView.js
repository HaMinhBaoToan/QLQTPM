import React, { useEffect, useState } from "react";
import { findDOMNode } from "react-dom";

const QuickView =({productsQuickView,modal,showModal})=> {
  const [product, setProduct] = useState(productsQuickView);

console.log("aaaaa",modal);
console.log("bbbb",showModal);

  // handleClose() {
  //   this.props.closeModal();
  // }
 
    return (
      <div className={ modal  ? "modal-wrapper active" : "modal-wrapper"}
      >
        saddassa
        <div className="modal"  >
          <button
            type="button"
            className="close"
            onClick={showModal}
          >
            &times;
          </button>
          {/* <div className="quick-view">
            <div className="quick-view-image">
              <img
                src={this.props.product.image}
                alt={this.props.product.name}
              />
            </div>
            <div className="quick-view-details">
              <span className="product-name">{this.props.product.name}</span>
              <span className="product-price">{this.props.product.price}</span>
            </div>
          </div> */}
        </div>
      </div>
    );
}

export default QuickView;
