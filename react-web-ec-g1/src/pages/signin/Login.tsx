import { useState, useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextType, AuthContext } from "../../Context/AuthContext";
import "./Login.css";
import { login } from "../../Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { entrar } = useContext<AuthContextType>(AuthContext);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("null");

    try {
      const userToken = await entrar(email, password);
   
      if (!userToken) {
        setError("Dados inseridos incorretos, verifique e tente novamente");
      }
    } catch (err) {
      setError("Erro!!");
    }
  };

  return (
    <div className="containerLogin">
      <header className="header">
        <span>Seja bem vindo ao seu melhor Ecommerce!</span>
      </header>
      <form onSubmit={submit}>
        <div className="inputLogin">
          <label>
            Insira seu Email:
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="inputLogin">
          <label>
            Insira sua Senha:
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button
          className="button"
          type="submit"
          onClick={() => login(email, password)}
        >
          Login
        </button>
        <div className="footer">
          <p>Não possui cadastro? 
          <a href="/Cadastrar">Cadastre-se aqui!</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
