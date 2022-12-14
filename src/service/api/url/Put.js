import ApiAxios from "../ApiContoller";

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    putMyInfo(){
        
        return ApiAxios({
            url: 'basic-myinfo',
            method: 'put',
            data: {
                user: 'AppIDEtest',
                name: 'test',
                tel: '01066661111',
                email: 'test@naver.com',
            },
        })
    }
}