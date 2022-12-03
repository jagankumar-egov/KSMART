package org.bel.birthdeath.crdeath.web.models;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.commons.lang3.StringUtils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CrDeathSearchCriteria {

    @JsonProperty("tenantId")
    private String tenantId;

    @JsonProperty("id")
    private String id;

    @JsonProperty("applicationNumber")
    private String applicationNumber ;

    @JsonProperty("fileNumber")
    private String fileNumber ;

    public boolean isEmpty() {

        return (StringUtils.isBlank(tenantId) && (StringUtils.isEmpty(applicationNumber) && StringUtils.isEmpty(fileNumber)));

    }

    public boolean tenantIdOnly() {
        // return (tenantId != null);
        return (StringUtils.isNotBlank(tenantId) && StringUtils.isEmpty(applicationNumber) && StringUtils.isEmpty(fileNumber));
    }
    
}
