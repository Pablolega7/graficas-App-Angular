import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [//'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
];

  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100]
  ];

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[]=[
    {backgroundColor:["#6AADF7","#6EE0B5","#EDD76B","#ED3E2D"]}
  ];

  constructor(private graficasServices:GraficasService) { }

  ngOnInit(): void {
    this.graficasServices.getUsuariosRedesSocialesDonaData()
    .subscribe(({values,labels})=>{
      this.doughnutChartData.push(values);
      this.doughnutChartLabels=labels;
    });
  };
 };
