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
import Infochange from './components/page/mypage/infoChange/infoChange';
import UserDelete from './components/page/mypage/userDelete/userDelete';
import ReservationList from './components/page/mypage/reservationList/reservationList';
import ReservationDetail from './components/page/mypage/reservationDetail/reservationDetail';
import Point from './components/page/mypage/point/point';
import Review from './components/page/mypage/review/review';
import WriteReview from './components/page/writeReview/writeReview';
import RecentSearch from './components/page/mypage/recentSearch/recentSearch';
import GiftBox from './components/page/mypage/giftBox/giftBox';
import GiftDetail from './components/page/mypage/giftBox/giftDetail';
import Giftcard from './components/page/seemore/giftcard/giftcard';

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
              <Route path ='/infoChange' element={<Infochange/>}/>
              <Route path ='/userDelete' element={<UserDelete/>}/>
              <Route path ='/reservationList' element={<ReservationList/>}/>
              <Route path ='/reservationDetail' element={<ReservationDetail/>}/>
              <Route path ='/point' element={<Point/>}/>
              <Route path ='/review' element={<Review/>}/>
              <Route path ='/writeReview' element={<WriteReview/>}/>
              <Route path ='/recent' element={<RecentSearch/>}/>
              <Route path ='/giftBox' element={<GiftBox/>}/>
              <Route path ='/giftDetail' element={<GiftDetail/>}/>
              <Route path ='/notice' element={<Notice/>}/>
              <Route path ='/giftcard' element={<Giftcard/>}/>
            </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
