"use client";

import { useState } from 'react';
import "./page.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignup = async (e: any) => {
    e.preventDefault();
    // Realizar a validação da senha
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Conta criada com sucesso!');
        router.push('/login');
      } else {
        const errorData = await response.json();
        alert('Erro ao criar conta: ' + errorData.message);
      }
    } catch (error: any) {
      console.error('Erro ao criar conta:', error.message);
      alert('Erro ao criar conta. Tente novamente mais tarde.');
    }
  };

  return (
    <main>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>Case<br/> Mind Group</h2>
          <p>Crie uma conta!</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <label>Nome</label>
                <input type="text" className="form-control" name="name" placeholder="Nome" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="text" className="form-control" name="email" placeholder="nome@exemplo.com" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" placeholder="@123Quatro" value={formData.password} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Reescreva sua senha</label>
                <input type="password" className="form-control" name="confirmPassword" placeholder="@123Quatro" value={formData.confirmPassword} onChange={handleInputChange} required />
              </div>
              <button type="submit" className="btn btn-black mt-3">Criar!</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
