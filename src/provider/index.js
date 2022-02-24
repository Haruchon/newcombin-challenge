import React, { useState } from "react";

import { MyChallengeContext, initialContext } from "./context";

const joinWithoutDupes = (A, B) => {
  let ssnList = new Set(A.map((i) => i.ssn));
  return [...A, ...B.filter((i) => !ssnList.has(i.ssn))];
};

export const MyChallengeProvider = ({ children }) => {
  const [data, setData] = useState(initialContext);

  const updateDataList = (newVal) => {
    setData({ ...data, dataList: [...data.dataList, newVal] });
  };

  const updateDataListMultiple = (newVals) => {
    setData({ ...data, dataList: joinWithoutDupes(data.dataList, newVals) });
  };

  const updateToken = (newVal) => {
    setData({ ...data, token: newVal });
  };

  return (
    <MyChallengeContext.Provider
      value={{
        ...data,
        updateDataList,
        updateToken,
        updateDataListMultiple,
      }}
    >
      {children}
    </MyChallengeContext.Provider>
  );
};

export const useMyChallengeContext = () => React.useContext(MyChallengeContext);
