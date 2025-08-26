import { describe, it, expect } from 'vitest';
import { sum, isEven } from '../src/math.js';

describe('Funciones Matemáticas', () => {
  describe('suma', () => {
    it('debería sumar dos números positivos correctamente', () => {
      expect(sum(2, 3)).toBe(5);
    });

    it('debería sumar números negativos correctamente', () => {
      expect(sum(-1, -2)).toBe(-3);
    });

    it('debería sumar cero correctamente', () => {
      expect(sum(5, 0)).toBe(5);
    });

    it('debería manejar números decimales', () => {
      expect(sum(1.5, 2.5)).toBe(4);
    });
  });

  describe('esPar', () => {
    it('debería retornar verdadero para números pares', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-4)).toBe(true);
    });

    it('debería retornar falso para números impares', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(3)).toBe(false);
      expect(isEven(-1)).toBe(false);
    });
  });
});