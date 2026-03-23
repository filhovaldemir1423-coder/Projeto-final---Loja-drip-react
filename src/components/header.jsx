import { useState} from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import AuthLinks from './authLinks';
import MainNav from './mainNave';
import CartIcon from './cartIcon';
import CartDropDown from  './cartDropDown';


const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleToggleCart = () => setIsCartOpen(!isCartOpen);
    const handleCloseCart = () => setIsCartOpen(false);

return (
    <header className="relative w-full border-b border-gray-200 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-4"> 
      <div className="flex items-center justify-between w-full flex-wrap gap-x-6 gap-y-4">

        <div className="flex-shrink-0 order-1">
          <Logo />
        </div>

        <div className="w-full md:flex-grow md:w-auto order-3 md:order-2">
          <SearchBar />
        </div>

        <div className="flex items-center gap-4 md:gap-6 flex-shrink-0 order-2 md:order-3">
          <div className="whitespace-nowrap">
            <AuthLinks />
          </div>
          <CartIcon onToggle={handleToggleCart} />
        </div>
      </div>

      <div className="flex justify-start mt-10">
        <MainNav />
      </div>
    </div> 

    {isCartOpen && (
    <CartDropDown isOpen={isCartOpen} onClose={handleCloseCart} />
    )} 
  </header>
    );
};

export default Header;