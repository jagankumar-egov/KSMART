package org.bel.birthdeath.common.model.birthmodel;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.bel.birthdeath.common.model.AuditDetails;

import javax.validation.constraints.Size;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BirthDeathNonInstitution {

    @Size(max = 64)
    @JsonProperty("id")
    private String id;

    @Size(max = 64)
    @JsonProperty("non_institutiontype_id")
    private String nonInstitutiontypeId;

    @Size(max = 500)
    @JsonProperty("address1_en")
    private String address1En;

    @Size(max = 500)
    @JsonProperty("address1_ml")
    private String address1Ml;

    @Size(max = 500)
    @JsonProperty("address2_en")
    private String address2En;

    @Size(max = 500)
    @JsonProperty("address2_ml")
    private String address2Ml;

    @Size(max = 500)
    @JsonProperty("locality_en")
    private String localityEn;

    @Size(max = 500)
    @JsonProperty("locality_ml")
    private String localityMl;

    @Size(max = 64)
    @JsonProperty("talukid")
    private String talukId;

    @Size(max = 64)
    @JsonProperty("districtid")
    private String districtId;

    @Size(max = 100)
    @JsonProperty("pincode")
    private String pinCode;

    @Size(max = 64)
    @JsonProperty("stateid")
    private String stateId;

    @Size(max = 150)
    @JsonProperty("mobileno")
    private String mobileNo;

    @JsonProperty("auditDetails")
    private AuditDetails auditDetails;

}
