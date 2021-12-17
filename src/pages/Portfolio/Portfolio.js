import {useState, useEffect} from 'react'

import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './portfolio.styles.css'
import Axios from 'axios'

const Portfolio = () => {
  const [repositories, setRepositories] = useState([])

  useEffect(()=>{

    const getData= async()=>{
      const response = await Axios.get('https://my-json-server.typicode.com/claudya30/direitosja/Direitos')
      const data = await response.data

      setRepositories(data)
      
    }
    getData()
  
  },[])
  

  



  return(
    <>
      <Menu />
      <Header >Não sabe dos seus direitos? Corre aqui que te CONTO ;)
      <div className="main">
      <div className="card-container" >
            {repositories.map(repo=>{
              return(
              <div className="card">
                <h3 key={repo.id}>{repo.Nome}</h3>
                <p className="dados">{repo.Tipo}</p>
                <p className="dados">{repo.Beneficios}</p>
                <p className="dados">{repo.Valor}</p>
                <p className="dados">{repo.Carencia}</p>
                <p className="dados">{repo.Exigencia}</p>
                <a href={repo.html_url} target="_blank" rel="noreferrer" className ="enter-repo">
                  
                </a>

              </div>
            )})}
          </div>
      </div>
      </Header>
      
      <Footer />
    </>
  )
}

export default Portfolio 