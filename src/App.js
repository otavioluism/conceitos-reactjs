import React, {useState, useEffect} from "react";
import api from 'services/api';

import "./styles.css";

import deleteImage from "./assets/delete.png";
import aceptImage from "./assets/acept.png";


function App() {
  
  const [repositories, setRepositories] = useState([]);

  //Open componente
  useEffect(() => {
    api.get("/repositories").then(response => {
      setRepositories(response.data);
    });
  }, []);

  //Button add repository
  async function handleAddRepository() {
    
    const response = await api.post("/repositories", {
      url: "https://github.com",
      title: `New Project ${Date.now()}`,
      techs: ["Node.js", "ReactJS", "React Native"]
    });
    
    const repository = response.data; 

    //imutabilidade
    setRepositories([...repositories, repository]);

  }

  //Button remove repository
  async function handleRemoveRepository(id) {
    
    try{

      await api.delete(`repositories/${id}`);
      
      setRepositories(repositories.filter(repository => repository.id !== id));

    }catch{ 

      alert("error the delet repository")

    }
  }

  return (

    <div>

      <ul data-testid="repository-list">        
          {repositories.map(repository =>        
             <li key={repository.id}>
                  {repository.title}  
                  <button onClick={() => handleRemoveRepository(repository.id)}> 
                      Remover 
                      <img src={deleteImage} alt="Icone de Remove"/>
                  </button>
              </li>
           )}

      </ul>

      <button onClick={handleAddRepository}>
        Adicionar
        <img src={aceptImage} alt="Icone de Acept"/>
      </button>
      
    </div>
  );
}

export default App;
