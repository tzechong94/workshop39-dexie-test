import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  form!: FormGroup

  constructor(private fb: FormBuilder, private charSvc: CharacterService
    , private router: Router){}

  ngOnInit(): void {
      this.form = this.createForm()
  }

  createForm() {
    return this.fb.group({
      searchInput: this.fb.control<string>('', Validators.required)
    })
  }

  search() {
    this.charSvc.characterSearched = this.form.value.searchInput
    this.router.navigate(["list"])
  }

}
