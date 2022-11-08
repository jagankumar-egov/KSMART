package org.bel.birthdeath.common.model;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.Size;

/**
 * Collection of audit related fields used by most models
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuditDetails {

  @Size(max = 64)
  @JsonProperty("createdBy")
  private String createdBy;

  @Size(max = 64)
  @JsonProperty("lastModifiedBy")
  private String lastModifiedBy;

  @JsonProperty("createdTime")
  private Long createdTime;

  @JsonProperty("lastModifiedTime")
  private Long lastModifiedTime;

}
