import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCommonLibraryComponent } from './ngx-common-library.component';

describe('NgxCommonLibraryComponent', () => {
  let component: NgxCommonLibraryComponent;
  let fixture: ComponentFixture<NgxCommonLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCommonLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCommonLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
