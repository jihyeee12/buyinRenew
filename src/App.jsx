import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/page/main/main';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Search from './components/page/search/search';
import Lodgement from './components/page/lodgement/lodgement';
import Rooms from './components/page/rooms/rooms';
import Roomoption from './components/page/roomoption/roomoption';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path ='/' element={<Main />}/>
            <Route path ='/search' element={<Search />}/>
            <Route path ='/lodgement' element={<Lodgement />}/>
            <Route path ='/rooms' element={<Rooms />}/>
            <Route path ='/roomoption' element={<Roomoption/>}/>
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
