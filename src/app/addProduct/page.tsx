"use client"

import { useState, useEffect } from 'react';
import NavBar from "@/components/NavBar";
import { Container } from "react-bootstrap";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  stock_quantity: number;
}

export default function Home() {
  const [productName, setProductName] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productImage, setProductImage] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productStockQuantity, setProductStockQuantity] = useState<number>(0);
  const [existingProducts, setExistingProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        if (response.ok) {
          const data = await response.json();
          setExistingProducts(data.products);
        } else {
          console.error('Erro ao obter produtos:', response.status);
        }
      } catch (error: any) {
        console.error('Erro ao obter produtos:', error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const existingProduct = existingProducts.find(product => product.name === productName);

    if (existingProduct) {
      const updatedStockQuantity = existingProduct.stock_quantity + productStockQuantity;
      await updateProductStock(existingProduct.id, updatedStockQuantity);
    } else {
      await addNewProduct();
    }
  };

  const updateProductStock = async (productId: number, newStockQuantity: number) => {
    try {
      const response = await fetch(`http://localhost:3001/update/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ stock_quantity: newStockQuantity })
      });

      if (response.ok) {
        console.log('Estoque do produto atualizado com sucesso!');
      } else {
        console.error('Erro ao atualizar o estoque do produto:', response.status);
      }
    } catch (error: any) {
      console.error('Erro ao atualizar o estoque do produto:', error.message);
    }
  };

  const addNewProduct = async () => {
    const productData = {
      name: productName,
      description: productDescription,
      image: productImage,
      price: productPrice,
      stock_quantity: productStockQuantity
    };

    try {
      const response = await fetch('http://localhost:3001/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      });

      if (response.ok) {
        console.log('Novo produto adicionado com sucesso!');
      } else {
        console.error('Erro ao adicionar novo produto:', response.status);
      }
    } catch (error: any) {
      console.error('Erro ao adicionar novo produto:', error.message);
    }
  };

  return (
    <main>
      <section style={{backgroundColor: '#eee'}}>
        <NavBar/>
        <div className="container py-5">
          <h4 className="text-center mt-4 mb-5"><strong>Adicionar produto</strong></h4>
          <form onSubmit={handleSubmit}>
            <Container className="form-group">
              <label htmlFor="productName">Nome do produto</label>
              <input type="text" className="form-control" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} />
            </Container>
            <Container className="form-group mt-3">
              <label htmlFor="productDescription">Descrição</label>
              <input type="text" className="form-control" id="productDescription" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
            </Container>
            <Container className="form-group mt-3">
              <label htmlFor="productImage">Imagem</label>
              <input type="text" className="form-control" id="productImage" value={productImage} onChange={(e) => setProductImage(e.target.value)} />
            </Container>
            <Container className="form-group mt-3">
              <label htmlFor="productPrice">Valor</label>
              <input type="number" className="form-control" id="productPrice" value={productPrice} onChange={(e) => setProductPrice(parseFloat(e.target.value))} />
            </Container>
            <Container className="form-group mt-3">
              <label htmlFor="productStockQuantity">Quantidade em estoque</label>
              <input type="number" className="form-control" id="productStockQuantity" value={productStockQuantity} onChange={(e) => setProductStockQuantity(parseInt(e.target.value))} />
            </Container>
            <button type="submit" className="btn form-group mt-3 btn-primary">Adicionar</button>
          </form>
        </div>
      </section>
    </main>
  );
};
