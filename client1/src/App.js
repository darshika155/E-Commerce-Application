import React,{Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state = {
      products : [],
      front_image : ''
    };
  }
  
  componentDidMount() {
    axios('http://localhost:5000/api/products')
            .then(findResponse => { 
                 console.log(findResponse); 
                this.setState({ products: findResponse.data.products , 
                                front_image : findResponse.data.front_image })
             });
  }

  render(){
      return (
        <div>
        <div className="site-wrap">
         <div className="site-navbar bg-white py-2">
          <div className="search-wrap">
            <div className="container">
              <a href="#top" className="search-close js-search-close"><span className="icon-close2"></span></a>
              <form action="#" method="post">
                <input type="text" className="form-control" placeholder="Search keyword and hit enter..."></input>
              </form>  
            </div>
        </div>

      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <div className="site-logo">
              <a href="index.html" className="js-logo-clone">GashiQoton</a>
            </div>
          </div>
          <div className="main-nav d-none d-lg-block">
            <nav className="site-navigation text-right text-md-center" role="navigation">
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li className="has-children ">
                  <a href="index.html">Home</a>
                  <ul className="dropdown">
                    <li><a href="#top">Menu One</a></li>
                    <li><a href="#top">Menu Two</a></li>
                    <li><a href="#top">Menu Three</a></li>
                    <li className="has-children">
                      <a href="#top">Sub Menu</a>
                      <ul className="dropdown">
                        <li><a href="#top">Menu One</a></li>
                        <li><a href="#top">Menu Two</a></li>
                        <li><a href="#top">Menu Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                
                <li className="active"><a href="shop.html">Shop</a></li>
                <li><a href="#top">Catalogue</a></li>
                <li><a href="#top">New Arrivals</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="icons">
            <a href="#top" className="icons-btn d-inline-block js-search-open"><span className="icon-search"></span></a>
            <a href="#top" className="icons-btn d-inline-block"><span className="icon-heart-o"></span></a>
            <a href="cart.html" className="icons-btn d-inline-block bag">
              <span className="icon-shopping-bag"></span>
              <span className="number">2</span>
            </a>
            <a href="#top" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span className="icon-menu"></span></a>
          </div>
        </div>
      </div>
    </div>
          <div className="site-blocks-cover" data-aos="fade">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto order-md-2 align-self-start">
                  <div className="site-block-cover-content">
                  <h2 className="sub-title">#New Summer Collection 2019</h2>
                  <h1>Arrivals Sales</h1>
                  <p><a href="#top" className="btn btn-black rounded-0">Shop Now</a></p>
                  </div>
                </div>
              <div className="col-md-6 order-1 align-self-end">
            <img src={this.state.front_image} alt="Front page wallpaper" className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="title-section mb-5 col-12">
            <h2 className="text-uppercase">Popular Products</h2>
          </div>
        </div>
        <div className="row">
          {
              this.state.products.map((product,key) =>
                   <div style={{ width: '346.667px'}} key={key}>
                      <Link to={{pathname:'/shop-single',state:{name:product}}} className="product-item md-height bg-gray d-block">
                          <img src={product.imageName} alt="Detail of the product" className="img-fluid"></img>
                      </Link>
                      {product.price}
                  </div>           
               )
            }
        </div>
      </div>
    </div>

    <div className="col-md-6 col-lg-3">
      <div className="block-5 mb-5">
        <h3 className="footer-heading mb-4">Contact Info</h3>
        <ul className="list-unstyled">
          <li className="address">PAC Main Gate, G-423, Main Govindpuram Rd, Near SBI ATM, Block I, G-Block, Govindpuram,
            Ghaziabad, Uttar Pradesh 201002</li>
          <li className="phone"><a href="tel://8375887376">8375887376</a></li>
          <li className="email">gashiqoton@gmail.com</li>
        </ul>
      </div>

      <div className="block-7">
        <form action="#" method="post">
          <label htmlFor="email_subscribe" className="footer-heading">Subscribe</label>
          <div className="form-group">
            <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Email"></input>
            <input type="submit" className="btn btn-sm btn-primary" value="Send"></input>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="row pt-5 mt-5 text-center">
    <div className="col-md-12">
      <p>
        Copyright &copy;
        <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
        with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" rel="noopener noreferrer" 
        target="_blank" className="text-primary">Colorlib</a>
      </p>
    </div>
  </div>
  </div>
    )
  }
}
export default App;
