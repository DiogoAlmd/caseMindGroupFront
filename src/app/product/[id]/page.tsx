"use client"
import NavBar from "@/components/NavBar";
import { useState, useEffect } from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    stock_quantity: number;
}

export default function Product({ params }: { params: { id: number } }) {
    const [product, setProduct] = useState<Product | null>(null);
    const [updatedProductData, setUpdatedProductData] = useState<Partial<Product>>({});

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3001/product/${params.id}`);
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data.product);
                } else {
                    console.error('Erro ao obter o produto:', response.status);
                }
            } catch (error: any) {
                console.error('Erro ao obter o produto:', error.message);
            }
        };

        fetchProduct();
    }, [params.id]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUpdatedProductData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUpdateProduct = async () => {
        if (!product) return;

        try {
            const response = await fetch(`http://localhost:3001/update/${product.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProductData)
            });

            if (response.ok) {
                console.log('Produto atualizado com sucesso!');
                // Atualizar apenas os campos alterados
                setProduct(prevProduct => ({
                    ...prevProduct!,
                    ...updatedProductData
                }));
            } else {
                console.error('Erro ao atualizar o produto:', response.status);
            }
        } catch (error: any) {
            console.error('Erro ao atualizar o produto:', error.message);
        }
    };

    const handleDeleteProduct = async () => {
        if (!product) return;

        try {
            const response = await fetch(`http://localhost:3001/delete/${product.id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                console.log('Produto excluído com sucesso!');
                // Redirecionar para a página inicial ou mostrar uma mensagem de sucesso
            } else {
                console.error('Erro ao excluir o produto:', response.status);
            }
        } catch (error: any) {
            console.error('Erro ao excluir o produto:', error.message);
        }
    };

    if (!product) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <NavBar />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.stock_quantity}</p>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Novo nome"
                    value={updatedProductData.name || ''}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Nova descrição"
                    value={updatedProductData.description || ''}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Novo preço"
                    value={updatedProductData.price || ''}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="stock_quantity"
                    placeholder="Nova quantidade em estoque"
                    value={updatedProductData.stock_quantity || ''}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={handleUpdateProduct}>Atualizar Produto</button>
            <button onClick={handleDeleteProduct}>Excluir Produto</button>
        </div>
    );
}
