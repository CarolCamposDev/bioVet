import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoSucessoComponent } from './agendamento-sucesso.component';

describe('AgendamentoSucessoComponent', () => {
  let component: AgendamentoSucessoComponent;
  let fixture: ComponentFixture<AgendamentoSucessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendamentoSucessoComponent]
    });
    fixture = TestBed.createComponent(AgendamentoSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
