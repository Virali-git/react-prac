import React from "react";
import { Link } from "react-router-dom";
//icons
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebasev";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className="header container-fluid">
      <div className="row">
        <div className="header__search col-md-7 col-sm-12 ">
          <Link to="/">
            <img className="header__logo" src="/images/wineitup.png" />
          </Link>

          <div className="header__inputArea">
            <input className="header__inputSearch" type="text" />
            <SearchIcon className="header__searchIcon" />
          </div>

          {/*search logo*/}
        </div>
        <div className="header__nav col-md-5 col-sm-12">
          <Link to = {!user && '/login'}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne"> Hello {user ? user?.email : 'there'}</span>
              <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign In'}</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne"> Returns</span>
            <span className="header__optionLineTwo">& Queries</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Design Your</span>
            <span className="header__optionLineTwo"> Wine cellar</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Invite your</span>
            <span className="header__optionLineTwo">Friends & Families</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon className="basket__icon" />
              <span className=" header__basketCount">{basket?.length}</span>
              {/* ? is optional, what is does is! if they dont get basket value it will gracefull handle the error */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
