"use client"

import "./page.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from "next-auth/react";
import React, { SyntheticEvent, useRef } from "react";

export default function Login() {
  const name = useRef("");
  const password = useRef("");
  const { data: session } = useSession();
  const router = useRouter();

  // const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   router.push('/productList');
  // };
  async function handleLogin(event: SyntheticEvent) {
    console.log("Autenticação não funciona")
    // event.preventDefault()
    // const result = await signIn('credentials', {
    //   name,
    //   password,
    //   redirect: true
    // })

    // if (result?.error) {
    //   console.log(result)
    //   return
    // }
    // console.log(result);
  }

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
                <input type="text" className="form-control" placeholder="User Name" onChange={(e) => (name.current = e.target.value)}/>
              </div>
              <div className="form-group">
                <label>passwordword</label>
                <input type="passwordword" className="form-control" placeholder="password" onChange={(e) => (password.current = e.target.value)}/>
              </div>
              
              {/* <button type="submit" className="btn btn-black mt-3">Login</button> */}
              
              <Link href="/productList">
                <button type="submit" className="btn btn-black mt-3">Login</button>
              </Link>

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
