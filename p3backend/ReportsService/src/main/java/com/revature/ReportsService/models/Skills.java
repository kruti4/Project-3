package com.revature.ReportsService.models;

public class Skills {
  
  private Integer skillId;
  private String skillName;
  
  public Skills(Integer skillId, String skillName) {
    super();
    this.skillId = skillId;
    this.skillName = skillName;
  }
  
  public Integer getSkillId() {
    return skillId;
  }
  public void setSkillId(Integer skillId) {
    this.skillId = skillId;
  }
  public String getSkillName() {
    return skillName;
  }
  public void setSkillName(String skillName) {
    this.skillName = skillName;
  }

  

}
