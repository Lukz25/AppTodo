import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesenhoPage } from './desenho.page';

describe('DesenhoPage', () => {
  let component: DesenhoPage;
  let fixture: ComponentFixture<DesenhoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DesenhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
