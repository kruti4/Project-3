package com.revature.DataService.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.DataService.models.Skills;
import com.revature.DataService.models.TrainerBatch;
import com.revature.DataService.models.TrainerBatchIdentity;

@Repository
public interface TrainerBatchRepository extends JpaRepository<TrainerBatch, Integer> {

}
