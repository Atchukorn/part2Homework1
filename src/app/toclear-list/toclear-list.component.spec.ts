import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToclearListComponent } from './toclear-list.component';

describe('ToclearListComponent', () => {
  let component: ToclearListComponent;
  let fixture: ComponentFixture<ToclearListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToclearListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToclearListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
