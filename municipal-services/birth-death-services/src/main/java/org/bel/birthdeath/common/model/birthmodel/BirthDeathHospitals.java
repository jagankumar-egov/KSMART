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
public class BirthDeathHospitals {

    @Size(max = 64)
    @JsonProperty("id")
    private String id;

    @Size(max = 500)
    @JsonProperty("hospitalname")
    private String hospitalName;

    @Size(max = 64)
    @JsonProperty("tenantid")
    private String tenantId;

    @Size(max = 64)
    @JsonProperty("birthdtlid")
    private String birthDtlId;

    @JsonProperty("auditDetails")
    private AuditDetails auditDetails;
}
