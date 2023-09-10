import {httpPost } from "../../axios/axiosUtils";
import useProgressState from "../useProgressState";
import {
  SignUpProps,
} from "../../pages/signUp/utils";
import { errorAlert, successAlert } from "../../utils/HelperMixins";
import {
  SignUpResponse,
} from "../../pages/signUp/utils";
const useAuth = () => {
  const { setFailure, setLoading, setSuccess, success, failure, loading } =
    useProgressState();
  const signUp = async (data: SignUpProps) => {
    try {
      setLoading();
      const response: SignUpResponse = await httpPost("/user/register", data);
      successAlert(response.message + ", We will be in touch real soon");
      setSuccess();
      return true;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setFailure();
      errorAlert(error.response.data.message);
      return false;
    }
  };
  return {
    success,
    failure,
    loading,
    signUp,
  };
};

export default useAuth;
