package org.ksmart.birth.marriageregistry.service;

import com.jayway.jsonpath.JsonPath;
import org.egov.common.contract.request.RequestInfo;
import org.ksmart.birth.utils.BirthConstants;
import org.ksmart.birth.utils.MdmsUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MdmsDataService {
    private final MdmsUtil mdmsUtil;

    @Autowired
    MdmsDataService(MdmsUtil mdmsUtil) {
        this.mdmsUtil = mdmsUtil;
    }

    public void getPdfDataForMaster(RequestInfo requestInfo) {

        Object mdmsData = mdmsUtil.mdmsCall(requestInfo);

        List<String> tenantCode = getTenantCodes(mdmsData);
        System.out.println(tenantCode.get(0));

        List<String> tenantDistCode = getTenantDistCodes(mdmsData);
        System.out.println(tenantDistCode.get(0));
    }


    private List<String> getTenantCodes(Object mdmsData) {
        return JsonPath.read(mdmsData, BirthConstants.CR_MDMS_TENANTS_CODE_JSONPATH);
    }

    private List<String> getTenantDistCodes(Object mdmsData) {
        return JsonPath.read(mdmsData, BirthConstants.CR_MDMS_TENANTS_DIST_CODE_JSONPATH);
    }
}
