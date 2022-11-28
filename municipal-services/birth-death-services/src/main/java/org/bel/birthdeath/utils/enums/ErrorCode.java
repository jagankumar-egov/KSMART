package org.bel.birthdeath.utils.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    // Birth Details
    BIRTH_DETAILS_REQUIRED("REQUIRED"),
    BIRTH_DETAILS_NOT_FOUND("NOT_FOUND"),
    BIRTH_DETAILS_INVALID_SEARCH_CRITERIA("INVALID_CRITERIA"),
    BIRTH_DETAILS_INVALID_UPDATE("INVALID_UPDATE");
    private String code;
}
