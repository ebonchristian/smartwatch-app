import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeNumPage } from './change-num.page';

describe('ChangeNumPage', () => {
  let component: ChangeNumPage;
  let fixture: ComponentFixture<ChangeNumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChangeNumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
