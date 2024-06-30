import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {
  cliente: Cliente = { id_cliente: 0, nombre: '', telefono: '', direccion: '' };

  constructor(private clienteService: ClienteService) {}

  onSubmit(): void {
    if (this.cliente.id_cliente === 0) {
      this.clienteService.createCliente(this.cliente).subscribe(response => {
        console.log('Cliente creado:', response);
      });
    } else {
      this.clienteService.updateCliente(this.cliente.id_cliente, this.cliente).subscribe(response => {
        console.log('Cliente actualizado:', response);
      });
    }
  }
}
