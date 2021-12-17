import Menu from '../../components/Menu/Menu'
import './contato.styles.css'
import {TiSocialGithub,TiSocialLinkedin,TiSocialFacebook} from 'react-icons/ti'
import {AiFillYahoo} from 'react-icons/ai'
import ImageContato from '../../assets/maravilhosa.jpeg'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const Contato = () => {
  return(
    <>
      <Menu />
      <Header >Compartilhe!Juntas somos mais
      
      
      <div className="redes-sociais"><img src={ImageContato}  alt='Foto da maravilhosa'/>
        <p className="Siga">Siga-me nas redes sociais:</p>
        <p>contato@claudya30</p>
        <div  className='icons'>
          <a href="https://github.com/claudya30" target='_blank' rel="noreferrer">
            <TiSocialGithub size={90} color="rgb(56,56,56)"/>
          </a>
          <a href="https://www.linkedin.com/in/ana-claudia-gaspar-0b4927181/" target='_blank' rel="noreferrer">
            <TiSocialLinkedin size={90} color="rgb(56,56,56)"/>
          </a>

          <a href="https://www.claudyaagro@yahoo.com.br/" target='_blank' rel="noreferrer">
            <AiFillYahoo size={90} color="rgb(56,56,56)"/>
          </a>

          <a href="hhttps://www.facebook.com/anaclaudia.gaspar.12/" target='_blank' rel="noreferrer">
            <TiSocialFacebook size={90} color="rgb(56,56,56)"/>
          </a>

          
          
          </div>

        
    
      </div>
      
      
      </Header>
      <Footer/>
     
    </>
  )
}

export default Contato