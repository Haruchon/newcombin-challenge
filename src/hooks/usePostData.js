import { useMyChallengeContext } from "../provider";
import { MyService } from "../services/service";

export const usePostData = () => {
  const { updateDataList, token } = useMyChallengeContext();

  const postData = async (data) => {
    let success = false;
    if (token)
      try {
        success = await MyService.postData(data, token);
        updateDataList(data);
        return success;
      } catch (e) {
        alert(e.response.data.message);
        return success;
      }
    else alert("Token loaded incorrectly");
    return success;
  };

  return { postData };
};
