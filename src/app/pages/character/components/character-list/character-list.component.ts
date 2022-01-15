import { CharacterListService } from '../../service/character-list.service';
import { Component, OnInit } from '@angular/core';
import { IcharacterList } from '../../models/icharacterList';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  public characterList: IcharacterList[] = [];
  constructor(private characterListService: CharacterListService) { }

  ngOnInit(): void {
   // debugger
    this.recoverList();
  }

  public recoverList() {
    this.characterListService.getCharacters().subscribe((data: any) => {
      const results: IcharacterList[] = data.results;
      const formattedResults = results.map(({ name, image }) => ({
        name,
        image,
      }));
      this.characterList = formattedResults;
    });
  }
}
