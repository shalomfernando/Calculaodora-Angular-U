import {TestBed} from '@angular/core/testing';

import {CalculadoraService} from './calculadora.service';
import {inject} from '@angular/core/testing';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [CalculadoraService]
  }));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });
});

it('deve garantir que 1 + 4 = 5',
  inject([CalculadoraService] , (service: CalculadoraService) => {
    let soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  })
);

it('deve garantir que 4 - 1 = 3',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let subtracao = service.calcular(4, 1, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(3);
  })
  );
it('deve garantir que 4 * 5 = 20',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let multiplicacao = service.calcular(4, 5, CalculadoraService.MUTIPLICACAO);
    expect(multiplicacao).toEqual(20);
  })
);

it ('deve garantir que 20 / 2 = 10',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let divisao = service.calcular(20,  2, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(10);
  })
  );
