import { useEffect, useState } from 'react';
import Header from './pages/header/Header';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import Portfolio from './pages/porfolio/Portfolio';
import Footer from './pages/footer/Footer';
import './App.scss';
import '../src/scss/default.scss'



const App = () => {

  const [storedData, setstoredData] = useState<any>({});

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setstoredData(data);
      })
  }, [])

  return (
    <div className="App">
      <Header data={storedData.header} />
      <About data={storedData.about} />
      <Resume data={storedData.resume}/>
      <Portfolio data={storedData.portfolio}/>
      <Footer data={storedData.footer} />
    </div>
  );
}

export default App;
