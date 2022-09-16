package org.egov.filemgmnt.web.models;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.egov.common.contract.request.RequestInfo;
import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Validated
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ApplicantPersonalRequest {
    @JsonProperty("RequestInfo")
    private RequestInfo requestInfo;

    @JsonProperty("ApplicantPersonals")
    @Valid
    private List<ApplicantPersonal> personals;

    public ApplicantPersonalRequest addApplicantPersonal(ApplicantPersonal personal) {
        if (personals == null) {
            personals = new ArrayList<>();
        }
        personals.add(personal);

        return this;
    }
}
