import {Link} from 'react-router-dom';

const AuthLinks = () => {
    return (
        <div className="flex items-center gap-4">
            <Link to="/register" className="text-[14px] text-dark-gray-2 hover:text-primary underline">
                Cadastre-se
            </Link>

            <Link to="/login" className="bg-pink-600 text-white font-bold py-2 px-6 rounded-md 
            hover:bg-pink-700 transition text-sm md:text-base">
                Entrar
        </Link>
        </div>
    );
};

export default AuthLinks;