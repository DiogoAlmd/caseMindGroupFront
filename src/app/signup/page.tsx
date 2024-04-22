"use client"

import "./page.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/login');
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
                <input type="text" className="form-control" placeholder="Nome"/>
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="text" className="form-control" placeholder="nome@exemplo.com"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="@123Quatro"/>
              </div>
              <div className="form-group">
                <label>Reescreva sua senha</label>
                <input type="password" className="form-control" placeholder="@123Quatro"/>
              </div>
              <button type="submit" className="btn btn-black mt-3">Criar!</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
