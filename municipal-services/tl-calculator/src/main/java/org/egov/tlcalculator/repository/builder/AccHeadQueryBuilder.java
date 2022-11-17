package org.egov.tlcalculator.repository.builder;

import org.apache.kafka.common.utils.CollectionUtils;
import org.egov.tlcalculator.web.models.BillingSlabSearchCriteria;
import org.egov.tlcalculator.web.models.Calculation;
import org.egov.tlcalculator.web.models.CalculationSearchCriteria;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AccHeadQueryBuilder {


    /**
     * Creates query to search billingSlabs based on tenantId and consumerCode ordered by lastModifiedTime
     * @param criteria The Search criteria
     * @param preparedStmtList The list of object containing the query parameter values
     * @return Search query for billingSlabs
     */

    private static final String QUERY = "SELECT * FROM eg_tl_taxheadmaster";
    public String getSearchQuery(CalculationSearchCriteria criteria, List<Object> preparedStmtList){
        StringBuilder builder = new StringBuilder(QUERY);

        // builder.append(" WHERE tenantid= 'default'  ");
        // preparedStmtList.add(criteria.getTenantId());

        // builder.append(" AND (type=? OR type='ALL')");
        // preparedStmtList.add(criteria.getTaxType());

        builder.append(" WHERE (type=? OR type='ALL')");
        preparedStmtList.add(criteria.getTaxType());
        
        return builder.toString();
    }
   
}
