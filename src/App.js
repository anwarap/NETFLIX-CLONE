import React from 'react';
import './App.css';
import {action,originals,comedies, documentaries, horrors, romances} from './urls'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <RowPost url={originals} title ='Nerflix Orginals'/>
        <RowPost url={action} title='Action' isSmall/>
        <RowPost url={horrors} title='horrors' isSmall/>
        <RowPost url={comedies} title='comedies' isSmall/>
        <RowPost url={documentaries} title='documentries' isSmall/>
        <RowPost url={romances} title='romance' isSmall/>

    </div>
  );
}

export default App;
