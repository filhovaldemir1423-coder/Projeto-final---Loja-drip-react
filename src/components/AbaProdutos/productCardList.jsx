import {Link} from "react-router-dom";
import {useCart} from "../../contexts/cartContext";

export default function ProductCardList({ id, image, name, category, price, priceDiscount })  {

const {addToCart, removeFromCart, isInCart} = useCart();

const isProductInCart = isInCart(id);

const hasDiscount = typeof priceDiscount === 'number' && priceDiscount < price;
let discountPercentage = 0;

if (hasDiscount) {
    discountPercentage = Math.round(((price - priceDiscount) / price) * 100);
}
const handleToggleCart= () => {
    if(isProductInCart) {
        removeFromCart(id);
    } else{
       const fullProduct = { id, image, name, category, price, priceDiscount };
        addToCart(fullProduct);
    }
};

const formatPrice = (value)=>{
    if(typeof value !== "number") return null;
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
};

return (
    // a estrutura do card principal vai permanecer a mesma

    <div className="bg-white border border-gray-200 rounded-Ig shadow-mds flex flex-col
    justify-between transition-shadow hover: shadow-xl">
        <Link to={`/produto/${id}`} className="block relative">
            {hasDiscount && (
             <div className="absolute top-3 left-3 bg-green-200 text-green-800 text-xs font-bold 
                px-3 py-1 rounded-mds z-10">
                    {discountPercentage}% OFF
                </div>
)}
    <div className="h-56 w-full flex items-center justify-center p-4">
    <img 
    src={(image && image !== "null.jpg" && image !== "null") ? image : "https://via.placeholder.com/200?text=Sem+Foto"} 
     alt={`imagem do produto ${name}`} 
    className="max-h-40 md:max-h-44 object-contain"
/>
    </div>
</Link>

<div className="p-4 flex flex-col flex-grow">
    <span className="text-xs text-gray-500 mb-1">{category}</span>
    <h3 className="text-md font-semibold text-gray-800 mb-2 flex-grow">{name}</h3>

    <div className="mb-4">
    {hasDiscount ? (
        <div className="flex items-baseline gap-2">
        <del className="text-sm text-gray-400">{formatPrice(price)}</del>
        <strong className="text-Ig font-bold text-prink-600">{formatPrice(priceDiscount)}
    </strong>    
        </div>
    ): (
        <strong className="text-Ig font-bold text-gray-900">{formatPrice(price)}</strong>
    )}
    </div>
</div>

<div className="p-4 pt-0">
  <button 
  onClick={handleToggleCart} //usando a nova função
  // as classes de estilo vao mudando com base no estado do carrinho
  className={`w-full text-white font-bold py-2 rounded-Ig transition mb-2 ${isProductInCart 
    ? 'bg-red-600 hover:bg-green-700' // estilo green quando esta no carrinho
    : 'bg-pink-600 hover:bg-pink-700' // estilo pink quando nao esta no carrinho
}`}
>
{/* O texto do botao tambem muda*/}
{isProductInCart ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
</button>
<Link to={`/produto/${id}`}
className="w-full block text-center bg-gray-200 text-gray-800 font-bold py-2 rounded-Ig
hover:bg-gray-300 transition"
    >
        Ver mais
        </Link>
     </div>
    </div>
    );
};
