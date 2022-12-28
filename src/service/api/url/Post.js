import ApiAxios from "../ApiContoller";

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    reservationCancel(id, cancelReason){
        return ApiAxios({
            url: `/v2/cancelations`,
            method: 'post',
            data:{
                reservation_id: id, 
                cancel_reason: cancelReason
            }
        })
    },

    reviewWrite(formData){
        return ApiAxios({
            url: `/reviews`,
            method: 'post',
            headers:{
                "Content-Type": "multipart/form-data",
            },
            data:{
                formData,
            }
        })
    },

    selectWish(lodgement, user_id){
        return ApiAxios({
            url: `/wishlists?lodgement=${lodgement}`,
            method: 'post',
            data:{
                user: user_id, 
                lodgement: lodgement,
            }
        })
    },

    likeReview(id, user_id){
        return ApiAxios({
            url: `/like`,
            method: 'post',
            data:{
                user: user_id, 
                review: id,
            }
        })
    },



}