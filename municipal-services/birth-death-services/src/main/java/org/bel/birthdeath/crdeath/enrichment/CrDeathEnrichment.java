package org.bel.birthdeath.crdeath.enrichment;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.apache.commons.collections4.CollectionUtils;
import org.bel.birthdeath.common.Idgen.IdResponse;
import org.bel.birthdeath.common.repository.IdGenRepository;
import org.bel.birthdeath.common.repository.ServiceRequestRepository;
import org.bel.birthdeath.crdeath.config.CrDeathConfiguration;
import org.bel.birthdeath.crdeath.web.models.AuditDetails;
import org.bel.birthdeath.crdeath.web.models.CrDeathDtl;
import org.bel.birthdeath.crdeath.web.models.CrDeathDtlRequest;
import org.egov.common.contract.request.RequestInfo;
import org.egov.common.contract.request.User;
import org.egov.tracer.model.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import lombok.extern.slf4j.Slf4j;

/**
     * Creates CrDeathEnrichment for UUID ,Audit details and IDGeneration
     * Rakhi S IKM
     * 
     */

@Component
@Slf4j
public class CrDeathEnrichment implements BaseEnrichment{

   
	@Autowired
	IdGenRepository idGenRepository;

    @Autowired
	ServiceRequestRepository serviceRequestRepository;

    @Autowired
	CrDeathConfiguration config;


    public void enrichCreate(CrDeathDtlRequest request) {

        RequestInfo requestInfo = request.getRequestInfo();
        User userInfo = requestInfo.getUserInfo();

        AuditDetails auditDetails = buildAuditDetails(userInfo.getUuid(), Boolean.TRUE);

        request.getDeathCertificateDtls()
               .forEach(deathdtls -> {
                deathdtls.setId(UUID.randomUUID().toString());
                deathdtls.setAuditDetails(auditDetails);
                deathdtls.getStatisticalInfo().setId(UUID.randomUUID().toString());               
             
                // String str = new SimpleDateFormat("dd/MM/yyyy").format(deathdtls.getDateOfDeath() * 1000);
                // System.out.println("DOD Epoc"+str);

                deathdtls.getAddressInfo().get(0).setParentdeathDtlId(deathdtls.getId());
                deathdtls.getAddressInfo().get(0).setAuditDetails(auditDetails);
                deathdtls.getAddressInfo().forEach(addressdtls -> {
                      addressdtls.getPresentAddress().setId(UUID.randomUUID().toString());
                      addressdtls.getPermanentAddress().setId(UUID.randomUUID().toString());
                      addressdtls.getInformantAddress().setId(UUID.randomUUID().toString());
                      addressdtls.getDeathplaceAddress().setId(UUID.randomUUID().toString());
                      addressdtls.getBurialAddress().setId(UUID.randomUUID().toString());                       
                     });
               });
      
    }

    private List<String> getIdList(RequestInfo requestInfo, String tenantId, String idKey,
                                   String idformat, int count) {
        List<IdResponse> idResponses = idGenRepository.getId(requestInfo, tenantId, idKey, idformat, count).getIdResponses();
        
        System.out.println("idResponse"+idResponses);
        if (CollectionUtils.isEmpty(idResponses))
            throw new CustomException("IDGEN ERROR", "No ids returned from idgen Service");

        return idResponses.stream()
                .map(IdResponse::getId).collect(Collectors.toList());
    }
    public void setIdgenIds(CrDeathDtlRequest request) {
        RequestInfo requestInfo = request.getRequestInfo();
        // String tenantId = request.getDeathCertificateDtls().get(0).getTenantId();
        String tenantId = requestInfo.getUserInfo().getTenantId();
        List<CrDeathDtl> deathDtls = request.getDeathCertificateDtls();
        String applNo = getIdList(requestInfo, tenantId, config.getDeathApplnFileCodeName(), config.getDeathApplnFileCodeFormat(), 1).get(0);
        deathDtls.get(0).setDeathApplicationNo(applNo);

        String ackNo = getIdList(requestInfo, tenantId, config.getDeathAckName(), config.getDeathACKFormat(), 1).get(0);
        deathDtls.get(0).setDeathACKNo(ackNo);
    }  
    //UPDATE  BEGIN Jasmine
    public void enrichUpdate(CrDeathDtlRequest request) {

        RequestInfo requestInfo = request.getRequestInfo();
        User userInfo = requestInfo.getUserInfo();
        AuditDetails auditDetails = buildAuditDetails(userInfo.getUuid(), Boolean.FALSE);

        request.getDeathCertificateDtls()
               .forEach(deathDtls -> {
                deathDtls.setAuditDetails(auditDetails);
                deathDtls.getAddressInfo().forEach(addressdtls -> {
                                            addressdtls.setParentdeathDtlId(deathDtls.getId());
                                            addressdtls.setAuditDetails(auditDetails);
                                        });
            
                } );
                
        // try {
        //         ObjectMapper mapper = new ObjectMapper();
        //         Object obj = request;
        //         mapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
        //        System.out.println("Jasmine444 setParentdeathDtlId "+ mapper.writeValueAsString(obj));
        // }catch(Exception e) {
        //     log.error("Exception while fetching from searcher: ",e);
        // }

    }//UPDATE END
    
}
