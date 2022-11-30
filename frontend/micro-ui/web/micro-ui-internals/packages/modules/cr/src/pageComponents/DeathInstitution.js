import { Dropdown, TextInput } from '@egovernments/digit-ui-react-components'
import React from 'react'

const DeathInstitutionData = [
  {
    id: 111,
    label: "Place Of Death",
  },
  {
    id: 111,
    label: "Institution Type",
  },
  {
    id: 111,
    label: "Name Of Institution",
  },
  {
    id: 111,
    label: "Signed Officer",
  },
  {
    id: 1,
    label: "Signed Officer Designation",
  },
  
];
function DeathInstitution() {
  return (
    <div>
      <div className="tittle">
        DeathInstitution
      </div>
      <div className="maindeath">
        <div className="maindiv">
        {DeathInstitutionData?.map((item, index) => (
          <div className="inner">
            <label htmlFor="">{item.label}</label>
            {item.id === 111 ? (
            <Dropdown />
            ) : (
              <TextInput value={{}}/>
              )}
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DeathInstitution