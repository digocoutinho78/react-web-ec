import axios from "axios";

const API_KEY = "AIzaSyDshPyvDyIq-FktloxPPBLFPEIGobSPx68";
const URL_API = "https://identitytoolkit.googleapis.com/v1/accounts:";

interface AuthData {
  email: string;
  password: string;
}

interface AuthResponse {
  idToken: string;
}

const auth = async (
  mode: string,
  data: AuthData
): Promise<AuthResponse | undefined> => {
  try {
    console.log(`${URL_API}${mode}?key=${API_KEY}`)
    const response = await axios.post(`${URL_API}${mode}?key=${API_KEY}`, {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
      
    });
    console.log(response);
    return response.data.idToken
  } catch(err) {
      console.log("Erro de Autenticação", err)
  }
}

export const newUser = async (
  email: string,
  password: string
): Promise<string | undefined> => {
  const token = await auth("signUp", { email, password });
  if (token) {
    alert("Resgistro efetuado com Sucesso!");
  } else {
    alert("Ocorreu um erro ao realizar o registro");
  }
  return token?.idToken;
};

export const login = async (
  email: string,
  password: string
): Promise<string | undefined> => {
  const token = await auth("signInWithPassword", { email, password });
  if (token) {
    alert("Acesso realizado com Sucesso!");
  } else {
    alert("Ocorreu um erro ao realizar o Login");
  }
  return token?.idToken;
};
