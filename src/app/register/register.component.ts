import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  writerForm: FormGroup;

  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.writerForm = new FormGroup({
      nome: new FormControl(),
      sobre: new FormControl(),
      img: new FormControl(),
      obras: new FormArray([]),
    });
  }

  registerWriter() {

    const nome = this.writerForm.get('nome').value;
    const sobre = this.writerForm.get('sobre').value;
    const img = this.writerForm.get('img').value;
    const obras = [];
    this.getObras().controls.forEach((group) => {
      const titulo = group.get('titulo').value;
      const ano = group.get('ano').value;
      const obra = { titulo, ano };
      obras.push(obra);
    });
    const autor = { nome, sobre, img, obras };

    this.libraryService.postWriters(autor).subscribe(() => window.alert('Autor registrado com sucesso!'));
    
  }

  getObras(): FormArray {
    return this.writerForm.get('obras') as FormArray;
  }

  addObra() {
    const obraForm: FormGroup = new FormGroup({
      titulo: new FormControl(),
      ano: new FormControl(),
    });

    this.getObras().push(obraForm);
    console.log(this.getObras());
  }

  removeObra(index: number) {
    this.getObras().removeAt(index);
  }
}
