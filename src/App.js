import React from 'react';

import {Header} from './layout/Header.jsx';
import {Footer} from './layout/Footer.jsx';
import {Main} from './layout/Main.jsx'



class App extends React.Component {
  

  

  render() {
  return (
    <div >
      <Header />
        <Main />
      <Footer />
    </div>
  );
}
};
export default App;
