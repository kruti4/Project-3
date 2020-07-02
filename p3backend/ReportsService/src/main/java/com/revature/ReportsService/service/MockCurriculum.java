package com.revature.ReportsService.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.revature.ReportsService.models.Curriculum;

@Service
public class MockCurriculum {

  private List<Curriculum> curricula;

  public MockCurriculum() {
    super();
  }

  public List<Curriculum> getCurricula() {
    return curricula;
  }

  public Curriculum getCurriculumById(Integer id) {
    Curriculum out = null;
    for (Curriculum c : this.curricula) {
      if (c.getCurriculumId().equals(id)) {
        out = c;
        break;
      }
    }
    if (out == null) {
      throw new RuntimeException("Curriculum with the id " + id + " not found");
    }
    return out;
  }


}
