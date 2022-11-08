package org.bel.birthdeath.common.enrichment.birth;

import org.bel.birthdeath.common.enrichment.BaseEnrichment;
import org.bel.birthdeath.common.model.AuditDetails;
import org.bel.birthdeath.common.model.birthmodel.BirthDetailsRequest;
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
            birth.getBirthFatherInfo().setId(UUID.randomUUID().toString());
            birth.getBirthMotherInfo().setId(UUID.randomUUID().toString());
            birth.getBirthPermanentAddress().setId(UUID.randomUUID().toString());
            birth.getBirthPresentAddress().setId(UUID.randomUUID().toString());
            birth.getBirthDeathHospitals().setId(UUID.randomUUID().toString());
            birth.getBirthStatisticalInformation().setId(UUID.randomUUID().toString());
            birth.getBirthDeathHome().setId(UUID.randomUUID().toString());
            birth.getBirthDeathNonInstitution().setId(UUID.randomUUID().toString());
        });
    }
}