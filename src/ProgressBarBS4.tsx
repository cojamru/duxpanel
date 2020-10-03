import React from 'react';

const ProgressBarBS4 = (className: string) => (props: { value: number; min: number; max: number }) => {
    return (
        <div className="progress">
            <div
                className={className}
                style={{ width: `${Math.round(((props.value - props.min) / (props.max - props.min)) * 100)}%` }}
                aria-valuenow={props.value}
                aria-valuemin={props.min}
                aria-valuemax={props.max}></div>
        </div>
    );
};

export default ProgressBarBS4;
