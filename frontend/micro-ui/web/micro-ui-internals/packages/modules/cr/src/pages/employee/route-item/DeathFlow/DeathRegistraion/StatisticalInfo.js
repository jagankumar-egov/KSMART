import { Dropdown, TextInput } from '@egovernments/digit-ui-react-components'
import React from 'react'

const formData = [
  {
    id: 1,
    label: "Name (English)",
  },
  {
    id: 2,
    label: "Name (Malayalam)",
  },
  {
    id: 3,
    label: "Gender",
  },
  {
    id: 4,
    label: "Age",
  },
  {
    id: 111,
    label: "Age unit",
  },
  {
    id: 6,
    label: "Aadhaar No",
  },
  {
    id: 7,
    label: "EID No",
  },
  {
    id: 9,
    label: "First Name (English)",
  },
  {
    id: 8,
    label: "Middle Name (English)",
  },
  {
    id: 8,
    label: "Last Name (English)",
  },
  {
    id: 8,
    label: "First Name (Malayalam)",
  },
  {
    id: 8,
    label: "Middle Name (Malayalam)",
  },
  {
    id: 8,
    label: "Last Name (Malayalam)",
  },
  {
    id: 111,
    label: "Occupation",
  },
  {
    id: 111,
    label: "Religion",
  },
  {
    id: 111,
    label: "Nationality",
  },
];
function StatisticalInfo() {
  return (
    <div>
      <div className="tittle">
        Statistical Information
      </div>
      <div className="maindeath">
        <div className="maindiv">
        {formData?.map((item, index) => (
          <div className="inner">
            <label htmlFor="">{item.label}</label>
            {item.id === 111 ? (
            <Dropdown />
            ) : (
              <TextInput />
              )}
          </div>
          ))}s
        </div>
      </div>
    </div>
  )
}

export default StatisticalInfo