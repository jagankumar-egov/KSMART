// import { Dropdown, NewRadioButton } from "@egovernments/digit-ui-react-components";
import { DatePicker, InputCard, NewRadioButton, TextInput, SubmitBar } from "@egovernments/digit-ui-react-components";
import React from "react";
import styled from "styled-components";
// import InfoDecease from "../../../../../pageComponents/InfoDecease";
import FormDeath from "./FormDeath";

export const DeathRegistration = () => {
  return (
    <ReactFragment>
      <Wrapper>
        <Tittle>New Registration</Tittle>
        <SelectDate>
          <Exact>
            <NewRadioButton />
            <Para>Exact date of death not available</Para>
          </Exact>
          <Exact>
            <NewRadioButton />
            <Para>Unclaimed dead body</Para>
          </Exact>
        </SelectDate>
        <Date>
          <DateLeft>
            <DivLabel>
              <Label>From Date</Label>
              <DatePicker />
            </DivLabel>
            {/* <HourSelect>
              <TextInput />
              <TextInput />
              <TextInput />
            </HourSelect> */}
          </DateLeft>
          <DateLeft>
            <DivLabel>
              <Label>To Date</Label>
              <DatePicker />
            </DivLabel>
          </DateLeft>
        </Date>
      </Wrapper>
      <Wrapper>
        <FormDeath />
      </Wrapper>
    </ReactFragment>
  );
};
const ReactFragment = styled.div``;

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
const SelectDate = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 25px;
`;
const Exact = styled.div`
  display: flex;
  align-items: center;
`;

const Para = styled.p`
  margin-left: 8px;
`;
const Date = styled.div`
  display: flex;
  @media (max-width: 1281px) {
    flex-direction: column;
    align-items: center;
  }
`;
const DateLeft = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-around;
  width: 25%;
  margin-left: 20px;
  @media (max-width: 1281px) {
    width: 70%;
  }
`;
const Label = styled.div``;
const HourSelect = styled.div`
  display: flex;
  width: 17%;
`;
const DivLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
