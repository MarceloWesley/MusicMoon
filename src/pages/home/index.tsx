
import React, { useState, useEffect } from 'react';
import { api } from '../../services/api/ApiConfig'
import { formatPrice } from '../../util/FormatPrice';
import { ProductList } from './styles'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import {ImagesGuitar } from '../../util/imagesService'
import { Header } from '../../components/Header';
import { useCart } from '../../hooks/useCart';

export interface ImagesEletricGuitar {
    image: string;
    name: string;
  }


interface Product {
    id: number
    title: string
    price: number
    image: string
}

interface ProductFormatted extends Product {
    priceFormatted: string
}

interface CartItemsAmount {
    [key: number]: number;
  }



function Home() {
    const [products, setProducts] = useState<ProductFormatted[]>([])
    const { addProduct, cart } = useCart();

    const cartItemsAmount = cart.reduce((sumAmount, product) => {
        const newSumAmount = {...sumAmount};
        newSumAmount[product.id] = product.amount;
   
        return newSumAmount
      }, {} as CartItemsAmount)   


    useEffect(() => {
        async function loadProducts() {
            const response = await api.get<Product[]>('products')

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price)
            }))

            setProducts(data)
        }
        loadProducts();
    }, []);
   
    function handleAddProduct(id: number) {
        addProduct(id)
      }

    return (
        <>
        <Header/>

        <ProductList>
           {products.map((product, index) => (
            <li key={product.id}>
                <div>
                    <img src={ImagesGuitar[index].image} alt="" />
                </div>
                <p>{product.title}</p>
                <strong>{product.priceFormatted}</strong>
                <button
                type='button'
                onClick={() => handleAddProduct(product.id)}
                >
                <div>
                    <MdOutlineAddShoppingCart size={12} color='#FFF'/>
                    {cartItemsAmount[product.id] || 0}
                </div>
                <span>Adicionar ao Carrinho </span>
                </button>
            </li>   
       ))}; 
        </ProductList>

        </>
    );
};

export default Home