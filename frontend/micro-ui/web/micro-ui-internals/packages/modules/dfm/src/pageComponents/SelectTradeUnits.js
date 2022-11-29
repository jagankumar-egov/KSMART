import { CardLabel, Dropdown, FormStep, LinkButton, Loader, RadioButtons, RadioOrSelect, TextInput } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Timeline from "../components/TLTimeline";
import { sortDropdownNames } from "../utils/index";

const SelectTradeUnits = ({ t, config, onSelect, userType, formData }) => {
  let validation = {};
  const [TradeCategory, setTradeCategory] = useState("");
  const [TradeType, setTradeType] = useState(formData?.TadeDetails?.Units?.TradeType || "");
  const [TradeSubType, setTradeSubType] = useState(formData?.TadeDetails?.Units?.TradeSubType || "");
  const [UnitOfMeasure, setUnitOfMeasure] = useState(formData?.TadeDetails?.Units?.UnitOfMeasure || "");
  const [UomValue, setUomValue] = useState(formData?.TadeDetails?.Units?.UomValue || "");
  const [fields, setFeilds] = useState(
    (formData?.TradeDetails && formData?.TradeDetails?.units) || [{ tradecategory: "", tradetype: "", tradesubtype: "", unit: null, uom: null }]
  );

  const tenantId = Digit.ULBService.getCurrentTenantId();
  const stateId = Digit.ULBService.getStateId();

  function handleAdd() {
    const values = [...fields];
    values.push({ tradecategory: "", tradetype: "", tradesubtype: "", unit: null, uom: null });
    setFeilds(values);
  }

  function handleRemove(index) {
    const values = [...fields];
    if (values.length != 1) {
      values.splice(index, 1);
      setFeilds(values);
    }
  }

  const { isLoading, data: Data = {} } = Digit.Hooks.tl.useTradeLicenseMDMS(stateId, "TradeLicense", "TradeUnits", "[?(@.type=='TL')]");
  let TradeCategoryMenu = [];
  //let TradeTypeMenu = [];

  Data &&
    Data.TradeLicense &&
    Data.TradeLicense.TradeType.map((ob) => {
      if (!TradeCategoryMenu.some((TradeCategoryMenu) => TradeCategoryMenu.code === `${ob.code.split(".")[0]}`)) {
        TradeCategoryMenu.push({ i18nKey: `TRADELICENSE_TRADETYPE_${ob.code.split(".")[0]}`, code: `${ob.code.split(".")[0]}` });
      }
    });

  function getTradeTypeMenu(TradeCategory) {
    let TradeTypeMenu = [];
    Data &&
      Data.TradeLicense &&
      Data.TradeLicense.TradeType.map((ob) => {
        if (
          ob.code.split(".")[0] === TradeCategory.code &&
          !TradeTypeMenu.some((TradeTypeMenu) => TradeTypeMenu.code === `${ob.code.split(".")[1]}`)
        ) {
          TradeTypeMenu.push({ i18nKey: `TRADELICENSE_TRADETYPE_${ob.code.split(".")[1]}`, code: `${ob.code.split(".")[1]}` });
        }
      });
    return TradeTypeMenu;
  }

  function getTradeSubTypeMenu(TradeType) {
    let TradeSubTypeMenu = [];
    TradeType &&
      Data &&
      Data.TradeLicense &&
      Data.TradeLicense.TradeType.map((ob) => {
        if (ob.code.split(".")[1] === TradeType.code && !TradeSubTypeMenu.some((TradeSubTypeMenu) => TradeSubTypeMenu.code === `${ob.code}`)) {
          TradeSubTypeMenu.push({ i18nKey: `TL_${ob.code}`, code: `${ob.code}` });
        }
      });
    return TradeSubTypeMenu;
  }

  const isUpdateProperty = formData?.isUpdateProperty || false;
  let isEditProperty = formData?.isEditProperty || false;
  const { pathname: url } = useLocation();
  const editScreen = url.includes("/modify-application/");

  function selectTradeCategory(i, value) {
    let units = [...fields];
    units[i].tradecategory = value;
    setTradeCategory(value);
    selectTradeType(i, null);
    selectTradeSubType(i, null);
    setFeilds(units);
  }
  function selectTradeType(i, value) {
    let units = [...fields];
    units[i].tradetype = value;
    setTradeType(value);
    selectTradeSubType(i, null);
    setFeilds(units);
  }
  function selectTradeSubType(i, value) {
    let units = [...fields];
    units[i].tradesubtype = value;
    setTradeSubType(value);
    if (value == null) {
      units[i].unit = null;
      setUnitOfMeasure(null);
    }
    Array.from(document.querySelectorAll("input")).forEach((input) => (input.value = ""));
    value &&
      Data &&
      Data.TradeLicense &&
      Data.TradeLicense.TradeType.map((ob) => {
        if (value.code === ob.code) {
          units[i].unit = ob.uom;
          setUnitOfMeasure(ob.uom);
          // setFeilds(units);
        }
      });
    setFeilds(units);
  }
  function selectUnitOfMeasure(i, e) {
    let units = [...fields];
    units[i].unit = e.target.value;
    setUnitOfMeasure(e.target.value);
    setFeilds(units);
  }
  function selectUomValue(i, e) {
    let units = [...fields];
    units[i].uom = e.target.value;
    setUomValue(e.target.value);
    setFeilds(units);
  }

  const goNext = () => {
    let units = formData.TradeDetails.Units;
    let unitsdata;

    unitsdata = { ...units, units: fields };
    onSelect(config.key, unitsdata);
  };

  const onSkip = () => onSelect();
  return (
    <React.Fragment>
      {window.location.href.includes("/citizen") ? <Timeline /> : null}
      {isLoading ? (
        <Loader />
      ) : (
        <FormStep
          config={config}
          onSelect={goNext}
          onSkip={onSkip}
          t={t}
          isDisabled={!fields[0].tradecategory || !fields[0].tradetype || !fields[0].tradesubtype}
        >
          {fields.map((field, index) => {
            return (
              <div key={`${field}-${index}`}>
                <div
                  style={{
                    border: "solid",
                    borderRadius: "5px",
                    padding: "10px",
                    paddingTop: "20px",
                    marginTop: "10px",
                    borderColor: "#f3f3f3",
                    background: "#FAFAFA",
                  }}
                >
                  <CardLabel>{`${t("TL_NEW_TRADE_DETAILS_TRADE_CAT_LABEL")}*`}</CardLabel>
                  <LinkButton
                    label={
                      <div>
                        <span>
                          <svg
                            style={{ float: "right", position: "relative", bottom: "32px" }}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
                              fill={!(fields.length == 1) ? "#494848" : "#FAFAFA"}
                            />
                          </svg>
                        </span>
                      </div>
                    }
                    style={{ width: "100px", display: "inline" }}
                    onClick={(e) => handleRemove(index)}
                  />
                  {!isLoading ? (
                    <Dropdown
                      t={t}
                      option={TradeCategoryMenu}
                      optionKey="i18nKey"
                      name={`TradeCategory-${index}`}
                      value={field?.tradecategory}
                      selected={field?.tradecategory}
                      select={(e) => selectTradeCategory(index, e)}
                      labelKey=""
                      optionCardStyles={{maxHeight:"125px",overflow:"scroll"}}

                      // isPTFlow={true}
                    />
                  ) : (
                    <Loader />
                  )}
                  <CardLabel>{`${t("TL_NEW_TRADE_DETAILS_TRADE_TYPE_LABEL")}*`}</CardLabel>
                  <Dropdown
                    t={t}
                    optionKey="i18nKey"
                    isMandatory={config.isMandatory}
                    option={getTradeTypeMenu(field?.tradecategory)}
                    selected={field?.tradetype}
                    select={(e) => selectTradeType(index, e)}
                    optionCardStyles={{maxHeight:"125px",overflow:"scroll"}}

                    
                  />
                  <CardLabel>{`${t("TL_NEW_TRADE_DETAILS_TRADE_SUBTYPE_LABEL")}*`}</CardLabel>
                    <Dropdown
                      t={t}
                      optionKey="i18nKey"
                      isMandatory={config.isMandatory}
                      option={sortDropdownNames(getTradeSubTypeMenu(field?.tradetype), "i18nKey", t)}
                      selected={field?.tradesubtype}
                      optionCardStyles={{maxHeight:"125px",overflow:"scroll"}}
                      select={(e) => selectTradeSubType(index, e)}
                    />
                  {/* <CardLabel>{`${t("TL_UNIT_OF_MEASURE_LABEL")}`}</CardLabel>
                  <TextInput
                    style={{ background: "#FAFAFA" }}
                    t={t}
                    type={"text"}
                    isMandatory={false}
                    optionKey="i18nKey"
                    name="UnitOfMeasure"
                    //value={UnitOfMeasure}
                    value={field?.unit}
                    onChange={(e) => selectUnitOfMeasure(index, e)}
                    disable={true}
                  />
                  <CardLabel>{`${t("TL_NEW_TRADE_DETAILS_UOM_VALUE_LABEL")}${!field.unit ? "" : "*"}`}</CardLabel> */}
                  {/* <TextInput
                    style={{ background: "#FAFAFA" }}
                    t={t}
                    type={"text"}
                    isMandatory={false}
                    optionKey="i18nKey"
                    name="UomValue"
                    //value={UomValue}
                    value={field?.uom}
                    onChange={(e) => selectUomValue(index, e)}
                    disable={!field.unit}
                    {...(validation = {
                      isRequired: true,
                      pattern: "[0-9]+",
                      type: "text",
                      title: t("TL_WRONG_UOM_VALUE_ERROR"),
                    })}
                  /> */}
                </div>
              </div>
            );
          })}
          <div style={{ justifyContent: "center", display: "flex", paddingBottom: "15px", color: "#FF8C00" }}>
            <button type="button" style={{ paddingTop: "10px" }} onClick={() => handleAdd()}>
              {`${t("TL_ADD_MORE_TRADE_UNITS")}`}
            </button>
          </div>
        </FormStep>
      )}
    </React.Fragment>
  );
};
export default SelectTradeUnits;