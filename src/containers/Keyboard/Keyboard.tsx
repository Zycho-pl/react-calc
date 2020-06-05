import React from 'react';
import {default as bemCssModules} from 'bem-css-modules';
import {default as KeyboardStyles} from './Keyboard.module.scss';
import {Button} from '../../components/Button/Button'
import {inject, observer} from "mobx-react";
import {CalculatorStore} from "../../stores/CalculatorStore";

interface KeyboardProps {
    calculatorStore?: CalculatorStore;
}

const style = bemCssModules(KeyboardStyles);

const Keyboard: React.FC<KeyboardProps> = ({calculatorStore}) => {
        if (!calculatorStore) {
                return null;
        }

    return (
        <div className={style()}>
                <Button content="%" onClick={calculatorStore.percent} />
                <Button content="CE" onClick={calculatorStore.cancel} />
                <Button content="C" onClick={calculatorStore.clear} />
                <Button content="<=" onClick={calculatorStore.back} />
                <Button content="1/x" onClick={calculatorStore.oneXth} />
                <Button content="x2" onClick={calculatorStore.power} />
                <Button content="sqrt" onClick={calculatorStore.square} />
                <Button content="/" onClick={calculatorStore.divide} />
                <Button content="7" onClick={event => calculatorStore.concatenateNumber(event)} />
                <Button content="8" onClick={event => calculatorStore.concatenateNumber(event)} />
                <Button content="9" onClick={event => calculatorStore.concatenateNumber(event)} />
                <Button content="X" onClick={calculatorStore.multiplication} />
                <Button content="4" onClick={event => calculatorStore.concatenateNumber(event)} />
                <Button content="5" onClick={event => calculatorStore.concatenateNumber(event)} />
                <Button content="6" onClick={event => calculatorStore.concatenateNumber(event)} />
                <Button content="-" onClick={calculatorStore.substraction} />
                <Button content="1" onClick={event => calculatorStore.concatenateNumber(event)} />
                <Button content="2" onClick={event => calculatorStore.concatenateNumber(event)} />
                <Button content="3" onClick={event => calculatorStore.concatenateNumber(event)} />
                <Button content="+" onClick={calculatorStore.addition} />
                <Button content="+/-" onClick={calculatorStore.invertNumber} />
                <Button content="0" onClick={event => calculatorStore.concatenateNumber(event)} />
                <Button content="." onClick={calculatorStore.addComma} />
                <Button content="=" isEqual onClick={calculatorStore.equal} />
        </div>
    );
};

const KeyboardConsumer = inject('calculatorStore')(observer(Keyboard));
export {KeyboardConsumer as Keyboard};
