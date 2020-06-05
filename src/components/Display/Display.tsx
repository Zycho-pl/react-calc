import React, {useEffect, useRef} from "react";
import {default as bemCssModules} from 'bem-css-modules';
import { default as DisplayStyles } from './Display.module.scss'
import {inject, observer} from "mobx-react";
import {CalculatorStore} from "../../stores/CalculatorStore";

interface  DisplayProps {
    calculatorStore?: CalculatorStore;
}

const style = bemCssModules(DisplayStyles);

// : to typ
const Display: React.FC<DisplayProps> = ({calculatorStore}) => {
    const displayRef = useRef<HTMLDivElement>(null);

    useEffect(
        () => {
            if (displayRef.current && calculatorStore) {
                calculatorStore.displayElement = displayRef.current;
            }
        },
        [displayRef, calculatorStore]
    );

    return (
        <div className={style()} ref={displayRef}>
            0
        </div>
    )

};

const DisplayConsumer = inject('calculatorStore')(observer(Display));
export {DisplayConsumer as Display};