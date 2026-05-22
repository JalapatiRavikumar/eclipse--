import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfWithElse } from './ng-if-with-else';

describe('NgIfWithElse', () => {
  let component: NgIfWithElse;
  let fixture: ComponentFixture<NgIfWithElse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgIfWithElse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfWithElse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
