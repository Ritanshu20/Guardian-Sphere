import * as AuthApi from '../api/AuthRequests';

export const loginstudent = (userDetails, navigate) => async (dispatch) => {

    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.loginstudent(userDetails);
        dispatch({ type: "AUTH_SUCCESS", data: data });
        navigate("../resource", { replace: true });
    } catch (error) {
        console.log(error)
        dispatch({ type: "AUTH_FAIL" })
    }
}