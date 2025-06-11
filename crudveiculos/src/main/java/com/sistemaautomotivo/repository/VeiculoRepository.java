package com.sistemaautomotivo.repository;

import com.sistemaautomotivo.model.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {
    List<Veiculo> findByMarcaContainingIgnoreCase(String marca);
    List<Veiculo> findByModeloContainingIgnoreCase(String modelo);

}
