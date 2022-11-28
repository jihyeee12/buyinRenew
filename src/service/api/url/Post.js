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
}