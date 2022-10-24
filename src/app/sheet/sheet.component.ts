import { Component, Input, OnInit } from '@angular/core';
import { Formatter, Stave, StaveNote, Vex } from 'vexflow';
import { Note } from '../note';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {

  @Input()
  quiz: Note[] = [];

  stave: any;
  context: any;

  constructor() { }

  ngOnInit(): void {
  }

  private staveDraw() {
    const VF = Vex.Flow;
    const renderer = new VF.Renderer("sheet", VF.Renderer.Backends.SVG);
    renderer.resize(200, 100);
    this.context = renderer.getContext();
    this.context.setFont("Arial", 10);

    this.stave = new Stave(5, -10, 190);
    this.stave.addClef("treble").addTimeSignature("4/4");

    // this.staveDraw();
    let staveNotes: StaveNote[] = this.generateStaveNotes(this.quiz);

    // const staveNotes = [
    //   new StaveNote({ keys: ["c/4"], duration: "q" }),
    //   new StaveNote({ keys: ["d/4"], duration: "q" }),
    //   new StaveNote({ keys: ["e/4"], duration: "q" }),
    //   new StaveNote({ keys: ["f/4"], duration: "q" }),
    //   // new StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" }),
    // ];
    // Helper function to justify and draw a 4/4 voice.
    Formatter.FormatAndDraw(this.context, this.stave, staveNotes);

    // Connect it to the rendering context and draw!
    this.stave.setContext(this.context).draw();
    console.log("draw !")
  }

  ngOnChanges() {
    console.log("change detected !")
    this.deletePrevious();
    this.staveDraw();
  }

  deletePrevious() {
    const staff = document.getElementById('sheet');
    while (staff?.hasChildNodes()) {
      let child = staff.lastChild
      if(child !=null)
        staff.removeChild(child);
    }
  }


  generateStaveNotes(quiz: Note[]): StaveNote[] {
    let staveNotes = [];
    for (let note of quiz) {
      let staveNote = new StaveNote({ keys: [note.getEnglishName() + "/4"], duration: "q" })
      staveNotes.push(staveNote);
    }
    return staveNotes;
  }

}
