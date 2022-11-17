package org.egov.tlcalculator.repository.rowmapper;

import java.math.BigDecimal;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

import org.egov.tlcalculator.web.models.AuditDetails;
import org.egov.tlcalculator.web.models.demand.TaxHeadEstimate;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;

@Component
public class AccHeadRowMapper implements ResultSetExtractor<List<TaxHeadEstimate>> {

	/**
	 * Rowmapper that maps every column of the search result set to a key in the model.
	 */
	@Override
	public List<TaxHeadEstimate> extractData(ResultSet rs) throws SQLException, DataAccessException {
		Map<String, TaxHeadEstimate> taxHeadMap = new HashMap<>();
		while (rs.next()) {
			String currentId = rs.getString("id");
			TaxHeadEstimate currentHead = taxHeadMap.get(currentId);
			if (null == currentHead) {
				AuditDetails auditDetails = AuditDetails.builder().createdBy(rs.getString("createdby"))
						.createdTime(rs.getLong("createdtime")).lastModifiedBy(rs.getString("lastmodifiedby"))
						.lastModifiedTime(rs.getLong("lastmodifiedtime")).build();

					currentHead = TaxHeadEstimate.builder().id(rs.getString("id"))
						.taxHeadCode(rs.getString("headcode"))
						.headname(rs.getString("headname"))
						.type(rs.getString("type"))
						.rate(rs.getBigDecimal("rate")).build();

					taxHeadMap.put(currentId, currentHead);
			}

		}

		return new ArrayList<>(taxHeadMap.values());

	}

}
