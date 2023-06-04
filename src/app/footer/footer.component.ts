import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year!: number;

  messagesAboutQuitingSmoking:string[] = [
    'Após 20 minutos sua pressão sangüínea e a pulsação voltam ao normal.',
    'Após 2 horas não tem mais nicotina no seu sangue.',
    'Após 8 horas o nível de oxigênio no sangue e normaliza.',
    'Após 2 dias seu olfato já percebe melhor os cheiros e você já degusta melhor a comida.',
    'Após 3 semanas a respiração fica mais fácil e a circulação melhora.',
    'Após 5 a 10 anos o risco de sofrer infarto será igual ao de quem nunca fumou.',
  ]

  constructor(){}

  pickRandomMessage(){
    const randomNumber = Math.floor(Math.random() * this.messagesAboutQuitingSmoking.length);
    return this.messagesAboutQuitingSmoking[randomNumber];
  }
}
