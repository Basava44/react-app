import './App.css';
import BalanceCards from './components/BalanceCard/BalanceCards';
import Header from './components/Header/Header';
import Path from './components/Path/Path';
import PageHeading from './components/PageHeading/PageHeading';
import Pageinfo from './components/PageInfo/Pageinfo';
import Footer from './components/Footer/Footer';
import Buttons from './components/Buttons/Buttons';



function App() {
  return (
    <div className="App">
      <Header />
      <Path path="Home > Account Overview" />
      <PageHeading data ="Account Overview" />
      <Pageinfo />
      <BalanceCards />
      <Buttons />
      <Footer />
    </div>
  );
}

export default App;
