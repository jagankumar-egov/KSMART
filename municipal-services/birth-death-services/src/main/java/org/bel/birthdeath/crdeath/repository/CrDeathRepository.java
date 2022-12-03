package org.bel.birthdeath.crdeath.repository;
import java.util.ArrayList;
import java.util.List;


import org.bel.birthdeath.crdeath.repository.querybuilder.CrDeathQueryBuilder;
import org.bel.birthdeath.crdeath.repository.rowmapper.CrDeathRowMapper;
//import org.bel.birthdeath.crdeath.repository.rowmapper.ApplicantPersonalRowMapper;
import org.bel.birthdeath.crdeath.web.models.CrDeathDtl;
import org.bel.birthdeath.crdeath.web.models.CrDeathSearchCriteria;
//import org.bel.birthdeath.crdeath.web.models.ApplicantPersonalSearchCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository

public class CrDeathRepository {
    

    private final JdbcTemplate jdbcTemplate;
    private final CrDeathQueryBuilder queryBuilder;
    private final CrDeathRowMapper rowMapper;

    @Autowired
    CrDeathRepository( CrDeathQueryBuilder queryBuilder ,JdbcTemplate jdbcTemplate,CrDeathRowMapper rowMapper)

    {
        this.queryBuilder = queryBuilder;
        this.jdbcTemplate = jdbcTemplate;     
        this.rowMapper = rowMapper;
   }

    public List<CrDeathDtl> getDeathDetails(CrDeathSearchCriteria criteria) {
        List<Object> preparedStmtValues = new ArrayList<>();
        String query = queryBuilder.getDeathDetailsSearchQuery(criteria, preparedStmtValues, Boolean.FALSE);

        List<CrDeathDtl> result = jdbcTemplate.query(query, preparedStmtValues.toArray(), rowMapper);

        return result; // NOPMD
    }
    
}
