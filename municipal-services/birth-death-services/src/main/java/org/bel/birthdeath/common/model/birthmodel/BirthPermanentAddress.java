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
public class BirthPermanentAddress {

    @Size(max = 64)
    @JsonProperty("id")
    private String id;

    @Size(max = 500)
    @JsonProperty("buildingno")
    private String buildingNo;

    @Size(max = 500)
    @JsonProperty("houseno")
    private String houseNo;

    @Size(max = 500)
    @JsonProperty("streetname_en")
    private String streetNameEn;

    @Size(max = 500)
    @JsonProperty("streetname_ml")
    private String streetNameMl;

    @Size(max = 500)
    @JsonProperty("locality_en")
    private String localityEn;

    @Size(max = 500)
    @JsonProperty("locality_ml")
    private String localityMl;

    @Size(max = 500)
    @JsonProperty("city_en")
    private String cityEn;

    @Size(max = 500)
    @JsonProperty("city_ml")
    private String cityMl;

    @Size(max = 64)
    @JsonProperty("talukid")
    private String talukId;

    @Size(max = 64)
    @JsonProperty("districtid")
    private String districtId;

    @Size(max = 150)
    @JsonProperty("pinno")
    private String pinNo;

    @Size(max = 64)
    @JsonProperty("stateid")
    private String stateId;

    @Size(max = 64)
    @JsonProperty("countryid")
    private String countryId;

    @Size(max = 64)
    @JsonProperty("birthdtlid")
    private String birthdtlId;

    @JsonProperty("auditDetails")
    private AuditDetails auditDetails;

}
