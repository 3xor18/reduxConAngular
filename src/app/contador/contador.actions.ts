import { Action } from '@ngrx/store';

export const INCREMENTAR = '[CONTADOR] Incrementar';
export const DECREMENTAR = '[CONTADOR] Decrementar';
export const MULTIPLICAR = '[CONTADOR] Multiplicar';
export const DIVIDIR = '[CONTADOR] Dividir';
export const RESETEAR = '[CONTADOR] Resetear';

export class IncrementarAction implements Action {
    readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action {
    readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action {
    readonly type = MULTIPLICAR;
    constructor(public payload){}
}

export class DividirAction implements Action {
    readonly type = DIVIDIR;
    constructor(public payload){}
}

export class ResetearAction implements Action {
    readonly type = RESETEAR;
}

export type actions=IncrementarAction|DecrementarAction|DividirAction|MultiplicarAction|ResetearAction;