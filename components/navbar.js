function navbar() {
  return `<header class="header-div">
    <div class="navbar-box">
      <div class="nav-left">
        <div id="nav-left-icon">
          <ul>
            <li>
              <a href="store.html"
                ><i class="material-icons">store</i>
                <p>All Stores</p>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="material-icons">contact_page</i>
                <p>Contact us</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="nav-logo">
          <a href="/">
            <img
              src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/logo.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="nav-right">
        <div class="nav-search">
          <input
            id="input-search"
            type="text"
            placeholder="Search Products & Brands"
          />
          <button id="search-btn">
            <i class="material-icons">search</i>
          </button>
        </div>
        <div class="nav-right-icon">
          <ul>
            <li class="nav-wishlist">
              <a href="">
                <i class="material-icons">favorite_border</i>
              </a>
            </li>
            <li>
              <a href="./cart.html">
                <i class="material-icons">shopping_bag</i>
              </a>
            </li>
            <li id="account-icon">
              <a href="">
                <i class="material-icons">account_circle</i>
              </a>
              <ul id="nav-account">
                <li><a href="./signin.html">SIGN IN</a></li>
                <hr />
                <li><a href="./signup.html">SIGN UP</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="nav-menubar">
      <div class="nav-menubar-inner">
        <div id="menubar-bargains"><p>BARGAINS</p></div>
        <div id="menubar-women"><p>WOMEN</p></div>
        <div id="menubar-kids"><p>KIDS</p></div>
        <div id="menubar-beauty"><p><a href="./perfume.html">BEAUTY</a></p></div>
        <div id="menubar-men"><p><a href="./mens.html">MEN</a></p></div>
        <div id="menubar-homestop"><p>HOMESTOP</p></div>
        <div id="menubar-watches"><p>WATCHES</p></div>
        <div id="menubar-brands"><p>BRANDS</p></div>
        <div id="menubar-gift"><p>GIFT</p></div>
        <div id="menubar-luxe"><p>LUXE</p></div>
      </div>
    </div>
  </header>`
}
export default navbar