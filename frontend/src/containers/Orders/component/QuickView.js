import React, { useEffect, useState } from "react";
import { findDOMNode } from "react-dom";

const QuickView =({productsQuickView,modal,showModal})=> {
  const [product, setProduct] = useState(productsQuickView);

// console.log("aaaaa",modal);
// console.log("bbbb",showModal);

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
         
        </div>
      </div>
    );
}

export default QuickView;
