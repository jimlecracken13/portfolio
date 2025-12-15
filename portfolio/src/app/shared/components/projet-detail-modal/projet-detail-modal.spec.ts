import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetDetailModal } from './projet-detail-modal';

describe('ProjetDetailModal', () => {
  let component: ProjetDetailModal;
  let fixture: ComponentFixture<ProjetDetailModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetDetailModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetDetailModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
