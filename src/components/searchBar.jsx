import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {

        if(search.trim()) {
            navigate(`/produtos?filter=${encodeURIComponent(search.trim())}`);
      }
    };

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSearch();
        }
    };

    return(
        <div className="relative w-full">
      <input
        id="search"        
        name="search"      
        type="text"
        className="w-full bg-gray-100 rounded-lg pl-4 pr-10 py-2.5 text-gray-700..." // Suas classes continuam iguais!
        placeholder="Buscar produtos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      {/* O botão do ícone não precisa de mudanças, seu posicionamento já está correto. */}
      <button
        onClick={handleSearch}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pink-600 transition"
        aria-label="Buscar"
      >
        <FiSearch className="text-lg" />
        </button>
      </div>
    );
};

export default SearchBar;