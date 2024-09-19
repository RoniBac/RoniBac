
import logo from './logo.svg';
import './App.css';
import './sytles/Nav.css'
import './sytles/AS.css'
import './sytles/Frame.css'
import './sytles/PT.css'
import './sytles/RC.css'
import './sytles/CR.css'
import  Nav  from './components/GenNav/Nav'
import ASI from './components/AS'
import Frame from './components/Frame'


function App() {
  return (
    <div>
      <header>
        <div className='NAV'>
          <Nav/>
        </div>
      </header>

      <div className='ASIDE'>
        <div className='AS'>
          <ASI/>
        </div>
      </div>

      <div className='Frame'>
        <div className='Fr'>
                <Frame naFrame = "ABOUTME" NaSection ="AC" ArFrame = "ACT" Tex1 ="Acerca " Tex2 ="De Mi" NoSection ={1} />
        </div>
      </div>
      <div className='Frame'>
        <div className='Fr'>
          <Frame naFrame = "PORTAFOLIO" NaSection ="PC" ArFrame = "PCT" Tex1 ="Mis" Tex2 ="Proyectos" NoSection ={2}/>
        </div>
      </div>
      <div className='Frame'>
        <div className='Fr'>
          <Frame naFrame = "RESUMEN" NaSection ="RC" ArFrame = "RCT" Tex1 ="Mi" Tex2 ="Resumen" NoSection ={3}/>
        </div>
      </div>
      <div className='Frame'>
        <div className='Fr'>
          <Frame naFrame = "RESUMEN" NaSection ="CC" ArFrame = "CCT" Tex1 ="Mis" Tex2 ="Contactos" NoSection ={4}/>
        </div>
      </div>
    </div>
    

    

  );
}

export default App;
