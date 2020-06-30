package com.revature.ReportsService.models;

import java.time.LocalDate;

public class Batch {

	private Integer batchId;
	private Integer curriculumId;
	private LocalDate startDate;
	private LocalDate endDate;
	private Boolean isConfirmed;
	private Integer interviewScoreLower;
	private Integer locationId;

	public Batch(Integer batchId, Integer curriculumId, LocalDate startDate, LocalDate endDate,
      Boolean isConfirmed, Integer interviewScoreLower, Integer locationId) {
    super();
    this.batchId = batchId;
    this.curriculumId = curriculumId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.isConfirmed = isConfirmed;
    this.interviewScoreLower = interviewScoreLower;
    this.locationId = locationId;
  }

  public Integer getBatchId() {
		return batchId;
	}

	public void setBatchId(Integer batchId) {
		this.batchId = batchId;
	}

	public String getCurriculumId() {
		return curriculumId;
	}

	public void setCurriculumId(String curriculumId) {
		this.curriculumId = curriculumId;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public Boolean getIsConfirmed() {
		return isConfirmed;
	}

	public void setIsConfirmed(Boolean isConfirmed) {
		this.isConfirmed = isConfirmed;
	}

	public Integer getInterviewScoreLower() {
		return interviewScoreLower;
	}

	public void setInterviewScoreLower(Integer interviewScoreLower) {
		this.interviewScoreLower = interviewScoreLower;
	}

	public Integer getLocationId() {
		return locationId;
	}

	public void setLocationId(Integer locationId) {
		this.locationId = locationId;
	}



}
