package org.egov.tlcalculator.repository;

import java.util.ArrayList;
import java.util.List;

import org.egov.tlcalculator.repository.rowmapper.AccHeadRowMapper;
import org.egov.tlcalculator.web.models.demand.TaxHeadEstimate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.util.CollectionUtils;

import lombok.extern.slf4j.Slf4j;

@Repository
@Slf4j
public class AccHeadRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private AccHeadRowMapper accHeadRowMapper;
	
	/**
	 * Queries the db with search query using a connection abstracted within the jdbctemplate.
	 * @param query
	 * @param preparedStmtList
	 * @return List<BillingSlab>
	 */
	public List<TaxHeadEstimate> getDataFromDB(String query, List<Object> preparedStmtList){
		List<TaxHeadEstimate> heads = new ArrayList<>();
		
		try {
			heads = jdbcTemplate.query(query, preparedStmtList.toArray(), accHeadRowMapper);
			
			if(CollectionUtils.isEmpty(heads))
				return new ArrayList<>();
		}catch(Exception e) {
			log.error("Exception while fetching from DB: " + e);
			return heads;
		}

		return heads;
	}

}