package org.bel.birthdeath.crbirth.BirthValidator;

import org.apache.commons.collections4.CollectionUtils;
import org.bel.birthdeath.config.BirthDeathConfiguration;
import org.bel.birthdeath.crbirth.model.BirthDetailsRequest;
import org.bel.birthdeath.utils.enums.ErrorCode;
import org.egov.tracer.model.CustomException;
import org.springframework.beans.factory.annotation.Autowired;

public class BirthDetailsValidator {
    private final BirthDeathConfiguration bndCofig;



    @Autowired
    public BirthDetailsValidator(BirthDeathConfiguration bndCofig) {
        this.bndCofig = bndCofig;
    }

    /**
     * Validate abirth details create request.
     *
     * @param request the {@link BirthDetailsRequest}
     */
    public void validateCreate(BirthDetailsRequest request, Object mdmsData) {
//        if (CollectionUtils.isEmpty(request.getBirthDetails())) {
//            throw new CustomException(ErrorCode.BIRTH_DETAILS_REQUIRED.getCode(),
//                    "Birth details is required.");
//        }
//
//        mdmsValidator.validateMdmsData(request, mdmsData);
    }


}
