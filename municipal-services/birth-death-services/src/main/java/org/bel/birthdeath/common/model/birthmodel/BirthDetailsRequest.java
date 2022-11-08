package org.bel.birthdeath.common.model.birthmodel;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.egov.common.contract.request.RequestInfo;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;


@Validated
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BirthDetailsRequest {
    @JsonProperty("RequestInfo")
    private RequestInfo requestInfo;

    @JsonProperty("BirthDetails")
    @Valid
    private List<BirthDetails> birthDetails;

    public BirthDetailsRequest addBirthDetails(BirthDetails birthDetail) {
        if (birthDetails == null) {
            birthDetails = null;
        }
        return this;
    }
}
