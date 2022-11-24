package org.bel.birthdeath.crbirth.controller;


import lombok.extern.slf4j.Slf4j;
import org.bel.birthdeath.crbirth.model.BirthDetail;
import org.bel.birthdeath.crbirth.model.BirthDetailsRequest;
import org.bel.birthdeath.crbirth.service.CrBirthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/common")
public class CrBirthController {

    @Autowired
    CrBirthService crBirthService;

    @PostMapping(value = { "/_create"})
    public ResponseEntity<?> saveBirthDetails(@RequestBody BirthDetailsRequest request) {
        List<BirthDetail> birthDetails = crBirthService.saveBirthDetails(request);
        return new ResponseEntity<>(birthDetails, HttpStatus.OK);
    }

    @PostMapping(value = { "/_update"})
    public ResponseEntity<?> updateBirthDetails(@RequestBody BirthDetailsRequest request) {
        List<BirthDetail> birthDetails = crBirthService.updateBirthDetails(request);
        return new ResponseEntity<>(birthDetails, HttpStatus.OK);
    }
}
