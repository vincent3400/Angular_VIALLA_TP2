import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreTitreComponent } from './barre-titre.component';

describe('BarreTitreComponent', () => {
  let component: BarreTitreComponent;
  let fixture: ComponentFixture<BarreTitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreTitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
