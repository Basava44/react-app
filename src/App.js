import './App.css';
import BalanceCards from './components/BalanceCard/BalanceCards';
import Header from './components/Header/Header';
import Path from './components/Path/Path';
import PageHeading from './components/PageHeading/PageHeading';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Path path="Home > Account Overview" />
      <PageHeading data ="Account Overview" />
      <BalanceCards />
      <Footer />
    </div>
  );
}

export default App;
