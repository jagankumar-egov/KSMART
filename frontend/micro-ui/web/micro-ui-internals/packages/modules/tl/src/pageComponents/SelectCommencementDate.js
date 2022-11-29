import React, { useState } from "react";
import { CardLabel, DatePicker, TextInput } from "@egovernments/digit-ui-react-components";
import { FormStep, RadioOrSelect, RadioButtons } from "@egovernments/digit-ui-react-components";
import Timeline from "../components/TLTimeline";

const SelectCommencementDate = ({ t, config, onSelect, userType, formData }) => {
  const [CommencementDate, setCommencementDate] = useState(formData?.TradeDetails?.CommencementDate);
  const [SubDivNo, setSubDivNo] = useState(formData.TradeDetails?.SubDivNo);
  const isEdit = window.location.href.includes("/edit-application/")||window.location.href.includes("renew-trade");
  let validation = {};
  const onSkip = () => onSelect();

  function selectCommencementDate(value) {
    setCommencementDate(value);
  }
  function setSelectSubDivNo(e) {
    setSubDivNo(e.target.value);
  }
  function goNext() {
    onSelect(config.key, { CommencementDate });
  }
  return (
    <React.Fragment>
    {window.location.href.includes("/citizen") ? <Timeline /> : null}
    <FormStep t={t} config={config} onSelect={goNext} onSkip={onSkip} isDisabled={!CommencementDate}>
        <div className="row">    
          <div className="col-md-12" > 
              <h1 className="headingh1" >
                  <span style={{background:"#fff",padding:"0 10px" }}>{`${t("Declaration Details")}*`}</span>
              </h1>
          </div>        
        </div>
        <div className="row">
          <div className="col-md-6" >
            <CardLabel>{t("TL_NEW_TRADE_DETAILS_TRADE_COMM_DATE_LABEL")}</CardLabel>
            <DatePicker date={CommencementDate} name="CommencementDate" onChange={selectCommencementDate} disabled={isEdit} />
          </div>
          <div className="col-md-6" >
            <CardLabel>{`${t("TL_OWNER_AADHAR_NO")}`}</CardLabel>
            <TextInput
                t={t}
                isMandatory={false}
                type={"text"}
                optionKey="i18nKey"
                name="SubDivNo"
                value={SubDivNo}
                onChange={setSelectSubDivNo}
                disable={isEdit}
                {...(validation = { pattern: "^[a-zA-Z-.0-9`' ]*$", isRequired: true, type: "text", title: t("TL_INVALID_SUBDIVISION_NO") })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" >
              <CardLabel>{`${t("The name board showing place will be displayed in English and in the local language")}`}</CardLabel>
          </div> 
        </div>
        <div className="row">
          <div className="col-md-12" >
              <CardLabel>{`${t("Affidavit of compliance with the provisions of The Cigarettes and other Tobacco products (prohibition of Advertisement And Regulation of Trade, commerce, production, supply and distribution) 2003/")}`}</CardLabel>
          </div> 
        </div>
        <div className="row">
          <div className="col-md-12" >
              <CardLabel>{`${t("If information furnished in the application or the document attached is found incorrect, my application can be rejected, or the license can be terminated/")}`}</CardLabel>
          </div> 
        </div>
        <div className="row">
          <div className="col-md-12" >
              <CardLabel>{`${t("Self  Declaration on adhering to Waste Management Rules 2016")}`}</CardLabel>
          </div> 
        </div>
    </FormStep>
    </React.Fragment>
  );
};
export default SelectCommencementDate;
