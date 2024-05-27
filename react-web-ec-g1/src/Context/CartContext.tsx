import { createContext, useContext, useState, useEffect } from "react" // Importe useEffect
import Iproduct from "../Types/Products"
import { LoadingCtx } from "./LoadingContext"

interface IshoppingCartItem {
    product: Iproduct
    quantity: number
}

type CartState = {
    products: IshoppingCartItem[]
}

type ContextType = CartState & {
    addToCart: (product: Iproduct, quantity: number) => void
    removeFromCart: (product: Iproduct, quantity: number) => void
    cleanCart: () => void
    totalAmount: () => string
    totalItems: () => number
}

type CartContextProviderProps = {
    children?: React.ReactNode | undefined;
}
export const CartCtx = createContext<ContextType | undefined>(undefined);

const CartCtxProvider = ({ children }: CartContextProviderProps) => {
    const [cartState, setCartState] = useState<CartState>({ products: [] })
    const loadingctx = useContext(LoadingCtx)

    // Adicione este useEffect para recuperar o estado do carrinho do localStorage quando o componente é montado
    useEffect(() => {
        const savedCartState = localStorage.getItem('cart');
        if (savedCartState) {
            setCartState(JSON.parse(savedCartState));
        }
    }, []);

    // Adicione este useEffect para armazenar o estado do carrinho no localStorage sempre que cartState muda
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartState));
    }, [cartState]);

    const addToCart = (product: Iproduct, quantity: number) => {
        loadingctx?.setLoading(true)
        const alreadyInShoppingCart = cartState.products.find(
            (item) => item.product.id === product.id
        )

        if (alreadyInShoppingCart) {
            const newShoppingCart: IshoppingCartItem[] = cartState.products.map((item) => {
                if (item.product.id === product.id)
                    ({
                        ...item,
                        quantity: item.quantity += quantity,
                    });
                return item;
            });
            setCartState({ products: newShoppingCart });
            loadingctx?.setLoading(false)

            return;

        }
        const cartItem: IshoppingCartItem = {
            product,
            quantity,
        }
        const newShoppingCartItems: IshoppingCartItem[] = [...cartState.products, cartItem];
        loadingctx?.setLoading(false)
        setCartState({ products: newShoppingCartItems })
    }

    const removeFromCart = (product: Iproduct, quantity: number) => {
        loadingctx?.setLoading(true)

        const alreadyInShoppingCart = cartState.products.find(
            (item) => item.product.id === product.id
        )
        if (alreadyInShoppingCart!.quantity > quantity) {
            const newShoppingCart: IshoppingCartItem[] = cartState.products.map((item) => {
                if (item.product.id === product.id)
                    ({
                        ...item,
                        quantity: item.quantity -= quantity,
                    })
                return item
            });
            setCartState({ products: newShoppingCart })
            loadingctx?.setLoading(false)

            return
        }
        const newShoppingCart: IshoppingCartItem[] = cartState.products.filter(
            (item) => item.product.id !== product.id
        )
        loadingctx?.setLoading(false)

        setCartState({ products: newShoppingCart })

    }

    const cleanCart = () => {
        setCartState({ products: [] });
    }

    const totalAmount = (): string => {
        let a = cartState.products.reduce((total, current) => {
            return total + current.product.price * current.quantity
        }, 0);
        return a.toFixed(2)
    }

    const totalItems = (): number => cartState.products.reduce((total, current) => {
        return total + current.quantity;
    }, 0);

    return (
        <CartCtx.Provider value={{ ...cartState, addToCart, removeFromCart, cleanCart, totalAmount, totalItems }}>
            {children}
        </CartCtx.Provider>
    )
}

export default CartCtxProvider
