'use client'
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState(true);
  const route = useRouter();
  if (user) {
    return (
      <div className={styles.page}>
        <h1>Página Principal</h1>
        <br/>
        <p>E-mail</p>
        <input></input>
        <br/>
        <p>Senha</p>
        <input></input>
        <br/>
        <br/>
        <button onClick={() =>
          setUser(false)}> Login
        </button>
        
      </div>
    );
  } else {
    return (
      <div className={styles.page}>
        <h1>Logado </h1>
        <br/>
        <button onClick={() =>
            setUser(true)}> Voltar
        </button>      
      </div>
    );
  }
}
