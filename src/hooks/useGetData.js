import { useMyChallengeContext } from "../provider";
import { MyService } from "../services/service";

export const useGetData = () => {
  const { updateDataListMultiple, token } = useMyChallengeContext();

  const getData = async () => {
    if (token)
      try {
        const data = await MyService.getData(token);
        updateDataListMultiple(data);
      } catch (e) {
        alert(e.message);
      }
    else alert("Token loaded incorrectly");
  };

  return { getData };
};
