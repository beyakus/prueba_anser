import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotTextComponent } from './dot-text.component';

describe('DotTextComponent', () => {
  let component: DotTextComponent;
  let fixture: ComponentFixture<DotTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
