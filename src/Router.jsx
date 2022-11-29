import React from 'react';
import { BrowserRouter, createBrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/page/main/main';
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
import GiftcardDetail from './components/page/seemore/giftcard/giftcardDetail/giftcardDetail';
import Event from './components/page/seemore/event/event';
import Faq from './components/page/seemore/faq/faq';
import Terms from './components/page/seemore/terms/terms';
import Login from './components/page/loginPage/login/login';
import Certified from './components/page/loginPage/certified/certified';
import Join from './components/page/loginPage/join/join';
import FindId from './components/page/loginPage/findId/findId';
import FindPw from './components/page/loginPage/findPw/findPw';
import UserGrade from './components/page/seemore/userGrade/userGrade';
import ReservationCancel from './components/page/mypage/reservationDetail/reservationCancel/reservationCancel';
import PopularHotel from './components/page/popularHotel/popularHotel';
import RecommandDorm from './components/page/recommandDorm/recommandDorm';
import App from './App';
import NotFound from './components/page/notFound/notFound';

function Router() {
    return (
        <BrowserRouter>
        <Header />
        <main>    
            <Routes>
              <Route path ='/' element={<Main />}/>
              <Route path ='/login' element={<Login />}/>
              <Route path ='/search' element={<Search />}/>
              <Route path ='/lodgement/:lodgement' element={<Lodgement />}/>
              <Route path ='/rooms' element={<Rooms />}/>
              <Route path ='/popularHotel' element={<PopularHotel />}/>
              <Route path ='/recommandDorm' element={<RecommandDorm/>}/>
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
              <Route path ='/giftcardDetail/:giftcard_id' element={<GiftcardDetail/>}/>
              <Route path ='/event' element={<Event/>}/>
              <Route path ='/faq' element={<Faq/>}/>
              <Route path ='/terms' element={<Terms/>}/>
              <Route path ='/certified' element={<Certified/>}/>
              <Route path ='/join' element={<Join/>}/>
              <Route path ='/findId' element={<FindId/>}/>
              <Route path ='/findPW' element={<FindPw/>}/>
              <Route path ='/grade' element={<UserGrade/>}/>
              <Route path ='/reservationCancel' element={<ReservationCancel/>}/>
              
              
            </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    );
}

// const router = createBrowserRouter([
//     {
//         path:"/", //url 그 자체
//         element: <App/>,
//         children : [
//             {
//                 path:"",
//                 element: <Main/>,
//             },
//             {
//                 path: "login", 
//                 element: <Login/>
//             },
//             {
//                 path: "search", 
//                 element: <Search/>
//             },
//             {
//                 path: "lodgement/:lodgement", 
//                 element: <Lodgement/>
//             },
//             {
//                 path: "rooms", 
//                 element: <Rooms/>
//             },
//             {
//                 path: "popularHotel", 
//                 element: <PopularHotel/>
//             },
//             {
//                 path: "recommandDorm", 
//                 element: <RecommandDorm/>
//             },
//             {
//                 path: "roomoption", 
//                 element: <Roomoption/>
//             },
//             {
//                 path: "payment", 
//                 element: <Payment/>
//             },
//             {
//                 path: "payResult", 
//                 element: <Payresult/>
//             },
//             {
//                 path: "gift", 
//                 element: <Gift/>
//             },
//             {
//                 path: "giftResult", 
//                 element: <Giftresult/>
//             },
//             {
//                 path: "wish", 
//                 element: <Wishlist/>
//             },
//             {
//                 path: "basket", 
//                 element: <Basket/>
//             },
//             {
//                 path: "notice", 
//                 element: <Notice/>
//             },
//             {
//                 path: "info", 
//                 element: <Info/>
//             },
//             {
//                 path: "infoChange", 
//                 element: <Infochange/>
//             },
//             {
//                 path: "userDelete", 
//                 element: <UserDelete/>
//             },
//             {
//                 path: "reservationList", 
//                 element: <ReservationList/>
//             },
//             {
//                 path: "reservationDetail", 
//                 element: <ReservationDetail/>
//             },
//             {
//                 path: "point", 
//                 element: <Point/>
//             },
//             {
//                 path: "review", 
//                 element: <Review/>
//             },
//             {
//                 path: "writeReview", 
//                 element: <WriteReview/>
//             },
//             {
//                 path: "recent", 
//                 element: <RecentSearch/>
//             },
//             {
//                 path: "giftBox", 
//                 element: <GiftBox/>
//             },
//             {
//                 path: "giftDetail", 
//                 element: <GiftDetail/>
//             },
//             {
//                 path: "notice", 
//                 element: <Notice/>
//             },
//             {
//                 path: "giftcard", 
//                 element: <Giftcard/>
//             },
//             {
//                 path: "giftcardDetail/:giftcard_id", 
//                 element: <GiftcardDetail/>
//             },
//             {
//                 path: "event", 
//                 element: <Event/>
//             },
//             {
//                 path: "faq", 
//                 element: <Faq/>
//             },
//             {
//                 path: "terms", 
//                 element: <Terms/>
//             },
//             {
//                 path: "certified", 
//                 element: <Certified/>
//             },
//             {
//                 path: "join", 
//                 element: <Join/>
//             },
//             {
//                 path: "findId", 
//                 element: <FindId/>
//             },
//             {
//                 path: "findPW", 
//                 element: <FindPw/>
//             },
//             {
//                 path: "grade", 
//                 element: <UserGrade/>
//             },
//             {
//                 path: "reservationCancel", 
//                 element: <ReservationCancel/>
//             },
//         ],
//         errorElement: <NotFound/>
//     },
// ])

export default Router;