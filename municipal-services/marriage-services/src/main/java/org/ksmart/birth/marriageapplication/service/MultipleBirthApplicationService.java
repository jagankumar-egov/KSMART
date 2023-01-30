package org.ksmart.birth.marriageapplication.service;

import lombok.extern.slf4j.Slf4j;
import org.ksmart.birth.marriageapplication.model.BirthApplicationDetail;
import org.ksmart.birth.marriageapplication.model.birth.BirthDetailsRequest;
import org.ksmart.birth.marriageapplication.repository.BirthApplicationRepository;
import org.ksmart.birth.marriageapplication.validator.MdmsValidator;
import org.ksmart.birth.marriageapplication.validator.MultipleBirthApplicationValidator;
import org.ksmart.birth.utils.MdmsUtil;
import org.ksmart.birth.workflow.WorkflowIntegrator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Slf4j
@Service
public class MultipleBirthApplicationService {

    private final BirthApplicationRepository repository;
    private final WorkflowIntegrator workflowIntegrator;
    private final MdmsUtil mdmsUtil;
    private final MdmsValidator mdmsValidator;

    private final MultipleBirthApplicationValidator applicationValidator;

    @Autowired
    MultipleBirthApplicationService(BirthApplicationRepository repository, WorkflowIntegrator workflowIntegrator, MdmsUtil mdmsUtil,
                                    MdmsValidator mdmsValidator, MultipleBirthApplicationValidator applicationValidator) {
        this.repository = repository;
        this.workflowIntegrator = workflowIntegrator;
        this.mdmsUtil = mdmsUtil;
        this.mdmsValidator = mdmsValidator;
        this.applicationValidator = applicationValidator;
    }


    public List<BirthApplicationDetail> saveBirthDetails(BirthDetailsRequest request) {


        // validate mdms data
        Object mdmsData = mdmsUtil.mdmsCall(request.getRequestInfo());

        //  validate request
        applicationValidator.validateCreate(request, mdmsData);

        //  workflowIntegrator.callWorkFlow(request);
        return repository.saveBirthDetails(request);
    }
}
