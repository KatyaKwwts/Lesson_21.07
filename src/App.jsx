import { useState } from 'react'

import './App.css'
import Header from './components/header/time'
import InfoComp from './components/infoComp/InfoComp'
import InfoComp_second from './components/infoComp_second/infoComp_second'
import { ways, differences } from "./data"
import ButtonClicked from './components/ButtonClicked/ButtonClicked'




function App() {
  
  
  const [name, setName] = useState('easy');

  function handleClickMain(type) {
    console.log("Clicked Main " + type);
    setName(type);
  }


  return (
    <>
      <div>
        <Header></Header>


        <InfoComp title='111' description='222'/>
        <InfoComp_second title='333' description='444' age='15'/>

        {/*<InfoComp title={ways[0].title} description={ways[0].description} />*/}
        <InfoComp {...ways[1]}/>
        

        <ButtonClicked buttonClicked={() =>handleClickMain('way')} >Button Clicked</ButtonClicked>
        <p>
          {differences[name]}
        </p>

        


      </div>
    </>
  )
}

export default App
