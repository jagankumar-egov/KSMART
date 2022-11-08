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
public class BirthStatisticalInformation {

    @Size(max = 64)
    @JsonProperty("id")
    private String id;

    @JsonProperty("weight_of_child")
    private Long weightOfChild;

    @JsonProperty("height_of_child")
    private Long heightOfChild;

    @JsonProperty("duration_of_pregnancy_in_week")
    private Integer durationOfPregnancyInWeek;

    @JsonProperty("nature_of_medical_attention")
    private Integer natureOfMedicalAttention;

    @JsonProperty("delivery_method")
    private Integer deliveryMethod;

    @JsonProperty("birthdtlid")
    private Integer birthDtlId;

    @JsonProperty("auditDetails")
    private AuditDetails auditDetails;
}
