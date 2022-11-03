package org.bel.birthdeath.common.producer;

import org.egov.tracer.kafka.CustomKafkaTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class BndProducer {

	@Autowired
	private CustomKafkaTemplate<String, Object> kafkaTemplate;

	public void push(String topic, Object value) {
		
		 /********************************************* */
		System.out.println("TopicDet"+topic);
         try {
                 ObjectMapper mapper = new ObjectMapper();
                 Object obj = value;
                 mapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
                System.out.println("rakhi "+ mapper.writeValueAsString(obj));
         }catch(Exception e) {
             log.error("Exception while fetching from searcher: ",e);
         }

        /********************************************** */
		
            kafkaTemplate.send(topic, value);
	}
}
