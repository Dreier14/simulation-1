import React, { Component } from "react";
// import mainUrl from "./img.js";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      // imgUrl: mainUrl,
      name: "",
      price: ""
    };
    this.handleUrl = this.handleUrl.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
    this.createProduct = this.createProduct.bind(this);
    
  }

  handleUrl(event) {
    this.setState({ imgUrl: event.target.value });
    
    if (event.target.value === "") {
      // this.setState({ imgUrl: mainUrl });
    }
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handlePrice(event) {
    this.setState({ price: event.target.value });
  }

  clearInputs(event) {
    const productName = document.querySelector(".productName");
    const priceInput = document.querySelector(".price");
    const url = document.querySelector(".url");

    productName.value = "";
    priceInput.value = "";
    url.value = "";
    // this.setState({ imgUrl: mainUrl });
  }

  createProduct() {
    axios.post(`http://localhost:3001/api/product?name=${this.state.name}&price=${this.state.price}&image_url=${this.state.imgUrl}`).then(() => {
      this.props.getAllProducts();
      this.clearInputs();
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="form">
        <img src={this.state.imgUrl} alt="picture of the product" className="form-img" />

        <p>Product Name:</p>
        <input type="text" onChange={this.handleName} className="productName" />

        <p>Price</p>
        <input type="text" onChange={this.handlePrice} placeholder="0" className="price" />

        <p>Image URL:</p>
        <input type="text" onChange={this.handleUrl} className="url" />
        <br />

        <button onClick={this.clearInputs} className="form-button">
          Cancel
        </button>

        <button onClick={this.createProduct} className="form-button">
          Add to inventory
        </button>
      </div>
    );
  }
}

export default Form;
