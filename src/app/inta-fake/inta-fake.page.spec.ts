import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntaFakePage } from './inta-fake.page';

describe('IntaFakePage', () => {
  let component: IntaFakePage;
  let fixture: ComponentFixture<IntaFakePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IntaFakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
