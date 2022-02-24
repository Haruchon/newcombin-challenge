import React from "react";

export const initialContext = {
  dataList: [],
  token: null,
  updateDataList: (values) => {},
  updateDataListMultiple: (values) => {},
  updateToken: (value) => {},
};

export const MyChallengeContext = React.createContext(initialContext);
