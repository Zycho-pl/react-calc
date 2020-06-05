import { CalculatorStore } from "./CalculatorStore";

interface IRootStore {
    calculatorStore: CalculatorStore;
}

export const getRootStores = (): IRootStore => ({
    calculatorStore: new CalculatorStore()
})