import ApiAxios from "../ApiContoller";

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    getMain(){
        return ApiAxios({
            url: `mainpage`,
            method: 'get'
        })
    },

    getBasket(){
        return ApiAxios({
            url: `shopbaskets`,
            method: 'get'
        })
    },
    
    getGiftcard(){
        return ApiAxios({
            url: `giftcards`,
            method: 'get'
        })
    },
    getGiftcardInfo(giftcard_id){
        
        return ApiAxios({
            url: `/giftcard-info?giftcard=${giftcard_id}`,
            method: 'get'
        })
    },
    
    getGiftBasicInfo(giftCardName,giftCardId){
        const giftUrl= () => {
            if(giftCardName === "giftcard"){
                return `/gift-basic-info?giftcard=${giftCardId}&isGiftcard=true`
                //null은 그냥 지우면 됨
            } else if(giftCardName === "room"){
                return `/gift-basic-info?giftcard=${giftCardId}&isGiftcard=true`
            };
        }
        return ApiAxios({
            url: giftUrl(),
            method: 'get'
        })
    },

    getGiftBox(){
        return ApiAxios({
            url:`gifts`,
            method: 'get'
        })
    },

    getGiftDetail(gift_id, gift_type,gift_status){
        const giftDetailUrl = () => {
            if(gift_status === "send"){
                return `/gift-send-detail?gift=${gift_id}&type=${gift_type}`
            } else if(gift_status === "receive"){
                return `/gift-receive-detail?gift=${gift_id}&type=${gift_type}`
            }
        }
        return ApiAxios({
            url: giftDetailUrl(),
            method: 'get'
        })  
    },

    getRefundCharge(locationId){
        return ApiAxios({
            url:`v2/refund-charge?reservation=${locationId}`,
            method: 'get'
        })
    },
    getReservationDetail(type,id){
        const ReservationDetailUrl = () => {
            if(type === "reservation" || type === "reservationCancel"){
                return `/v2/reservation-detail?reservation=${id}`
            } else if(type === "cancel"){
                return `/v2/cancelation-detail?cancelation=${id}`
            }
        }
        return ApiAxios({
            url: ReservationDetailUrl(),
            method: 'get'
        })
    },

    getReservationList(index){
        const listUrl = () => {
            if(index === 0){
                return '/v2/reservations'
            } else if(index === 1){
                return '/v2/cancelations'
            }
        }

        return ApiAxios({
            url: listUrl(),
            method: 'get'
        })
    },

    getReview(index){
        const reviewUrl = () => {
            
            if(index === 0){
                return '/reviews'
            } else if(index === 1){
                return '/reviewables'
            }
        }

        return ApiAxios({
            url: reviewUrl(),
            method: 'get'
        })
    },
    getWriteReview(reservation_id){
        
        return ApiAxios({
            url: `/review-basic-info?reservation=${reservation_id}`,
            method: 'get'
        })
    },

    getRoomInfo(lodgement){
        return ApiAxios({
            url: `/lodgement-detail?lodgement=${lodgement}`,
            method: 'get'
        })
    },
    getmyInfo(){
        return ApiAxios({
            url:`basic-myinfo`,
            method: 'get'
        })
    },

    getPoint(index){
        const pointUrl = () => {
            if(index === 0){
                return `/points`
            } else if(index === 1){
                return `coupons`
            }
        }
    return ApiAxios({
            url: pointUrl(),
            method: 'get'
        })
    },
    
    getRecent(){
        return ApiAxios({
            url:`recents`,
            method: 'get'
        })
    },
    getLodgementInfo(lodgement,checkin,checkout){
        return ApiAxios({
            url:`/lodgement-info?lodgement=${lodgement}&checkin=${checkin}&checkout=${checkout}`,
            method: 'get'
        })
    },
    
    getSearch(checkin,checkout){
        return ApiAxios({
            url:`/lodgements?checkin=${checkin}&checkout=${checkout}`,
            method: 'get'
        })
    },
    getRoomDetails(roomId,checkin,checkout){
        return ApiAxios({
            // https://ekklim.kr/rooms?room=606&checkin=2022.12.24&checkout=2022.12.25
            //url:`/rooms?room=${roomId}&checkin=${checkin}&checkout=${checkout}`,
            url:`/rooms?room=606&checkin=2022.12.24&checkout=2022.12.25`,
            method: 'get'
        })
    },

}
