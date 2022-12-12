import React, { useState } from "react";
import { FormStep, CardLabel, TextInput, Dropdown, DatePicker } from "@egovernments/digit-ui-react-components";
import Timeline from "../../components/CRTimeline";
import { useTranslation } from "react-i18next";

const MotherInformation = ({ config, onSelect, userType, formData }) => {
    const stateId = Digit.ULBService.getStateId();
    const { t } = useTranslation();
    let validation = {};
    const { data: place = {}, isLoad } = Digit.Hooks.tl.useTradeLicenseMDMS(stateId, "TradeLicense", "PlaceOfActivity");
    const { data: Qualification = {}, } = Digit.Hooks.cr.useCivilRegistrationMDMS(stateId, "birth-death-service", "Qualification");
    const { data: Profession = {}, } = Digit.Hooks.cr.useCivilRegistrationMDMS(stateId, "birth-death-service", "Profession");
    const { data: State = {}, } = Digit.Hooks.cr.useCivilRegistrationMDMS(stateId, "common-masters", "mstate");
    const { data: District = {} } = Digit.Hooks.cr.useCivilRegistrationMDMS(stateId, "common-masters", "District");
    const { data: LBType = {} } = Digit.Hooks.cr.useCivilRegistrationMDMS(stateId, "common-masters", "LBType");
    const [MotherFirstNameEn, setMotherFirstNameEn] = useState(formData?.MotherInfoDetails?.setMotherFirstNameEn);
    const [MotherMiddleNameEn, setMotherMiddleNameEn] = useState(formData?.MotherInfoDetails?.MotherMiddleNameEn);
    const [MotherLastNameEn, setMotherLastNameEn] = useState(formData?.MotherInfoDetails?.MotherLastNameEn);
    const [MotherFirstNameMl, setMotherFirstNameMl] = useState(formData?.MotherInfoDetails?.MotherFirstNameMl);
    const [MotherMiddleNameMl, setMotherMiddleNameMl] = useState(formData?.MotherInfoDetails?.MotherMiddleNameMl);
    const [MotherLastNameMl, setMotherLastNameMl] = useState(formData?.MotherInfoDetails?.MotherLastNameMl);
    const [MotherAadhar, setMotherAadhar] = useState(formData?.MotherInfoDetails?.MotherAadhar);
    const [MotherPassportNo, setMotherPassportNo] = useState(formData?.MotherInfoDetails?.MotherPassportNo);
    const [MotherEmail, setMotherEmail] = useState(formData?.MotherInfoDetails?.MotherEmail);
    const [MotherMobile, setMotherMobile] = useState(formData?.MotherInfoDetails?.MotherMobile);
    const [MotherEducation, setMotherEducation] = useState(formData?.MotherInfoDetails?.MotherEducation);
    const [MotherEducationSubject, setMotherEducationSubject] = useState(formData?.MotherInfoDetails?.MotherEducationSubject);
    const [MotherProfession, setMotherProfession] = useState(formData?.MotherInfoDetails?.MotherProfession);
    const [LBTypeName, setLBTypeName] = useState(formData?.MotherInfoDetails?.LBTypeName);
    const [StateName, setStateName] = useState(formData?.MotherInfoDetails?.StateName);
    const [MotherDistrict, setMotherDistrict] = useState(formData?.MotherInfoDetails?.MotherDistrict);
    const [MotherAgeDeleivery, setMotherAgeDeleivery] = useState(formData?.MotherInfoDetails?.MotherAgeDeleivery);
    const [MotherNoOfBirths, setMotherNoOfBirths] = useState(formData?.MotherInfoDetails?.MotherNoOfBirths);
    const [MotherNationality, setMotherNationality] = useState(formData?.TradeDetails?.MotherNationality);
    const [MotherCountry, setMotherCountry] = useState(formData?.TradeDetails?.MotherCountry);
    const isEdit = window.location.href.includes("/edit-application/") || window.location.href.includes("renew-trade");
    let cmbPlace = [];
    place &&
        place["TradeLicense"] &&
        place["TradeLicense"].PlaceOfActivity.map((ob) => {
            cmbPlace.push(ob);
        });
    let cmbQualification = [];
    Qualification &&
        Qualification["birth-death-service"] &&
        Qualification["birth-death-service"].Qualification.map((ob) => {
            cmbQualification.push(ob);
        });
    let cmbProfession = [];
    Profession &&
        Profession["birth-death-service"] &&
        Profession["birth-death-service"].Profession.map((ob) => {
            cmbProfession.push(ob);
        });
    let cmbState = [];
    State &&
        State["common-masters"] &&
        State["common-masters"].mstate.map((ob) => {
            cmbState.push(ob);
        });
    let cmbDistrict = [];
    District &&
        District["common-masters"] &&
        District["common-masters"].District.map((ob) => {
            cmbDistrict.push(ob);
        });
        let cmbLBType = [];
    LBType &&
    LBType["common-masters"] &&
    LBType["common-masters"].LBType.map((ob) => {
            cmbLBType.push(ob);
        });
    const onSkip = () => onSelect();

    function setSelectMotherFirstNameEn(e) {
        setMotherFirstNameEn(e.target.value);
    }
    function setSelectMotherMiddleNameEn(e) {
        setMotherMiddleNameEn(e.target.value);
    }
    function setSelectMotherLastNameEn(e) {
        setMotherLastNameEn(e.target.value);
    }
    function setSelectMotherFirstNameMl(e) {
        setMotherFirstNameMl(e.target.value);
    }
    function setSelectMotherMiddleNameMl(e) {
        setMotherMiddleNameMl(e.target.value);
    }
    function setSelectMotherLastNameMl(e) {
        setMotherLastNameMl(e.target.value);
    }    
    function setSelectMotherAadhar(e) {
        setMotherAadhar(e.target.value);
    }
    function setSelectMotherEmail(e) {
        setMotherEmail(e.target.value);
    }
    function setSelectMotherMobile(e) {
        setMotherMobile(e.target.value);
    }
    function setSelectMotherPassportNo(e) {
        setMotherPassportNo(e.target.value);
    }
    function setSelectMotherEducation(value) {
        setMotherEducation(value);
    }
    function setSelectMotherEducationSubject(value) {
        setMotherEducationSubject(value);
    }
    function setSelectMotherProfession(value) {
        setMotherProfession(value);
    }
    function setSelectLBType(value) {
        setLBTypeName(value);
    }
    function setSelectStateName(value) {
        setStateName(value);
    }
    function setSelectMotherAgeDeleivery(e) {
        setMotherAgeDeleivery(e.target.value);
    }
    function setSelectMotherNoOfBirths(e) {
        setMotherNoOfBirths(e.target.value);
    }
    function setSelectMotherNationality(value) {
        setMotherNationality(value);
    }
    function setSelectMotherDistrict(value) {
        setMotherDistrict(value);
    }
    function setSelectMotherLBName(value) {
        setMotherDistrict(value);
    }
    function setSelectMotherCountry(value) {
        setMotherCountry(value);
    }    
    const goNext = () => {
        sessionStorage.setItem("MotherFirstNameEn", MotherFirstNameEn);
        sessionStorage.setItem("MotherMiddleNameEn", MotherMiddleNameEn);
        sessionStorage.setItem("MotherLastNameEn", MotherLastNameEn);
        sessionStorage.setItem("MotherFirstNameMl", MotherFirstNameMl);
        sessionStorage.setItem("MotherMiddleNameMl", MotherMiddleNameMl);
        sessionStorage.setItem("MotherLastNameMl", MotherLastNameMl);
        sessionStorage.setItem("MotherAadhar", MotherAadhar);
        sessionStorage.setItem("MotherPassportNo", MotherPassportNo);
        sessionStorage.setItem("MotherEmail", MotherEmail);
        sessionStorage.setItem("MotherMobile", MotherMobile);
        sessionStorage.setItem("MotherEducation", MotherEducation.code);
        sessionStorage.setItem("MotherEducationSubject", MotherEducationSubject.code);
        sessionStorage.setItem("MotherProfession", MotherProfession.code);
        onSelect(config.key, { MotherFirstNameEn,MotherMiddleNameEn,MotherLastNameEn,
            MotherFirstNameMl,MotherMiddleNameMl,MotherLastNameMl,MotherAadhar,MotherPassportNo,MotherEmail,MotherMobile,MotherEducation,MotherEducationSubject,MotherProfession });
    }
    return (
        <React.Fragment>
            {window.location.href.includes("/citizen") ? <Timeline currentStep={3} /> : null}
            {window.location.href.includes("/employee") ? <Timeline currentStep={3} /> : null}
            <FormStep t={t} config={config} onSelect={goNext} onSkip={onSkip} isDisabled={!MotherFirstNameEn}>

                <div className="row">
                    <div className="col-md-12" ><h1 className="headingh1" ><span style={{ background: "#fff", padding: "0 10px" }}>{`${t("Mother's Information")}`}</span> </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_FIRST_NAME_EN")}`}</CardLabel>
                        <TextInput
                            t={t}
                            isMandatory={false}
                            type={"text"}
                            optionKey="i18nKey"
                            name="MotherFirstNameEn"
                            value={MotherFirstNameEn}
                            onChange={setSelectMotherFirstNameEn}
                            disable={isEdit}
                            {...(validation = { pattern: "^[a-zA-Z-.`' ]*$", isRequired: true, type: "text", title: t("TL_INVALID_TRADE_NAME") })}
                        />
                    </div>
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_MIDDLE_NAME_EN")}`}</CardLabel>
                        <TextInput
                            t={t}
                            isMandatory={false}
                            type={"text"}
                            optionKey="i18nKey"
                            name="MotherMiddleNameEn"
                            value={MotherMiddleNameEn}
                            onChange={setSelectMotherMiddleNameEn}
                            disable={isEdit}
                            {...(validation = { pattern: "^[a-zA-Z-.`' ]*$", isRequired: false, type: "text", title: t("TL_INVALID_TRADE_NAME") })}
                        />
                    </div>
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_LAST_NAME_EN")}`}</CardLabel>
                        <TextInput
                            t={t}
                            isMandatory={false}
                            type={"text"}
                            optionKey="i18nKey"
                            name="MotherLastNameEn"
                            value={MotherLastNameEn}
                            onChange={setSelectMotherLastNameEn}
                            disable={isEdit}
                            {...(validation = { pattern: "^[a-zA-Z-.`' ]*$", isRequired: true, type: "text", title: t("TL_INVALID_TRADE_NAME") })}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_FIRST_NAME_ML")}`}</CardLabel>
                        <TextInput
                            t={t}
                            isMandatory={false}
                            type={"text"}
                            optionKey="i18nKey"
                            name="MotherFirstNameMl"
                            value={MotherFirstNameMl}
                            onChange={setSelectMotherFirstNameMl}
                            disable={isEdit}
                            {...(validation = { isRequired: true, type: "text", title: t("TL_INVALID_TRADE_NAME") })}
                        />
                    </div>
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_MIDDLE_NAME_ML")}`}</CardLabel>
                        <TextInput
                            t={t}
                            isMandatory={false}
                            type={"text"}
                            optionKey="i18nKey"
                            name="MotherMiddleNameMl"
                            value={MotherMiddleNameMl}
                            onChange={setSelectMotherMiddleNameMl}
                            disable={isEdit}
                            {...(validation = { isRequired: false, type: "text", title: t("TL_INVALID_TRADE_NAME") })}
                        />
                    </div>
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_LAST_NAME_ML")}`}</CardLabel>
                        <TextInput
                            t={t}
                            isMandatory={false}
                            type={"text"}
                            optionKey="i18nKey"
                            name="MotherLastNameMl"
                            value={MotherLastNameMl}
                            onChange={setSelectMotherLastNameMl}
                            disable={isEdit}
                            {...(validation = { isRequired: true, type: "text", title: t("TL_INVALID_TRADE_NAME") })}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CS_COMMON_AADHAAR")}`}</CardLabel>
                        <TextInput
                            t={t}
                            isMandatory={false}
                            type={"text"}
                            optionKey="i18nKey"
                            name="MotherAadhar"
                            value={MotherAadhar}
                            onChange={setSelectMotherAadhar}
                            disable={isEdit}
                            {...(validation = { pattern: "^[0-9]{12}$",type: "text", isRequired: true,  title: t("TL_INVALID_TRADE_NAME") })}
                        />
                    </div>
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_PASSPORT_NO")}`}</CardLabel>
                        <TextInput
                            t={t}
                            isMandatory={false}
                            type={"text"}
                            optionKey="i18nKey"
                            name="MotherPassportNo"
                            value={MotherPassportNo}
                            onChange={setSelectMotherPassportNo}
                            disable={isEdit}
                            {...(validation = { pattern: "^[a-zA-Z-.0-9`' ]*$",isRequired: true,  title: t("TL_INVALID_TRADE_NAME") })}
                        />
                    </div>
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_EMAIL")}`}</CardLabel>
                        <TextInput
                            t={t}
                            isMandatory={false}
                            type="email"
                            optionKey="i18nKey"
                            name="MotherEmail"
                            value={MotherEmail}
                            onChange={setSelectMotherEmail}
                            disable={isEdit}
                            {...(validation = { isRequired: true, title: t("TL_INVALID_TRADE_NAME") })}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_MOBILE_NO")}`}</CardLabel>
                        <TextInput
                            t={t}
                            isMandatory={false}
                            type={"text"}
                            optionKey="i18nKey"
                            name="MotherMobile"
                            value={MotherMobile}
                            onChange={setSelectMotherMobile}
                            disable={isEdit}
                            {...(validation = { pattern: "^[0-9]{10}$", type: "text", isRequired: true, title: t("TL_INVALID_TRADE_NAME") })}
                        />
                    </div>
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_EDUCATION")}`}</CardLabel>
                        <Dropdown
                            t={t}
                            optionKey="name"
                            isMandatory={false}
                            option={cmbQualification}
                            selected={MotherEducation}
                            select={setSelectMotherEducation}
                            disabled={isEdit}
                        />
                    </div>
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_EDUCATION_SUBJECT")}`}</CardLabel>
                        <Dropdown
                            t={t}
                            optionKey="code"
                            isMandatory={false}
                            option={cmbPlace}
                            selected={MotherEducationSubject}
                            select={setSelectMotherEducationSubject}
                            disabled={isEdit}
                        />
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_PROFESSIONAL")}`}</CardLabel>
                        <Dropdown
                            t={t}
                            optionKey="name"
                            isMandatory={false}
                            option={cmbProfession}
                            selected={MotherProfession}
                            select={setSelectMotherProfession}
                            disabled={isEdit}
                        />
                    </div>
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_NATIONALITY")}`}</CardLabel>
                        <Dropdown
                            t={t}
                            optionKey="code"
                            isMandatory={false}
                            option={cmbPlace}
                            selected={MotherNationality}
                            select={setSelectMotherNationality}
                            disabled={isEdit}
                        />
                    </div>
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_AGE_OF_DELIVERY")}`}</CardLabel>
                        <TextInput
                            t={t}
                            isMandatory={false}
                            type={"text"}
                            optionKey="i18nKey"
                            name="MotherAgeDeleivery"
                            value={MotherAgeDeleivery}
                            onChange={setSelectMotherAgeDeleivery}
                            disable={isEdit}
                            {...(validation = { pattern: "^[0-9]{2}$", isRequired: true, type: "text", title: t("TL_INVALID_TRADE_NAME") })}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CR_NO_OF_BIRTH_GIVEN")}`}</CardLabel>
                        <TextInput
                            t={t}
                            isMandatory={false}
                            type={"text"}
                            optionKey="i18nKey"
                            name="MotherNoOfBirths"
                            value={MotherNoOfBirths}
                            onChange={setSelectMotherNoOfBirths}
                            disable={isEdit}
                            {...(validation = { pattern: "^[0-9]$", type: "text", isRequired: true, title: t("TL_INVALID_TRADE_NAME") })}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4" >
                        <CardLabel>{`${t("PLACE_TYPE_URBAN_PLACE_TYPE_RURAL")}`}</CardLabel>
                        <Dropdown
                            t={t}
                            optionKey="code"
                            isMandatory={false}
                            option={cmbPlace}
                            selected={MotherPlaceType}
                            select={setSelectMotherPlaceType}
                            disabled={isEdit}
                        />
                    </div>
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CS_COMMON_LB_NAME")}`}</CardLabel>
                        <Dropdown
                            t={t}
                            optionKey="code"
                            isMandatory={false}
                            option={cmbPlace}
                            selected={MotherLBName}
                            select={setSelectMotherLBName}
                            disabled={isEdit}
                        />
                    </div>
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CS_COMMON_LB_TYPE")}`}</CardLabel>
                        <Dropdown
                            t={t}
                            optionKey="name"
                            isMandatory={false}
                            option={cmbLBType}
                            selected={LBTypeName}
                            select={setSelectLBType}
                            disabled={isEdit}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CS_COMMON_DISTRICT")}`}</CardLabel>
                        <Dropdown
                            t={t}
                            optionKey="name"
                            isMandatory={false}
                            option={cmbDistrict}
                            selected={MotherDistrict}
                            select={setSelectMotherDistrict}
                            disabled={isEdit}
                        />
                    </div>
                    <div className="col-md-4" >
                        <CardLabel>{`${t("CS_COMMON_STATE")}`}</CardLabel>
                        <Dropdown
                            t={t}
                            optionKey="name"
                            isMandatory={false}
                            option={cmbState}
                            selected={StateName}
                            select={setSelectStateName}
                            disabled={isEdit}
                        />
                    </div>
                    <div className="col-md-12" >
                        <CardLabel>{`${t("CS_COMMON_COUNTRY")}`}</CardLabel>
                        <Dropdown
                            t={t}
                            optionKey="code"
                            isMandatory={false}
                            option={cmbPlace}
                            selected={MotherCountry}
                            select={setSelectMotherCountry}
                            disabled={isEdit}
                        />
                    </div>
                </div>
            </FormStep>
        </React.Fragment>
    );
};
export default MotherInformation;
