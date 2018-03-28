import { Estatistica } from './../../models/estatistica';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chart } from 'chart.js';
import { EstatisticaProvider } from '../../providers/estatistica/estatistica';


@IonicPage()
@Component({
    selector: 'page-estatisticas',
    templateUrl: 'estatisticas.html',
})
export class EstatisticasPage {

    @ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('lineCanvas') lineCanvas;

    doughnutChart: any;
    lineChart: any;

    private estatistic: Estatistica;

    passo: string = '1';

    constructor(public navCtrl: NavController, public navParams: NavParams, public estatisticaProvider: EstatisticaProvider) {
        estatisticaProvider.getEstatisticas().subscribe(e => {
            this.estatistic = e;
            this.showDoughnutChart();
            this.showLineChart();
            console.log(e);
        });
    }

    ionViewDidLoad() {        
    }

    onPassoChanged() {
    }
    
    showLineChart() {
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    
            type: 'line',
            data: {
                labels: this.estatistic.semesters,
                datasets: [
                    {
                        label: "Seu IA",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.estatistic.semestersIA,
                        spanGaps: false,
                    },
                    {
                        label: "IA médio do curso",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.estatistic.courseIA,
                        spanGaps: false,
                    }
    
                ]
            }
    
        });        
    }

    showDoughnutChart() {
        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ["Semestres restantes", "Semestres cursados"],
                datasets: [{
                    label: '# of Votes',
                    data: [this.estatistic.semestresRestantes, this.estatistic.semesters.length],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ]
                }]
            }

        });
    }

    getClass(p: string): string {
        return this.passo == p ? "" : "passo-hidden";;
    }

}
