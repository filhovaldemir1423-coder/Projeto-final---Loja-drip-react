import {useNavigate} from "react-router-dom";
import {useCart} from "../../contexts/cartContext";

const ProductCard = ({product = {} }) => {
    const {image, price, priceDiscount, name, id, category} = product;
    const {cartItems, addToCart, removeFromCart} = useCart();
    const navigate = useNavigate();

    const isInCart = cartItems.some((item) =>item.id === id);
    console.log("Render Card", id, {isInCart, cartItems});

    const discountPercentage = typeof price === "number" && typeof priceDiscount === "number" && price > priceDiscount 
    ? Math.round(((price - priceDiscount) / price) * 100) : null;

    const formatPrice = (value) => {
        if(typeof value !== "number") return null;
        return new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL",}).format(value);
    };

    const handleCartClick = () => {
        if(isInCart) {
            removeFromCart(id);
        } else {
            addToCart(product);
        }
    };
    const handleViewMore = () => {
        navigate(`/produto/${id}`);
        window.scrollTo(0,0);
    };
    
    return(
        <div className="flex flex-col border rounded-lg overflow-hidden 
        shadow-md bg-white transition hover:shadow-lg w-full"> 

         <div className="relative h-56 md:h-60 flex items-center justify-center p-4">

        {discountPercentage && (
          <span className="absolute top-2 left-2 bg-lime-200 text-xs 
          font-bold text-gray-800 px-2 py-1 rounded">
          {discountPercentage}% OFF
          </span>
    )}

    <img 
    src={image && String(image).startsWith("http") ? image : "https://artwalk.vtexassets.com/arquivos/ids/539672/23107-6-001-1-AW-800x1000.jpg?v=638592362841130000"} 
    alt={`imagem do produto ${name}`} 
    className="max-h-40 md:max-h-44 object-contain"
    onError={(e) => {
        if (!e.target.src.includes("placehold.co")) {
            e.target.onerror = null; 
            e.target.src = "https://artwalk.vtexassets.com/arquivos/ids/539672/23107-6-001-1-AW-800x1000.jpg?v=638592362841130000"; // Mostra essa foto se a original falhar
        }
        }}
    />
    </div>

    <div className="p-4 flex flex-col gap-2">
        <p className="text-sm text-gray-500">{category || "Produto"}</p>
        <p className="font-medium text-sm">{name}</p>

        <div className="text-sm flex items-center gap-2 mt-1">
            {typeof priceDiscount === "number" && priceDiscount < price ? (
                <>
                    <span className="line-through text-gray-400">{formatPrice(price)}</span>
                    <span className="font-bold text-gray-900 text-base">{formatPrice(priceDiscount)}</span>
                </>
            ) : (
                <span className="font-bold text-gray-900 text-base">{formatPrice(price)}</span>
            )}
        </div>

    <button onClick={handleCartClick} className ={`mt-2 py-1 px-3 rounded text-sm transition 
    font-semibold w-full ${isInCart ? "bg-red-500 text-white hover:bg-green-600" : "bg-primary text-white hover:brightness-110"
    }`}
    >
    
    {console.log ("Botão render:", id, isInCart)}
    {isInCart ? "Adicionado ao Carrinho" : "Adicionar ao Carrinho"}
    </button>

    <button onClick={handleViewMore} className="text-sm px-3 py-1 rounded bg-gray-200 text-gray-800 font-medium 
    hover:bg-gray-300 mt-1"
    >
        Ver mais
    </button>
    </div>
    </div>
    );
};

export default ProductCard;
