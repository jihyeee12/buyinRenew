import ApiAxios from "../ApiContoller";

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    deleteReview(reviewId){
        return ApiAxios({
            url: `reviews/review=${reviewId}`,
            method: 'delete'
        })
    },
}