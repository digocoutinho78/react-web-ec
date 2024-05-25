import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextType, AuthContext } from "../../Context/AuthContext";
import "./Cadastro.css";
import logoImg from "../../assets/EletroIt.jpg";
import { newUser } from "../../Auth";

const Cadastrar = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const { registrar } = useContext<AuthContextType>(AuthContext);

  const cadastro = async () => {
    setError("null");
    try {
      const token = await registrar(email, password);
      navigate("/");
    } catch (err) {}
  };

  return (
    <div className="container">
      <header className="header">
        <img src={logoImg} alt="Eletro It" className="logoImg" />
        <span> Digite suas informações para a realização do cadastro!</span>
      </header>

      <form onSubmit={cadastro}>
        <div className="inputContainer">
          <label> Registre um Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label>Escolha uma Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="botoes">
          <button className="button" onClick={() => newUser(email, password)}>
            Cadastre-se!
          </button>
          <button className="button" onClick={() => navigate("/Login")}>
            {" "}
            Voltar{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Cadastrar;
