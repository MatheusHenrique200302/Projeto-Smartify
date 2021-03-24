import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesFilmesComponent } from './detalhesFilmes.component';

describe('DetalhesComponent', () => {
  let component: DetalhesFilmesComponent;
  let fixture: ComponentFixture<DetalhesFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
