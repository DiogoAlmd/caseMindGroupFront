"use client"

import "./page.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/productList');
  };

  return (
    <main>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>Case<br/> Mind Group</h2>
          <p>Login ou criação de conta para acesso</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control" placeholder="User Name"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password"/>
              </div>
              <button type="submit" className="btn btn-black mt-3">Login</button>
              <Link href="/signup">
                <button type="button" className="btn btn-secondary mt-3">Registre-se</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
