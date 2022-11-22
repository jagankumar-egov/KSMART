import { Dropdown, TextInput } from '@egovernments/digit-ui-react-components'
import React from 'react'

const StatisticalData = [
  {
    id: 111,
    label: "Type of medical attention received before death",
  },
  {
    id: 111,
    label: "Was the cause of death medically certified ?",
  },
  {
    id: 111,
    label: "Name of Illness / Actual cause of death (Main part)",
  },
  {
    id: 111,
    label: "Name of Illness / Actual cause of death (Sub part)",
  },
  {
    id: 1,
    label: "Name of Illness / Actual cause of death (Other) (Malayalam)",
  },
  {
    id: 6,
    label: "In case this is a female death, did the death occur While",
  },
  {
    id: 7,
    label: "If used to habitually smoke for how many Years ? YES/NO",
  },
  {
    id: 9,
    label: "years",
  },
  {
    id: 8,
    label: "If used to habitually chew tobacco in any form for how many years ? YES/NO",
  },
  {
    id: 8,
    label: "years",
  },
  {
    id: 8,
    label: "If used to habitually chew arecanut in any form (including pan masala)-for how many years ? YES/NO",
  },
  {
    id: 8,
    label: "years",
  },
  {
    id: 8,
    label: "If used to habitually drink alcohol for how many years ? YES/NO",
  },
  {
    id: 1,
    label: "ICD Code",
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
        {StatisticalData?.map((item, index) => (
          <div className="inner">
            <label htmlFor="">{item.label}</label>
            {item.id === 111 ? (
            <Dropdown />
            ) : (
              <TextInput />
              )}
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatisticalInfo