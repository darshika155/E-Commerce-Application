import React, {Component} from 'react';

class ShopSingle extends Component{

render(props){

        return(
         <div className="site-wrap">
            <div className="site-navbar bg-white py-2">
                <div className="search-wrap">
                    <div className="container">
                        <a href="#top" className="search-close js-search-close"><span className="icon-close2"></span></a>
                        <form action="#top" method="post">
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
    
            <div className="bg-light py-3">
            <div className="container">
                <div className="row">
                <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <a href="shop.html">Shop</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Gray Shoe</strong></div>
                </div>
            </div>
            </div>  

            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="item-entry">
                            <a href="#top" className="product-item md-height bg-gray d-block">
                                <img src={this.props.location.state.name.imageName} alt="Detail of product" className="img-fluid"></img>
                            </a>
                            </div>

                        </div>
                    <div className="col-md-6">
                        <h2 className="text-black">Gray Shoe</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.</p>
                        <p className="mb-4">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p>
                        <p><strong className="text-primary h4">{this.props.location.state.name.price}</strong></p>
                        <div className="mb-1 d-flex">
                            <label htmlFor="option-sm" className="d-flex mr-3 mb-3">
                                <span className="d-inline-block mr-2" style={{top:'-2px', position: 'relative'}}><input type="radio" id="option-sm" name="shop-sizes"></input></span> <span className="d-inline-block text-black">Small</span>
                            </label>
                            <label htmlFor="option-md" className="d-flex mr-3 mb-3">
                                <span className="d-inline-block mr-2" style={{top:'-2px', position: 'relative'}}><input type="radio" id="option-md" name="shop-sizes"></input></span> <span className="d-inline-block text-black">Medium</span>
                            </label>
                            <label htmlFor="option-lg" className="d-flex mr-3 mb-3">
                                <span className="d-inline-block mr-2" style={{top:'-2px', position: 'relative'}}><input type="radio" id="option-lg" name="shop-sizes"></input></span> <span className="d-inline-block text-black">Large</span>
                            </label>
                            <label htmlFor="option-xl" className="d-flex mr-3 mb-3">
                                <span className="d-inline-block mr-2" style={{top:'-2px', position: 'relative'}}><input type="radio" id="option-xl" name="shop-sizes"></input></span> <span className="d-inline-block text-black"> Extra Large</span>
                            </label>
                        </div>
                        <div className="mb-5">
                            <div className="input-group mb-3" style={{ width: '120px'}}>
                                <div className="input-group-prepend">
                                <button className="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                                </div>
                                <input type="text" className="form-control text-center" defaultValue="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                                <div className="input-group-append">
                                <button className="btn btn-outline-primary js-btn-plus" type="button">&plus;</button>
                                </div>
                            </div>
                        </div>
                        <p><a href="cart.html" className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary">Add To Cart</a></p>
                    </div>
                </div>
            </div>
        </div>

    <div className="site-section block-3 site-blocks-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 site-section-heading text-center pt-4">
            <h2>Featured Products</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 block-3">
            <div className="nonloop-block-3 owl-carousel">
              <div className="item">
                <div className="item-entry">
                  <a href="#top" className="product-item md-height bg-gray d-block">
                    <img src="images/model_1.png" alt="Front" className="img-fluid"></img>
                  </a>
                  <h2 className="item-title"><a href="#top">Smooth Cloth</a></h2>
                  <strong className="item-price"><del>$46.00</del> $28.00</strong>
                  <div className="star-rating">
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-entry">
                  <a href="#top" className="product-item md-height bg-gray d-block">
                    <img src="images/prod_3.png" alt="Recommended" className="img-fluid"></img>
                  </a>
                  <h2 className="item-title"><a href="#top">Blue Shoe High Heels</a></h2>
                  <strong className="item-price"><del>$46.00</del> $28.00</strong>

                  <div className="star-rating">
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-entry">
                  <a href="#top" className="product-item md-height bg-gray d-block">
                    <img src="images/model_5.png" alt="Recommended" className="img-fluid"></img>
                  </a>
                  <h2 className="item-title"><a href="#top">Denim Jacket</a></h2>
                  <strong className="item-price"><del>$46.00</del> $28.00</strong>

                  <div className="star-rating">
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                  </div>

                </div>
              </div>
              <div className="item">
                <div className="item-entry">
                  <a href="#top" className="product-item md-height bg-gray d-block">
                    <img src="images/prod_1.png" alt="Recommended" className="img-fluid"></img>
                  </a>
                  <h2 className="item-title"><a href="#top">Leather Green Bag</a></h2>
                  <strong className="item-price"><del>$46.00</del> $28.00</strong>
                  <div className="star-rating">
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-entry">
                  <a href="#top" className="product-item md-height bg-gray d-block">
                    <img src="images/model_7.png" alt="Recommended" className="img-fluid"></img>
                  </a>
                  <h2 className="item-title"><a href="#top">Yellow Jacket</a></h2>
                  <strong className="item-price">$58.00</strong>
                  <div className="star-rating">
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                    <span className="icon-star2 text-warning"></span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <footer className="site-footer custom-border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h3 className="footer-heading mb-4">Promo</h3>
            <a href="#top" className="block-6">
              <img src="images/about_1.jpg" alt="placeholder" className="img-fluid rounded mb-4"></img>
              <h3 className="font-weight-light  mb-0">Finding Your Perfect Shirts This Summer</h3>
              <p>Promo from  July 15 &mdash; 25, 2019</p>
            </a>
          </div>
          <div className="col-lg-5 ml-auto mb-5 mb-lg-0">
            <div className="row">
              <div className="col-md-12">
                <h3 className="footer-heading mb-4">Quick Links</h3>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li><a href="#top">Sell online</a></li>
                  <li><a href="#top">Features</a></li>
                  <li><a href="#top">Shopping cart</a></li>
                  <li><a href="#top">Store builder</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li><a href="#top">Mobile commerce</a></li>
                  <li><a href="#top">Dropshipping</a></li>
                  <li><a href="#top">Website development</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li><a href="#top">Point of sale</a></li>
                  <li><a href="#top">Hardware</a></li>
                  <li><a href="#top">Software</a></li>
                </ul>
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
              <form action="#top" method="post">
                <label htmlFor="email_subscribe" className="footer-heading">Subscribe</label>
                <div className="form-group">
                  <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Email"></input>
                  <input type="submit" className="btn btn-sm btn-primary" defaultValue="Send"></input>
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
    </footer>
  </div>
        );

    }

} 

export default ShopSingle;