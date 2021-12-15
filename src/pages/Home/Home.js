import Menu from '../../components/Menu/Menu'
import ImageHome from '../../assets/maravilhosa.jpeg'
import Header from '../../components/Header/Header'
import './home.styles.css'

import Footer from '../../components/Footer/Footer'


const Home=()=>{
    return(
        <>
            <Menu/>
            <Header >
                <img src="{ImageHome}" alt=""/>
              
            <div class="banner">
                <h1 class="banner__titulo">Desanquilose-se</h1>
                <p class="banner__subtitulo">Nao deixe que o prencoceito te limite</p>
            </div>
            
            </Header>
            
                
            
           
             
           
            
            <footer/>
        </>
    )

}

export default Home