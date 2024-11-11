import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexLegend, ApexPlotOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data = [
    {
      id: 1,
      nome: 'Contribuição mensal',
      valor: 499999.99
    },
    {
      id: 2,
      nome: 'Contribuição voluntária',
      valor: 499999.99
    }
  ];

  cards = [
    {
      nomeContribuicao: 'Contribuição mensal',
      valorContribuicao: 500,
      porcentagemSalario: 5
    },
    {
      nomeContribuicao: 'Contribuição voluntária',
      valorContribuicao: 500,
      porcentagemSalario: 0
    }
  ];

  chartData = {
    series: this.data.map((item: { valor: any; }) => item.valor),
    chart: {
      type: 'donut',
      height: 200,
    } as ApexChart,
    labels: this.data.map((item: { nome: any; }) => item.nome),
    colors: ['#ff4560', '#775dd0'],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total em contribuições',
              formatter: () => "R$ 999.999,99",
            }
          }
        }
      }
    } as ApexPlotOptions,
    dataLabels: {
      enabled: false // Desativa a exibição de valores e porcentagens dentro do gráfico
    } as ApexDataLabels,
    legend: {
      show: false // Esconde a legenda completamente
    } as ApexLegend
  };

  constructor() { }

  ngOnInit() {
  }
}
