import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MiclasePage } from './miclase.page';

describe('MiclasePage', () => {
  let component: MiclasePage;
  let fixture: ComponentFixture<MiclasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiclasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
