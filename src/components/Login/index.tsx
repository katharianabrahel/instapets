import "./styles.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";

interface LoginProps {
    loginType: "login" | "signup" | undefined;
}

function Login({ loginType }: LoginProps) {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    };

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLogin("");
        setPassword("");
    };

    return (
        <div className="login-container">
        <h1>{loginType === "login" ? "Login" : "Criar conta"}</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" id="login" placeholder="Login" value={login} onChange={handleChangeLogin} />
            <input type="password" id="password" placeholder="Senha" value={password} onChange={handleChangePassword} />
            <input type="submit" value={loginType === "login" ? "Entrar" : "Criar conta"} />
        </form>
        <NavLink to={loginType === "login" ? "/signup" : "/login"}>
            {loginType === "login" ? "Criar conta" : "Já tenho conta"}
        </NavLink>
        </div>
    );
}

export default Login;