import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameSettingsDto } from '../dtos/game-settings.dto';
import { WriteGameMode } from '../enums/write-game-mode.enum';

@Component({
	selector: 'app-write-game',
	templateUrl: './write-game.component.html',
	styleUrls: ['./write-game.component.css']
})
export class WriteGameComponent {
	settings: GameSettingsDto = new GameSettingsDto();
	mode = WriteGameMode.easy;

	gameModes = WriteGameMode;

	constructor(
		private router: Router
	) { }

	startGame() {
		this.router.navigate(['write', `${WriteGameMode[this.mode]}`],
			{
				state: {
					settings: this.settings
				}
			});
	}
}