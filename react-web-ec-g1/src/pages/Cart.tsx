import React, { useState } from "react"

interface Iproduct {
    id: Number,
    title: string,
    price: number
}
interface IshoppingCartItem {
    product: Iproduct
    quantity: number
}

const products: Iproduct[] = [
    { id: 1, title: "Televisão", price: 10.99 },
    { id: 2, title: "Celular", price: 20.90 }
]

const Cart = () => {
    const [shoppingCart, setShoppingCart] = useState<IshoppingCartItem[]>([])

    const handleAddToCart = (id: Number) => {
        const product = products.find((product) => product.id === id);
        const alreadyInShoppingCart = shoppingCart.find(
            (item) => item.product.id === id
        )

        if (alreadyInShoppingCart) {
            const newShoppingCart: IshoppingCartItem[] = shoppingCart.map((item) => {
              if (item.product.id === id)
                ({
                  ...item,
                  quantity: item.quantity++,
                });
              return item;
            });
            setShoppingCart(newShoppingCart);
            return;
          }
          const cartItem: IshoppingCartItem = {
              product: product!,
              quantity: 1,
            }
            const newShoppingCart: IshoppingCartItem[] = [...shoppingCart, cartItem];
              setShoppingCart(newShoppingCart)
            }
    


    const handleRemoveFromCart = (id: Number) => {

        const alreadyInShoppingCart = shoppingCart.find(
            (item) => item.product.id === id
          )
          if (alreadyInShoppingCart!.quantity > 1) {
            const newShoppingCart: IshoppingCartItem[] = shoppingCart.map((item) => {
              if (item.product.id === id)
                ({
                  ...item,
                  quantity: item.quantity--,
                })
              return item
            });
            setShoppingCart(newShoppingCart)
            return
          }
          const newShoppingCart: IshoppingCartItem[] = shoppingCart.filter(
            (item) => item.product.id !== id
          )
          setShoppingCart(newShoppingCart)

     }
     const handleCleanCart = () => {
        setShoppingCart([]);
      }

      const totalCart = shoppingCart.reduce((total, current) => {
        return total + current.product.price * current.quantity;
      }, 0);
    
     

    return (
        <div>
            <h2>Produtos</h2>
            <ul>
                {products.map((product) => (
                <li>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <button onClick={() => handleAddToCart(product.id)}>
                        Adicionar no carrinho
                    </button>
                </li>))}
            </ul>
            <h2>Carrinho de Compras({totalCart})</h2>
            <button onClick={handleCleanCart}>Limpar Carrinho</button>
            <ul>
                {shoppingCart.map((item) => (
                    <li>
                        <p>Product: {item.product.title}</p>
                        <p>Price: {item.product.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Total: {item.quantity * item.product.price}</p>
                        <button onClick={() => handleRemoveFromCart(item.product.id)}>
                            Remover do Carrinho
                        </button>

                    </li>))}
            </ul>

        </div>
    )
}

export { Cart }