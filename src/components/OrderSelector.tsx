import React from 'react';

function OrderSelector() {
  return (<div className='order_selector'>
    <select name="order" id="order">
      <option value="new">최신순</option>
      <option value="like">공감순</option>
    </select>
  </div>);

}

export default OrderSelector;
