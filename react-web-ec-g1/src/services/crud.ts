import { api } from "./api";
import { data2 } from "./data";


export const testFunc =  () => {
  data2.forEach(async (item) => {
    try{
        const response = await api.post('/smartphones.json', item)
        /* console.log(response) */
    }catch(err){
        console.log(err)
    }
  });
};

export const GetSmartPhones = async () => {
    try{
        const phones2 = []
        const response = await api.get('/smartphones.json')

        
        
        for(let chave in response.data){
            const phones = {
                ...response.data[chave],
                id: chave,
            }
            phones2.push(phones)
            
        }
        /* console.log(phones2) */
        return phones2

    }catch(err){
        console.log(err)
    }
    
}

