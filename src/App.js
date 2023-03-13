import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import {Container} from './combonents/index'
import {Header, Hero, MostPopuler, GamingLibrary, Footer} from './sections/index'

import HSC from './combonents/APIs/APIs';
const App = () =>{
    return(
        <>
            <Header />
            <Container> 
                <Hero /> 
                <MostPopuler />
                <GamingLibrary />
                <HSC />
            </Container>
            *<Footer />
        </>
    )
}

export default App