package org.bel.birthdeath.crdeath.repository.rowmapper;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.bel.birthdeath.crdeath.web.models.CrDeathDtl;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;


@Component
public class CrDeathRowMapper implements ResultSetExtractor<List<CrDeathDtl>>, BaseRowMapper {

    @Override
    public List<CrDeathDtl> extractData(ResultSet rs) throws SQLException, DataAccessException { // NOPMD

        List<CrDeathDtl> result = new ArrayList<>();
        while (rs.next()) {
            result.add(CrDeathDtl.builder()
                                        .id(rs.getString("id"))
                                        .deathApplicationNo(rs.getString("application_number"))
                                        .fileNumber(rs.getString("file_number"))
                                        .tenantId(rs.getString("tenantid"))
                                        .auditDetails(getAuditDetails(rs))
                                        .build());
        }
        return result;
    }    
}
