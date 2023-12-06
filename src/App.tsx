import "./App.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

function App() {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    console.log(login);
  }, [login, password]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário, como enviar os dados para o backend
    console.log("Username:", login);
    console.log("Password:", password);
    // Reset dos campos após a submissão
    setLogin("");
    setPassword("");
  };

  return (
    <>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={handleChangeLogin}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handleChangePassword}
          />
          <input type="submit" value={"Entrar"} />
        </form>
        <a href="/signup">Criar conta</a>
      </div>
    </>
  );
}

export default App;
