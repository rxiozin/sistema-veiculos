package com.sistemaautomotivo.controller;

import com.sistemaautomotivo.model.Veiculo;
import com.sistemaautomotivo.service.VeiculoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/veiculos")
public class VeiculoController {

    private final VeiculoService service;

    public VeiculoController(VeiculoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Veiculo> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Veiculo> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Veiculo criar(@RequestBody Veiculo veiculo) {
        return service.salvar(veiculo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Veiculo> atualizar(@PathVariable Long id, @RequestBody Veiculo v) {
        return service.buscarPorId(id).map(veiculo -> {
            veiculo.setMarca(v.getMarca());
            veiculo.setModelo(v.getModelo());
            veiculo.setAno(v.getAno());
            veiculo.setCor(v.getCor());
            veiculo.setPreco(v.getPreco());
            veiculo.setQuilometragem(v.getQuilometragem());
            veiculo.setStatus(v.getStatus());
            return ResponseEntity.ok(service.salvar(veiculo));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (service.buscarPorId(id).isPresent()) {
            service.deletar(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
