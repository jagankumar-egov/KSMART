import React, { Suspense, useState } from "react";
import { SubmitBar } from "@egovernments/digit-ui-react-components";
// import InfoDecease from "../../../../../pageComponents/InfoDecease";
import StatisticalInfo from "../../../../../pageComponents/AdressOfDeceased";
import FamilyDetails from "../../../../../pageComponents/FamilyDetails";
import DeathInstitution from "../../../../../pageComponents/DeathInstitution";
import InformationDeath from "../../../../../pageComponents/InformationDeath"
import AdressOfDeceased from "../../../../../pageComponents/AdressOfDeceased";

function FormDeath() {
  const [page, setPage] = useState(1);
  const [formDatas, setFormData] = useState({
    input: "",
    dropdown: "",
  });

  return (
    <React.Fragment>
      <div>
        {page == 1 ? (
          <InformationDeath formDatas={formDatas} setFormData={setFormData} />
        ) : page == 2 ? (
          <AdressOfDeceased />
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
    </React.Fragment>
  );
}

export default FormDeath;
