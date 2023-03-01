import React from "react";
import { Card } from "antd";

import { useSelector } from "react-redux";

// REGION CARD COMPONENT

const RegionInfo = () => {
  // DATA FROM REDUX STORE
  const { currency, speedUnit, distUnit, volumeUnit, flag } = useSelector(
    (state) => {
      return state.region[0];
    }
  );

  return (
    <Card style={{ boxShadow: "2px 2px 10px grey" }}>
      <p>
        flag:
        {flag && (
          <img
            src={flag}
            alt="flag"
            style={{ width: "50px", paddingLeft: "1rem" }}
          />
        )}
      </p>
      <p>
        Currency : <strong>{currency}</strong>
      </p>
      <p>
        Unit of speed : <strong>{speedUnit}</strong>
      </p>
      <p>
        Unit of distance : <strong>{distUnit}</strong>
      </p>
      <p>
        Unit of Volume : <strong>{volumeUnit}</strong>
      </p>
    </Card>
  );
};

export default RegionInfo;
