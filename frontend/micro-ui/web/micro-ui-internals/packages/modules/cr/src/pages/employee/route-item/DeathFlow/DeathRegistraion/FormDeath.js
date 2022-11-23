import React, { Suspense, useState } from "react";
import { SubmitBar } from "@egovernments/digit-ui-react-components";
import InfoDecease from "./InfoDecease";
import StatisticalInfo from "./StatisticalInfo";
import FamilyDetails from "./FamilyDetails";
import DeathInstitution from "./DeathInstitution";

function FormDeath() {
  const [page, setPage] = useState(1);
  const [formDatas, setFormData] = useState({
    input: "",
    dropdown: "",
  });

  return (
    <div>
      {page == 1 ? (
        <InfoDecease formDatas={formDatas} setFormData={setFormData} />
      ) : page == 2 ? (
        <StatisticalInfo />
      ) : page == 3 ? (
        <FamilyDetails />
      ) : (
        <DeathInstitution />
      )}
      <div className="buttonflex">
        <button className="switch">
          <button
            className="next-button"
            disabled={page == 1}
            onClick={() => {
              const nextPage = page - 1;
              setPage(nextPage);
            }}
          >
            prev
          </button>
          <button
            className="next-button"
            disabled={page == 4}
            onClick={() => {
              const nextPage = page + 1;
              setPage(nextPage);
            }}
          >
            {" "}
            Next
          </button>
        </button>

        <div className="submit-death">{page == 4 && <SubmitBar label={"Submit"} />}</div>
      </div>
    </div>
  );
}

export default FormDeath;
