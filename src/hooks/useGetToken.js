import { useMyChallengeContext } from "../provider";
import { MyService } from "../services/service";

export const useGetToken = () => {
  const { updateToken } = useMyChallengeContext();

  const getToken = async () => {
    try {
      const data = await MyService.getToken();
      updateToken(data);
    } catch (e) {
      alert(e.message);
    }
  };

  return { getToken };
};
