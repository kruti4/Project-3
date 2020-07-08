package com.revature.DataService.repositories;

import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.DataService.models.Consent;

@Repository
public interface ConsentRepository extends JpaRepository<Consent, Integer> {

    Optional<Consent> findById(Integer consentId);
    
    @Query(value="SELECT * FROM  project3.consent WHERE (consent_approved is null and trainer_id = :trainerId)", nativeQuery=true)
    List<Consent> getConsentsByTrainerId(Integer trainerId);
    
    @Modifying
    @Transactional
    @Query(value="INSERT INTO project3.consent(consent_id, trainer_id, batch_id, consent_approved) VALUES (default, ?, ?, null)", nativeQuery=true)
    void createConsent(Integer trainerId, Integer batchId);

  
  
  @Query(value = "select consent_id, trainer_id, batch_id, consent_approved from project3.consent where trainer_id = :id and consent_approved is null", nativeQuery=true)
  List<Consent> getConsentByTrainerId(Integer id);
  
//  @Query("select c from Consent c where c.isApprovedColumn is null") // HQL
//  List<Consent> getConsentByTrainerId(Integer id);

}
