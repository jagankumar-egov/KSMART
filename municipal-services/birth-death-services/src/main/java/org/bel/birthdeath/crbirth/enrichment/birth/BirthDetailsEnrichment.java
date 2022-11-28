package org.bel.birthdeath.crbirth.enrichment.birth;

import org.bel.birthdeath.common.model.AuditDetails;
import org.bel.birthdeath.crbirth.model.BirthDetailsRequest;
import org.bel.birthdeath.crbirth.enrichment.BaseEnrichment;
import org.egov.common.contract.request.RequestInfo;
import org.egov.common.contract.request.User;
import org.springframework.stereotype.Component;

import java.util.UUID;


@Component
public class BirthDetailsEnrichment implements BaseEnrichment {

    public void enrichCreate(BirthDetailsRequest request) {

        RequestInfo requestInfo = request.getRequestInfo();
        User userInfo = requestInfo.getUserInfo();
        AuditDetails auditDetails = buildAuditDetails(userInfo.getUuid(), Boolean.TRUE);

        request.getBirthDetails().forEach(birth -> {

            birth.setId(UUID.randomUUID().toString());

            birth.setAuditDetails(auditDetails);

            birth.getBirthPlace().setId(UUID.randomUUID().toString());

            birth.getBirthFatherInfo().setId(UUID.randomUUID().toString());

            birth.getBirthMotherInfo().setId(UUID.randomUUID().toString());

            birth.getBirthPermanentAddress().setId(UUID.randomUUID().toString());

            birth.getBirthPresentAddress().setId(UUID.randomUUID().toString());

            birth.getBirthStatisticalInformation().setId(UUID.randomUUID().toString());
        });
    }

    public void enrichUpdate(BirthDetailsRequest request) {

        RequestInfo requestInfo = request.getRequestInfo();
        User userInfo = requestInfo.getUserInfo();

        AuditDetails auditDetails = buildAuditDetails(userInfo.getUuid(), Boolean.FALSE);

        request.getBirthDetails()
                .forEach(birth -> birth.setAuditDetails(auditDetails));
    }
}
