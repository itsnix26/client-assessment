import React, { useEffect, useState } from "react";
import axios from "axios";

const DataList = () => {
  const [dataList, setDataList] = useState();

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f")
      .then((response) => {
        console.log(response?.data?.result?.auditLog);
      });
  }, []);

  return <div>DataList</div>;
};

export default DataList;
