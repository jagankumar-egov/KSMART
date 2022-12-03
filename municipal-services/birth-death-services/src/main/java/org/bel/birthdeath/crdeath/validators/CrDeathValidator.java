package org.bel.birthdeath.crdeath.validators;
import java.util.Arrays;
import java.util.List;

import static org.bel.birthdeath.crdeath.web.enums.ErrorCodes.DEATH_REG_REQUIRED;
import static org.bel.birthdeath.crdeath.web.enums.ErrorCodes.DEATH_REG_INVALID_UPDATE;
import static org.bel.birthdeath.crdeath.web.enums.ErrorCodes.INVALID_SEARCH;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.egov.common.contract.request.RequestInfo;
import org.bel.birthdeath.crdeath.config.CrDeathConfiguration;
import org.bel.birthdeath.crdeath.util.CrDeathUtil;
import org.bel.birthdeath.crdeath.web.models.CrDeathDtl;
import org.bel.birthdeath.crdeath.web.models.CrDeathDtlRequest;
import org.bel.birthdeath.crdeath.web.models.CrDeathSearchCriteria;
import org.egov.tracer.model.CustomException;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
@Component
public class CrDeathValidator {


   // private final CrDeathRepository repository;
   private final CrDeathConfiguration config;
   private final MDMSValidator mdmsValidator;

   @Autowired
   public CrDeathValidator( CrDeathConfiguration config,
                                     MDMSValidator mdmsValidator) {
      // this.repository = repository;
       this.config = config;
       this.mdmsValidator = mdmsValidator;

   }


    //UPDATE BEGIN
    /**
     * Validate applicant personal update request.
     *
     * @param request the
     *                {@link org.bel.birthdeath.crdeath.web.models.CrDeathDtlRequest
     *                ApplicantPersonalRequest}
     */
    public void validateUpdate(CrDeathDtlRequest request, List<CrDeathDtl> searchResult) {
        List<CrDeathDtl> deathdetails = request.getDeathCertificateDtls();

        if (CollectionUtils.isEmpty(deathdetails)) {
            throw new CustomException(DEATH_REG_REQUIRED.getCode(), "Death registration is required.");
        }

        if (deathdetails.size() > 1) { // NOPMD
            throw new CustomException(DEATH_REG_INVALID_UPDATE.getCode(),
                    "Supports only single Death registration update request.");
        }

        if (deathdetails.size() != searchResult.size()) {
            throw new CustomException(DEATH_REG_INVALID_UPDATE.getCode(),
                    "Death registration(s) not found in database.");
        }
    }
//UPDATE END
//SEARCH BEGIN
        /**
     * Validates if the search parameters are valid
     * 
     * @param requestInfo The requestInfo of the incoming request
     * @param criteria    The TradeLicenseSearch Criteria
     */
    public void validateSearch(RequestInfo requestInfo, CrDeathSearchCriteria criteria) {
        if (StringUtils.isBlank(criteria.getTenantId())) {
            throw new CustomException(INVALID_SEARCH.getCode(), "Tenant id is required.");
        }

        String allowedSearchParams = config.getAllowedEmployeeSearchParams();

        if (StringUtils.isNotBlank(allowedSearchParams)) {
            List<String> allowedSearchTokens = Arrays.asList(allowedSearchParams.split(","));
            validateSearchParams(criteria, allowedSearchTokens);
        }

        // if (StringUtils.isNotBlank(criteria.getTenantId()) && StringUtils.isBlank(criteria.getId())
        //     && StringUtils.isBlank(criteria.getFileNumber()) && StringUtils.isBlank(criteria.getApplicationNumber())) {
        //     throw new CustomException(INVALID_SEARCH.getCode(), "Search based only on tenant id is not allowed.");
        // }
    }
    private void validateSearchParams(CrDeathSearchCriteria criteria, List<String> allowedParams) {
        BeanWrapper bw = new BeanWrapperImpl(criteria);

        CrDeathUtil.validateSearchParam(bw, "tenantId", allowedParams);
        CrDeathUtil.validateSearchParam(bw, "id", allowedParams);
        CrDeathUtil.validateSearchParam(bw, "applicationNumber", allowedParams);
        CrDeathUtil.validateSearchParam(bw, "fileNumber", allowedParams);
    }
//SEARCH END
    
}
