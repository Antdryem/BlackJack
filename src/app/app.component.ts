import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dealerScore: string = "Dealer 0";
  playerScore: string = "Player 0";
  dealerCurrentScore: string = "-";
  playerCurrentScore: string = "-";
  statusMessage: string = "Message for Player";
  playerCash: number = 100;
  betAmount: number = 0;

  deal() {
    // Implement deal logic here
  }

  hit() {
    // Implement hit logic here
  }

  stand() {
    // Implement stand logic here
  }

  placeBet() {
    // Implement bet placement logic here
  }
}
