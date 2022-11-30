import { Dropdown, TextInput } from "@egovernments/digit-ui-react-components";
import React from "react";

const StatisticalData = [
  {
    id: 1,
    label: "Spouse Name Eng",
  },
  {
    id: 1,
    label: "Spouse Name Mal",
  },
  {
    id: 1,
    label: "Spouse Aadhaar No",
  },
  {
    id: 1,
    label: "Mother Name Eng",
  },
  {
    id: 1,
    label: "Mother Name Mal",
  },
  {
    id: 6,
    label: "Mother Aadhaar No",
  },
  {
    id: 7,
    label: "Father Name Eng",
  },
  {
    id: 9,
    label: "Father Name Mal",
  },
  {
    id: 8,
    label: "Father Aadhaar No",
  },
  {
    id: 8,
    label: "Spouse Name Eng",
  },
  {
    id: 8,
    label: "Spouse Name Mal",
  },
  {
    id: 8,
    label: "Aadhaar No",
  },
  {
    id: 8,
    label: "Contact No",
  },
  {
    id: 1,
    label: "Email id",
  },
];
function FamilyDetails() {
  return (
    <div>
      <div className="tittle">Family Details </div>
      <div className="maindeath">
        <div className="maindiv">
          {StatisticalData?.map((item, index) => (
            <div className="inner">
              <label htmlFor="">{item.label}</label>
              {item.id === 111 ? <Dropdown /> : <TextInput />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FamilyDetails;
