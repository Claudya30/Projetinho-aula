import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'


import './sobre.styles.css'
import Footer from '../../components/Footer/Footer'

const Sobre=()=>{
    return(
        <>
            <Menu/>

            <Header>
            <main>
            <section className="card-introducao" >
                <h2 className="card-introducao__titulo">Mas afinal, o que é Anquilose da atm? </h2>
                <div className="container-texto">
                    <div className="container-texto__paragrafo">
                        <p>A anquilose da articulação têmporo-mandibular é uma doença rara, resultante da fusão do côndilo(eminência arredondada na extremidade do osso) mandibular
                         com a base do crânio .</p>
                    </div>
                </div>   
            </section>

            <section className="card-conseq">
            <h2 className="card-conseq__titulo">Limitações:</h2>
            <div className="container-listas" >
                <div className="listas">
                    
                    <ul class="lista__item">
                       <li>Limitação parcial ou total dos movimentos mandibulares</li>
                       <li>Dificuldade de mastigação</li>
                       <li>Fonação</li>
                       <li>Dores constantes e fortes</li>
                       <li>Assimetria facial</li>

                    </ul>
                </div>
            </div>
             
            </section>

            </main>
            </Header> 

            <Footer/>
            
        </>    
    )

}
  
                
           
            

export default Sobre