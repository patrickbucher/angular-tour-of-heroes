import { Component, OnInit, Input } from '@angular/core';
import { NgIf, UpperCasePipe } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [
    FormsModule,
    NgIf,
    UpperCasePipe
  ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
