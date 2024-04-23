"use client"
// Importe useState e useEffect
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import { useSession } from "next-auth/react";

// Interface para os dados do produto
interface Product {
  id: number;
  name: string;
  description: string;
  image: string; 
  price: string; 
  stock_quantity: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Inicialize products como uma matriz vazia de produtos
  // const { data: session } = useSession(); // Se estiver usando next-auth
  // const session = "true"
  useEffect(() => {
    // Verifica se a sessão está definida antes de fazer a solicitação da API
    if (true) {
      fetch('http://localhost:3001/products')
        .then(response => response.json())
        .then(data => {
          if (data && data.products) {
            setProducts(data.products); // Define os produtos recebidos da API
          }
        })
        .catch(error => console.error('Erro ao obter produtos:', error));
    }
  }, [true]);

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <NavBar />
      <div className="text-center container py-5">
        <h4 className="mt-4 mb-5"><strong>Products</strong></h4>
        <div className="row">
          {products.map(product => (
            <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
              <div className="card">
                <Link href={`/product/${product.id}`} className="text-reset">
                  <div>
                    <img src={product.image} className="w-100" alt={product.name} />
                  </div>
                  <div className="card-body">
                    <h5 className="mb-3">{product.name}</h5>
                    <p>{product.description}</p>
                    <h6 className="mb-3">R${product.price}</h6>
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
