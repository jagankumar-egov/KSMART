package org.bel.birthdeath.crbirth.repository;

import lombok.extern.slf4j.Slf4j;
import org.bel.birthdeath.common.producer.BndProducer;
import org.bel.birthdeath.config.BirthDeathConfiguration;
import org.bel.birthdeath.crbirth.enrichment.birth.BirthDetailsEnrichment;
import org.bel.birthdeath.crbirth.model.BirthDetail;
import org.bel.birthdeath.crbirth.model.BirthDetailsRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Slf4j
@Repository
public class CrBirthRepository {
    @Autowired
    BirthDetailsEnrichment birthDetailsEnrichment;

    @Autowired
    BndProducer producer;

    @Autowired
    BirthDeathConfiguration config;

    public List<BirthDetail> saveBirthDetails(BirthDetailsRequest request) {
        birthDetailsEnrichment.enrichCreate(request);
        producer.push(config.getSaveBirthDetailsTopic(), request);
        return request.getBirthDetails();
    }


    public List<BirthDetail> updateBirthDetails(BirthDetailsRequest request) {
        birthDetailsEnrichment.enrichUpdate(request);
        producer.push(config.getUpdateBirthDetailsTopic(), request);
        return request.getBirthDetails();
    }
}
