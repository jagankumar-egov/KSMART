package org.egov.filemgmnt.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.egov.common.contract.request.RequestInfo;
import org.egov.mdms.model.MasterDetail;
import org.egov.mdms.model.MdmsCriteria;
import org.egov.mdms.model.MdmsCriteriaReq;
import org.egov.mdms.model.ModuleDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.jayway.jsonpath.JsonPath;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class MdmsUtil {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${egov.mdms.host}")
    private String mdmsHost;

    @Value("${egov.mdms.search.endpoint}")
    private String mdmsUrl;

    @Value("${egov.mdms.master.name}")
    private String masterName;

    @Value("${egov.mdms.module.name}")
    private String moduleName;

    public Integer fetchRegistrationChargesFromMdms(RequestInfo requestInfo, String tenantId) {
        StringBuilder uri = new StringBuilder();
        uri.append(mdmsHost)
           .append(mdmsUrl);
        MdmsCriteriaReq mdmsCriteriaReq = getMdmsRequestForCategoryList(requestInfo, tenantId);

        Integer rate = 0;
        try {
            Object response = restTemplate.postForObject(uri.toString(), mdmsCriteriaReq, Map.class);
            rate = JsonPath.read(response, "$.MdmsRes.VTR.RegistrationCharges.[0].amount");
        } catch (Exception e) {
            log.error("Exception occurred while fetching category lists from mdms: ", e);
        }
        // log.info(ulbToCategoryListMap.toString());
        return rate;
    }
    public Object fetchFileServiceSubtypeFromMdms(RequestInfo requestInfo, String tenantId) {
        StringBuilder uri = new StringBuilder();
        Object result = null;
        uri.append(mdmsHost)
           .append(mdmsUrl);
        MdmsCriteriaReq mdmsCriteriaReq = getMdmsRequestForCategoryList(requestInfo, tenantId);

        Integer rate = 0;
        try {
        	result  = restTemplate.postForObject(uri.toString(), mdmsCriteriaReq, Map.class);
            
        } catch (Exception e) {
            log.error("Exception occurred while fetching category lists from mdms: ", e);
        }
        // log.info(ulbToCategoryListMap.toString());
        return result;
    }

    private MdmsCriteriaReq getMdmsRequestForCategoryList(RequestInfo requestInfo, String tenantId) {
        MasterDetail masterDetail = new MasterDetail();
        masterDetail.setName(masterName);
        List<MasterDetail> masterDetailList = new ArrayList<>();
        masterDetailList.add(masterDetail);

        ModuleDetail moduleDetail = new ModuleDetail();
        moduleDetail.setMasterDetails(masterDetailList);
        moduleDetail.setModuleName(moduleName);
        List<ModuleDetail> moduleDetailList = new ArrayList<>();
        moduleDetailList.add(moduleDetail);

        MdmsCriteria mdmsCriteria = new MdmsCriteria();
        mdmsCriteria.setTenantId(tenantId.split("\\.")[0]);
        mdmsCriteria.setModuleDetails(moduleDetailList);

        MdmsCriteriaReq mdmsCriteriaReq = new MdmsCriteriaReq();
        mdmsCriteriaReq.setMdmsCriteria(mdmsCriteria);
        mdmsCriteriaReq.setRequestInfo(requestInfo);

        return mdmsCriteriaReq;
    }
}