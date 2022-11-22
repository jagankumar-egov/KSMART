import React, { Suspense, useState } from "react";
import { SubmitBar } from "@egovernments/digit-ui-react-components";

const InfoDecease = React.lazy(() => import("./InfoDecease"));
const StatisticalInfo = React.lazy(() => import("./StatisticalInfo"));
const FamilyDetails = React.lazy(() => import("./FamilyDetails"));
const DeathInstitution = React.lazy(() => import("./DeathInstitution"));

function FormDeath() {
  const [page, setPage] = useState(1);
  const [formDatas, setFormData] = useState({
    input: "",
    dropdown: "",
  });

  return (
    <div>
      {page == 1 ? (
        <Suspense fallback={<div>Loading</div>}>
          <InfoDecease formDatas={formDatas} setFormData={setFormData} />
        </Suspense>
      ) : page == 2 ? (
        <Suspense fallback={<div>Loading</div>}>
          <StatisticalInfo />
        </Suspense>
      ) : page == 3 ? (
        <Suspense fallback={<div>Loading</div>}>
          <FamilyDetails />
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading</div>}>
          <DeathInstitution />
        </Suspense>
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
