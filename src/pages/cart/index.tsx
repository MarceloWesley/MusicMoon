import { Header } from "../../components/Header"
import { Container, Total } from "./styles"
import { ProductTable } from "./styles"
import { ImagesGuitar } from '../../util/imagesService'
import { MdAddCircleOutline, MdDelete, MdRemoveCircleOutline } from "react-icons/md"
import { formatPrice } from "../../util/FormatPrice"
import { useCart } from "../../hooks/useCart"
import {ImagesFormatted} from '../../ImagesOb'


interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
}


export function Cart() {

    const { cart, removeProduct, updateProductAmount } = useCart();

    const cartFormatted = cart.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        subtotal: formatPrice(product.price * product.amount)
    }))
    const total =
        formatPrice(
            cart.reduce((sumTotal, product) => {
                return sumTotal + product.price * product.amount
            }, 0)
        )

    

    function handleProductIncrement(product: Product) {
        updateProductAmount({ productId: product.id, amount: product.amount + 1 })
    }

    function handleProductDecrement(product: Product) {
        updateProductAmount({ productId: product.id, amount: product.amount - 1 })

    }

    function handleRemoveProduct(productId: number) {
        removeProduct(productId)
    }
    
    function findImage( productId: number){
        const Found = ImagesFormatted.find(element => element.id === productId);
        return Found ? Found.image : 'img'
        
    }

    
    return (
        <>
            <Header />
            <Container>
                <ProductTable>
                    <thead>
                        <tr>
                            <th aria-label="product image" />
                            <th>PRODUTO</th>
                            <th>QTD</th>
                            <th>SUBTOTAL</th>
                            <th aria-label="delete icon" />
                        </tr>
                    </thead>
                    <tbody>
                        {cartFormatted.map((product, index) => (
                            <tr key={product.id} data-testid="product">
                                <td>
                                    <img src={findImage(product.id)} alt="" />
                                </td>
                                <td>
                                    <strong>{product.title}</strong>
                                    <span>{product.priceFormatted}</span>
                                </td>
                                <td>
                                    <div>
                                        <button
                                            type="button"
                                            data-testid="decrement-product"
                                            disabled={product.amount <= 1}
                                            onClick={() => handleProductDecrement(product)}
                                        >
                                            <MdRemoveCircleOutline size={20} />
                                        </button>
                                        <input
                                            type="text"
                                            data-testid="product-amount"
                                            readOnly
                                            value={product.amount}
                                        />
                                        <button
                                            type="button"
                                            data-testid="increment-product"
                                            onClick={() => handleProductIncrement(product)}
                                        >
                                            <MdAddCircleOutline size={20} />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>{product.subtotal}</strong>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        data-testid="remove-product"
                                        onClick={() => handleRemoveProduct(product.id)}
                                    >
                                        <MdDelete size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </ProductTable>

                <footer>
                    <button type="button">Finalizar pedido</button>

                    <Total>
                        <span>TOTAL</span>
                        <strong>{total}</strong>
                    </Total>
                </footer>
            </Container>
        </>
    )
}



export default Cart


