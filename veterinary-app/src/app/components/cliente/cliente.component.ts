import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data: Cliente[]) => {
      this.clientes = data;
    });
  }

  editCliente(id: number): void {
    // Implementar lógica para editar cliente
  }

  deleteCliente(id: number): void {
    this.clienteService.deleteCliente(id).subscribe(() => {
      this.clientes = this.clientes.filter(cliente => cliente.id_cliente !== id);
    });
  }
}
