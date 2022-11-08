package org.bel.birthdeath.common.enrichment;

import org.bel.birthdeath.common.model.AuditDetails;

public interface BaseEnrichment {
    default AuditDetails buildAuditDetails(String by, Boolean create) {
        AuditDetails auditDetails;

        Long currentTime = Long.valueOf(System.currentTimeMillis());
        if (create) {
            auditDetails = AuditDetails.builder()
                    .createdBy(by)
                    .createdTime(currentTime)
                    .lastModifiedBy(by)
                    .lastModifiedTime(currentTime)
                    .build();
        } else {
            auditDetails = AuditDetails.builder()
                    .lastModifiedBy(by)
                    .lastModifiedTime(currentTime)
                    .build();
        }
        return auditDetails;
    }
}
