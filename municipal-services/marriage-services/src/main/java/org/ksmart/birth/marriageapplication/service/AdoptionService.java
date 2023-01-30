package org.ksmart.birth.marriageapplication.service;

import lombok.extern.slf4j.Slf4j;
import org.ksmart.birth.marriageapplication.model.AdoptionDetail;
import org.ksmart.birth.marriageapplication.model.adoption.AdoptionRequest;
import org.ksmart.birth.marriageapplication.repository.AdoptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class AdoptionService {
    private final AdoptionRepository adoptionRepository;
    @Autowired
    AdoptionService(AdoptionRepository adoptionRepository) {
        this.adoptionRepository = adoptionRepository;
    }

    public List<AdoptionDetail> saveAdoptionDetails(AdoptionRequest request) {
        return adoptionRepository.saveAdoptionDetails(request);
    }

    public List<AdoptionDetail> updateAdoptionDetails(AdoptionRequest request) {
        return adoptionRepository.updateAdoptionDetails(request);
    }
}
