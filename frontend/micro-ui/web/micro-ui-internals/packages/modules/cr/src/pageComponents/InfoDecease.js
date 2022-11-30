import { Dropdown, InputCard, SubmitBar, TextInput } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import styled from "styled-components";

export default function InfoDecease({ t, config, onSelect, userType, formDatas, setFormData }) {
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
  const [setPlaceofActivity, setSelectedPlaceofActivity] = useState();
  const isEdit = window.location.href.includes("/edit-application/") || window.location.href.includes("renew-trade");
  let cmbPlace = [];

  function goNext() {
   
    sessionStorage.setItem("PlaceOfActivity", setPlaceofActivity.code);
    onSelect(config.key, { setPlaceofActivity });
    sessionStorage.setItem("StructureType", StructureType.name);
    onSelect(config.key, { StructureType });
    // onSelect(config.key, { routeElement });
    
  }
  function selectPlaceofactivity(value) {
    setIsInitialRender(true);
    naturetypecmbvalue=value.code.substring(0, 4);
    setSelectedPlaceofActivity(value);
    setStructureType(null);
    setActivity(null);
  }
  return (
    <React.Fragment>
       <Tittle>Information Of Deceased</Tittle>
      <MainDiv>
        <Div>
          {formData?.map((item, index) => (
            <InnerDiv>
              <Label>{item.label}</Label>
              {item.id === 111 ? (
                <Dropdown
                value={formDatas.dropdown}
                  t={t}
                  optionKey="code"
                  // isMandatory={config.isMandatory}
                  // option={cmbPlace}
                  // selected={setPlaceofActivity}
                  // select={selectPlaceofactivity}
                  disabled={isEdit}
                />
              ) : (
                <TextInput 
                value={formDatas.input}
                onChange={(event) => setFormData({...formDatas, input: event.target.value})}
                />
              )}
            </InnerDiv>
          ))}
        </Div>
      </MainDiv>
    </React.Fragment>
 
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-clip: initial;
  border-radius: 1rem !important;
  background-color: #fff;
  margin-bottom: 1.25rem;
  padding: 1.5rem;
`;
const Tittle = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const MainDiv = styled.div`
  padding: 10px 50px 10px 50px;
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 1281px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;
const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const Label = styled.div`
  margin-bottom: 8px;
`;
