import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificGifComponent } from './specific-gif.component';

describe('SpecificGifComponent', () => {
  let component: SpecificGifComponent;
  let fixture: ComponentFixture<SpecificGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificGifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
