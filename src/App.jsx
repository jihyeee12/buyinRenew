import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/page/main/main';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Search from './components/page/search/search';
import Lodgement from './components/page/lodgement/lodgement';
import Rooms from './components/page/rooms/rooms';
import Roomoption from './components/page/roomoption/roomoption';
import Payment from './components/page/payment/payment';
import Payresult from './components/page/payment/payresult';
import Gift from './components/page/gift/gift';
import Giftresult from './components/page/gift/giftresult';
import Wishlist from './components/page/wishlist/wishlist';
import Basket from './components/page/basket/basket';
import Notice from './components/page/seemore/notice/notice';
import Info from './components/page/mypage/info/info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>    
            <Routes>
              <Route path ='/' element={<Main />}/>
              <Route path ='/search' element={<Search />}/>
              <Route path ='/lodgement' element={<Lodgement />}/>
              <Route path ='/rooms' element={<Rooms />}/>
              <Route path ='/roomoption' element={<Roomoption/>}/>
              <Route path ='/payment' element={<Payment/>}/>
              <Route path ='/payResult' element={<Payresult/>}/>
              <Route path ='/gift' element={<Gift/>}/>
              <Route path ='/giftResult' element={<Giftresult/>}/>
              <Route path ='/wish' element={<Wishlist/>}/>
              <Route path ='/basket' element={<Basket/>}/>
              <Route path ='/notice' element={<Notice/>}/>
              <Route path ='/info' element={<Info/>}/>
            </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
