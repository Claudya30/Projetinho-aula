 

import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './direitos.styles.css'

const Direitos = () => {

  return(
    <>
      <Menu />
      <Header >
      <section className="card-direitos">
            <h2 className="card-direitos__titulo">Não sabe dos seus direitos? Corre aqui que te CONTO ;)</h2>
            <div className="container-lista" >
            <div class="lista">
                    <h3>Tratamento Fora de Domicilio ESTADUAL:</h3>
                    <ul class="lista__item">
                        <li>Base legal:"Portaria Nº 55</li>
                        <li>Beneficios:Passagensa areas e ajuda de custo para paciente e acompanhante</li>
                        <li>Valor:De acordo com as passagens areas  </li>
                        <li>Exigencia:Documentos comprobatorios da consulta </li>
                        <li>Carencia:A cada 30 dias  </li>
                        <li>Exigencia:Documentos comprobatorios da consulta</li>
                        
                    </ul>
                </div>
                <div class="lista">
                    <h3>Tratamento Fora de Domicilio MUNICIPAL:</h3>
                    <ul class="lista__item">
                        <li>Base legal:Portaria Nº 55</li>
                        <li>Beneficios:Passagens,deslocamento,
                          alimentacao, enxames,remedios para paciente e acompanhante </li>
                          
                        <li>Valor:Um salario minimo  </li>
                        <li>Exigencia:Documentos comprobatorios da consulta </li>
                        <li>Carencia:A cada consulta  </li>
                        <li>Exigencia:Documentos comprobatorios da consulta e devolucao do dinheiro nao usado</li>
                    </ul>
                </div>

            </div>
      </section>
          
      </Header>
      
      <Footer />
    </>
  )
}

export default Direitos 