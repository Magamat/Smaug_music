import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-round-keys',
  templateUrl: './round-keys.component.html',
  styleUrls: ['./round-keys.component.scss']
})
export class RoundKeysComponent implements OnInit {

  @Output() keyChange = new EventEmitter<string>();

  topRowKeys : string[] = [ "Re♭", "Mi♭", "space", "Sol♭", "La♭", "Si♭"]
  bottomRowKeys : string[] = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"]
  sampler : any;


  constructor() {

   }

  ngOnInit(): void {
  }

  keyClicked(key : string) {
    console.log(key)
    this.keyChange.emit(key);
  }

  triggerSound() {

  }

}
