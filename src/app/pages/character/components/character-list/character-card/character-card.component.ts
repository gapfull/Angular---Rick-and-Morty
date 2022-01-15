import { Component, Input, OnInit } from '@angular/core';
import { IcharacterList } from '../../../models/icharacterList';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})

export class CharacterCardComponent implements OnInit {
  @Input() public character!: IcharacterList;
  constructor() {}
  ngOnInit(): void {}
}
