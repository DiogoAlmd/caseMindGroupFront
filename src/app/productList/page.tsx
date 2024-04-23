"use client"
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import { useSession } from "next-auth/react";

// Interface para os dados básicos do produto
interface BasicProductData {
  id: number;
  imageSrc: string;
  name: string;
  description: string;
  value: number;
}

// Interface para informações específicas do produto, se houver
interface ProductDetails {
}

// Unindo as duas interfaces para formar a interface completa do produto
interface Product extends BasicProductData, ProductDetails {}

// Separando as props do componente ProductList
interface ProductListProps {
  products?: BasicProductData[]; // Tornando products opcional
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  
  console.log(useSession());

  const [dummyProducts, setDummyProducts] = useState<BasicProductData[]>([
    { id: 1, imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp", name: 'Produto 1', description: "teste", value: 10 },
    { id: 2, imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp", name: 'Produto 2', description: "teste", value: 11 },
    { id: 3, imageSrc: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp", name: 'Produto 3', description: "teste", value: 11 }
    // Adicione mais produtos dummy conforme necessário
  ]);

  // Utiliza os produtos passados como propriedade, ou os produtos dummy se não houver produtos
  const productList = products || dummyProducts;

  if (!productList) {
    return <div>Nenhum produto disponível</div>;
  }

  return (
    <section style={{backgroundColor: '#eee'}}>
      <NavBar/>
      <div className="text-center container py-5">
        <h4 className="mt-4 mb-5"><strong>Products</strong></h4>
        <div className="row">
          {productList.map(product => (
            <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
              <div className="card">
                <Link href={`/product/${product.id}`} className="text-reset">
                  
                  <div>
                    <img src={product.imageSrc} className="w-100" alt={product.name} />
                  </div>

                  <div className="card-body">
                      <h5 className="mb-3">{product.name}</h5>
                    <p>{product.description}</p>
                    <h6 className="mb-3">R${product.value}</h6>
                  </div>

                  </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
   );  
};
export default ProductList;
