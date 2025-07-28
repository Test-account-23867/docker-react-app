// import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header.jsx';
// import CoreConcept from './components/CoreConcept.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
// import TabButton from './components/TabButton.jsx';
// import TabContent from './components/TabContent.jsx';
// import { useState } from 'react';
import Examples from './components/Examples.jsx';

function App() {

  return (
    <>

      <Header />

      <main>
        <CoreConcepts /> 
        <Examples />
      </main>
    </>
  );
}

export default App;
