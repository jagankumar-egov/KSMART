package org.bel.birthdeath.crdeath.web.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
     * Creates Error codes 
     * Rakhi S IKM
     * 
     */

@Getter
@AllArgsConstructor
public enum ErrorCodes {

     // Idgen Service
     IDGEN_ERROR("IDGEN_ERROR"),

      //create
     DEATH_REG_REQUIRED("REQUIRED"),
     DEATH_REG_NOT_FOUND("NOT_FOUND"),
     DEATH_REG_INVALID_CREATE("INVALID_CREATE"),
     
     //Update 
     DEATH_REG_INVALID_UPDATE("INVALID_UPDATE"),

     // Search
      INVALID_SEARCH("INVALID_SEARCH"),

     // Mdms Service
     MDMS_DATA_ERROR("MDMS_DATA_ERROR"),
     MDMS_INVALID_TENANT_ID("INVALID_TENANTID");

     private String code;
}
