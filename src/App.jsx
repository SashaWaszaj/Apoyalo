import {Component} from 'react';
import PersonCard from './Componentes/PersonCard'; 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render = () => {
    return(
    <>
     <PersonCard nombre={"Doe, Jane"}
                 edad={45}
                 colorPelo={"negro"}/>
     <PersonCard nombre={"Smith, John"}
                 edad={88}
                 colorPelo={"Castano"}/>
     <PersonCard nombre={"Fillmore, Millard"}
                 edad={50}
                 colorPelo={"Castano"}/>
     <PersonCard nombre={"Smith, Maria"}
                 edad={62}
                 colorPelo={"Castano"}/>
    </>
    );
  }
}

export default App
