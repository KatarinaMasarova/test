import React from 'react';
 
class Product extends React.Component {
  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1>Product</h1>
        <p>{params.id}</p>
      </div>
    )
  }
}
 
export default Product;