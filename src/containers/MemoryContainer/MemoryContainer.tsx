import React from 'react';
import {default as bemCssModules} from 'bem-css-modules';
import { default as MemoryContainerStyles } from './MemoryContainer.module.scss';
import {Button} from "../../components/Button/Button";


const style = bemCssModules(MemoryContainerStyles);

export const MemoryContainer: React.FC = () => {
    return (
        <div className={style()}>
            <Button content="MC"  isMemory onClick={() => console.log('')} />
            <Button content="MR"  isMemory onClick={() => console.log('')} />
            <Button content="M+"  isMemory onClick={() => console.log('')} />
            <Button content="M-"  isMemory onClick={() => console.log('')} />
            <Button content="MS"  isMemory onClick={() => console.log('')} />
        </div>
    )
};