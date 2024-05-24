import { createContext, useState } from "react"
import Iproduct from "../Types/Products"

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
    totalAmount: () => number
    totalItems: () => number

}

type CartContextProviderProps = {
    children?: React.ReactNode | undefined;
}
export const CartCtx = createContext<ContextType | undefined>(undefined);

const CartCtxProvider = ({ children }: CartContextProviderProps) => {
    const [cartState, setCartState] = useState<CartState>({ products: [] })


    const addToCart = (product: Iproduct, quantity: number) => {
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
            return;
        }
        const cartItem: IshoppingCartItem = {
            product,
            quantity,
        }
        const newShoppingCartItems: IshoppingCartItem[] = [...cartState.products, cartItem];
        setCartState({ products: newShoppingCartItems })
    }



    const removeFromCart = (product: Iproduct, quantity: number) => {

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
            return
        }
        const newShoppingCart: IshoppingCartItem[] = cartState.products.filter(
            (item) => item.product.id !== product.id
        )
        setCartState({ products: newShoppingCart })

    }

    const cleanCart = () => {
        setCartState({ products: [] });
    }

     const totalAmount = (): number => cartState.products.reduce((total, current) => {
        return total + current.product.price * current.quantity;
      }, 0);

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