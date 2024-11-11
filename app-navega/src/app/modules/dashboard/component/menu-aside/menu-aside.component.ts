import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-aside',
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.css']
})
export class MenuAsideComponent {

  menuItems = [
    { label: 'Ver Extrato', icon: 'pi pi-file', route: '/extrato' },
    { label: 'Contribuição Mensal', icon: 'pi pi-wallet', route: '/contribuicao-mensal', active: true },
    { label: 'Contribuição Extra', icon: 'pi pi-money-bill', route: '/contribuicao-extra' },
    { label: 'Documentos', icon: 'pi pi-file-pdf', route: '/documentos' },
    { label: 'Regime de Tributação', icon: 'pi pi-briefcase', route: '/regime-tributacao' },
    { label: 'Solicitar Benefício', icon: 'pi pi-envelope', route: '/solicitar-beneficio' },
    { label: 'Extrato Regressivo', icon: 'pi pi-calendar-times', route: '/extrato-regressivo' },
    { label: 'Informações', icon: 'pi pi-info-circle', route: '/informacoes' }
  ];

  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }

}
