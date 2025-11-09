import { Component, inject } from '@angular/core';
import { Northwind } from './services/northwind';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule,FormsModule, CurrencyPipe],
  templateUrl: './app.html',
})
export class App {
  private northwind = inject(Northwind);

  products: any[] = [];
  filterText: string='';

 constructor() {
  this.northwind.getProducts().subscribe({
    next: (response) => {
      this.products = response.data;
      console.log('Prodotti ricevuti:', this.products.length);
    },
    error: (err) => {
      console.error('Errore nel recupero dei prodotti:', err);
    },
  });
}

get filteredProducts(): any[] {
  return this.products?.filter(p =>
    p.productName?.toLowerCase().includes(this.filterText.toLowerCase())
  ) ?? [];
}


}
