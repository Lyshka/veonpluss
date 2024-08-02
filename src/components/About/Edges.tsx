import {FC} from 'react';

interface Props {
    className?: string;
}

export const Edges: FC<Props> = ({ className }) => {
    return (
        <div className={className}></div>
    );
};