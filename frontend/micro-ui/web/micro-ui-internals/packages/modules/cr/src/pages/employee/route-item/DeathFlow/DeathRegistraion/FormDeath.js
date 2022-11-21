import React, { useState } from "react";
import InfoDecease from "./InfoDecease";
import StatisticalInfo from "./StatisticalInfo";
import FamilyDetails from "./FamilyDetails";
import DeathInstitution from "./DeathInstitution";

function FormDeath() {
  const [page, setPage] = useState(0);
  const PageDisplay = () => {
    if (page === 0) {
      return <InfoDecease />;
    } else if (page === 1) {
      return <FamilyDetails />;
    } else {
      return <DeathInstitution />;
    }
  };
  return (
    <div>
      <div><StatisticalInfo /></div>
      <button
        disabled={page == 0}
        onclick={() => {
          setPage((currPage) => currPage - 1);
        }}
      > prev</button>
    </div>
  );
}

export default FormDeath;
