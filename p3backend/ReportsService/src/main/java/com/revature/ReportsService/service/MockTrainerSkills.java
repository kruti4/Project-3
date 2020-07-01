package com.revature.ReportsService.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.revature.ReportsService.models.TrainerSkills;

@Service
public class MockTrainerSkills {

	private List<TrainerSkills> trainerSkills;

	public MockTrainerSkills() {
		super();
	}

	public List<TrainerSkills> getTrainerSkillsAll() {
		return trainerSkills;
	}

	public List<Integer> getTrainerSkillsById(Integer id) {

		List<Integer> out = null;
		for (TrainerSkills i : trainerSkills) {
			if (i.getTrainerId().equals(id)) {
				out.add(i.getSkillsetId());
			}
		}
		if (out == null) {
			throw new RuntimeException("batches for trainer with  id " + id + " not found");
		}
		return out;
	}

}
