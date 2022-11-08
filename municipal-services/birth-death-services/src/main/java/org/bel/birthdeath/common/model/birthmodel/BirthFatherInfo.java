package org.bel.birthdeath.common.model.birthmodel;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.bel.birthdeath.common.model.AuditDetails;
import org.egov.common.contract.response.ResponseInfo;

import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class BirthFatherInfo {

    @Size(max = 64)
    @JsonProperty("id")
    private String id;

    @Size(max = 500)
    @JsonProperty("firstname_en")
    private String firstNameEn;

    @Size(max = 500)
    @JsonProperty("firstname_ml")
    private String firstNameMl;

    @Size(max = 500)
    @JsonProperty("middlename_en")
    private String middleNameEn;

    @Size(max = 500)
    @JsonProperty("middlename_ml")
    private String middleNameMl;

    @Size(max = 500)
    @JsonProperty("lastname_en")
    private String lastNameEn;

    @Size(max = 500)
    @JsonProperty("lastname_ml")
    private String lastNameMl;

    @Size(max = 150)
    @JsonProperty("aadharno")
    private String aadharNo;

    @Size(max = 64)
    @JsonProperty("emailid")
    private String emailId;

    @Size(max = 150)
    @JsonProperty("mobileno")
    private String mobileNo;

    @Size(max = 64)
    @JsonProperty("educationid")
    private String educationId;

    @Size(max = 64)
    @JsonProperty("proffessionid")
    private String proffessionId;

    @Size(max = 500)
    @JsonProperty("nationality")
    private String nationality;

    @Size(max = 64)
    @JsonProperty("religionid")
    private String religionId;

    @Size(max = 64)
    @JsonProperty("birthdtlid")
    private String birthdtlId;

    @JsonProperty("auditDetails")
    private AuditDetails auditDetails;

}
