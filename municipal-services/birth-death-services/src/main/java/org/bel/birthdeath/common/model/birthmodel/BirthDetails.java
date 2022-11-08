package org.bel.birthdeath.common.model.birthmodel;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.bel.birthdeath.common.model.AuditDetails;

import javax.validation.constraints.Size;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BirthDetails {

    @Size(max = 64)
    @JsonProperty("id")
    private String id;

    @Size(max = 64)
    @JsonProperty("registrationno")
    private String registrationNo;

    @Size(max = 500)
    @JsonProperty("hospitalname")
    private String hospitalName;


    @JsonProperty("dateofreport")
    private Long dateOfReport;

    @JsonProperty("dateandtimeofbirth")
    private Long dateandtimeofbirth;

    @Size(max = 500)
    @JsonProperty("firstname_en")
    private String firstNameEn;

    @Size(max = 500)
    @JsonProperty("firstname_ml")
    private String firstNameMl;

    @Size(max = 500)
    @JsonProperty("middlename_en")
    private String mMddleNameEn;

    @Size(max = 500)
    @JsonProperty("middlename_ml")
    private String middleNameMl;

    @Size(max = 500)
    @JsonProperty("lastname_en")
    private String lastNameEn;

    @Size(max = 500)
    @JsonProperty("lastname_ml")
    private String lastNameMl;

    @Size(max = 1000)
    @JsonProperty("placeofbirth")
    private String placeOfBirth;

    @Size(max = 500)
    @JsonProperty("informantsname_en")
    private String informantsNameEn;

    @Size(max = 500)
    @JsonProperty("informantsname_ml")
    private String informantsNameMl;

    @Size(max = 2500)
    @JsonProperty("informantsaddress_en")
    private String informantsAddressEn;

    @Size(max = 2500)
    @JsonProperty("informantsaddress_ml")
    private String informantsAddressMl;

    @JsonProperty("counter")
    private Integer counter;

    @Size(max = 64)
    @JsonProperty("tenantId")
    private String tenantId;

    @JsonProperty("gender")
    private Integer gender;

    @Size(max = 2000)
    @JsonProperty("remarks")
    private String remarks;

    @Size(max = 64)
    @JsonProperty("hospitalid")
    private String hospitalId;

    @Size(max = 64)
    @JsonProperty("applicationcode")
    private String applicationCode;

    @Size(max = 15)
    @JsonProperty("aadharno")
    private String aadharNo;

    @Size(max = 15)
    @JsonProperty("informants_mobileno")
    private String informantsMobileNo;

    @JsonProperty("birthFather")
    private BirthFatherInfo birthFatherInfo;

    @JsonProperty("birthMother")
    private BirthMotherInfo birthMotherInfo;

    @JsonProperty("birthPermanent")
    private BirthPermanentAddress birthPermanentAddress;

    @JsonProperty("birthPresent")
    private BirthPresentAddress birthPresentAddress;

    @JsonProperty("birthNonInstitution")
    private BirthDeathNonInstitution birthDeathNonInstitution;

    @JsonProperty("birthHospital")
    private BirthDeathHospitals birthDeathHospitals;

    @JsonProperty("birthHome")
    private BirthDeathHome birthDeathHome;

    @JsonProperty("birthStatistical")
    private BirthStatisticalInformation birthStatisticalInformation;

    @JsonProperty("auditDetails")
    private AuditDetails auditDetails;

}

