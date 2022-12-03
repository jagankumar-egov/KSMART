package org.bel.birthdeath.crdeath.repository.querybuilder;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.bel.birthdeath.crdeath.web.models.CrDeathSearchCriteria;
import org.springframework.stereotype.Component;
//public class CrDeathQueryBuilder {


@Component
public class CrDeathQueryBuilder extends BaseQueryBuilder {
    private static final String QUERY = new StringBuilder().append("SELECT distinct dd.id, dd.registrationunit, dd.tenantid, dd.application_number, dd.file_number, dd.correct_death_date_known, dd.dateofdeath, dd.time_of_death, dd.timeofdeath_unit, dd.date_of_death_1, dd.time_of_death_1, dd.timeofdeath_unit1, dd.deceased_identified, dd.deceased_title, dd.deceased_firstname_en, dd.deceased_firstname_ml, dd.deceased_middlename_en, dd.deceased_middlename_ml, dd.deceased_lastname_en, dd.deceased_lastname_ml, dd.deceased_aadhar_submitted, dd.deceased_aadhar_number, dd.deceased_gender, dd.age, dd.age_unit, dd.dateofbirth, dd.death_place, dd.death_place_type, dd.death_place_inst_id, dd.death_place_office_name, dd.death_place_other_ml, dd.death_place_other_en, dd.informant_title, dd.informant_name_en, dd.informant_name_ml, dd.informant_aadhar_submitted, dd.informant_aadhar_no, dd.informant_mobile_no, dd.general_remarks, dd.application_status")
                                                           .append(" , dd.created_by as createdby, dd.createdtime, dd.lastmodifiedby, dd.lastmodifiedtime")
                                                           .append(" FROM eg_death_dtls dd")
                                                           .append(" INNER JOIN eg_death_statistical_dtls dsd ON dsd.death_dtl_id = dd.id")
                                                           .append(" INNER JOIN eg_death_address_dtls dad ON dad.death_dtl_id = dd.id")
                                                        //    .append(" INNER JOIN eg_fm_applicantservicedocument asd ON asd.applicantpersonalid = ap.id")
                                                        //    .append(" INNER JOIN eg_fm_servicedetail sd ON sd.applicantpersonalid = ap.id")
                                                        //    .append(" INNER JOIN eg_fm_filedetail fd ON fd.servicedetailsid = sd.id")
                                                           .toString();

    public String getDeathDetailsSearchQuery(@NotNull CrDeathSearchCriteria criteria,
                                                  @NotNull List<Object> preparedStmtValues, Boolean isCount) {

        StringBuilder query = new StringBuilder(QUERY);
System.out.println("Jasmine Query"+query);
        addFilter("dd.id", criteria.getId(), query, preparedStmtValues);
        addFilter("dd.application_number", criteria.getApplicationNumber(), query, preparedStmtValues);
        addFilter("dd.file_number", criteria.getFileNumber(), query, preparedStmtValues);
        // addDateRangeFilter("fd.filearisingdate",
        //                    criteria.getFromDate(),
        //                    criteria.getToDate(),
        //                    query,
        //                    preparedStmtValues);

//        if (criteria.getFromDate() != null) {
//            addWhereClause(preparedStmtValues, query);
//            query.append(" fd.filearisingdate >= ?");
//            preparedStmtValues.add(criteria.getFromDate());
//        }

        return query.toString();
    }
    
}
