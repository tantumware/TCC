import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CapsulaComponent } from '../../components/capsula/capsula';

@IonicPage()
@Component({
  selector: 'page-define-constraints',
  templateUrl: 'define-constraints.html',
})
export class DefineConstraintsPage {

  passo: string = '1';

  testCheckboxOpen = false;
  testCheckboxResult: any;


  testRadioOpen = false;
  testRadioResult: any;

  private botao: string = this.passo == "3" ? "Gerar grade de horários" : "Próximo Passo";

  private  periodosSelected: string[];

  @ViewChild (CapsulaComponent) capsulaComponent;

  busca: string;

  structure = {
    lower: 20,
    upper: 30
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  }

  onPeriodoSelected(event: string[]) {
    this.periodosSelected = event;
  }

  searchMateria(): void {
    console.log(this.busca);
    this.doCheckbox(this.busca);
  }

  getClass(passo: string): string {
    if (this.passo == passo) {
      return "passo";
    } else {
      return "passo passo-hidden";
    }
  }

  onPassoChanged(event: any): void {
    if (this.passo == '1'){
      // this.capsulaComponent.periodos = ['Manhã', 'Tarde', 'Noite'];
    }
    this.botao = this.passo == "3" ? "Gerar grade de horários" : "Próximo Passo";
  } 

  btnProximoPassoClicked(): void {
    if (this.passo == '3') {
      this.navCtrl.push('ResultadoPage');
    } else {
      this.passo = (Number(this.passo) + 1).toString();    
    }
  }

  doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red'
    });

    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow'
    });

    alert.addInput({
      type: 'radio',
      label: 'Purple',
      value: 'purple'
    });

    alert.addInput({
      type: 'radio',
      label: 'White',
      value: 'white'
    });

    alert.addInput({
      type: 'radio',
      label: 'Black',
      value: 'black'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present();
  }

  doCheckbox(search: string) {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
        type: 'checkbox',
        label: search,
        value: 'value1',
        checked: true
    });

    alert.addInput({
        type: 'checkbox',
        label: search,
        value: 'value2'
    });

    alert.addInput({
        type: 'checkbox',
        label: search,
        value: 'value3'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Endor',
        value: 'value4'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Hoth',
        value: 'value5'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Jakku',
        value: 'value6'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Naboo',
        value: 'value6'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Takodana',
        value: 'value6'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Tatooine',
        value: 'value6'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: (data: any) => {
          console.log('Checkbox data:', data);
          this.testCheckboxOpen = false;
          this.testCheckboxResult = data;
      }
    });

    alert.present();
  }


}
