import {FC} from 'react';

interface Props {
    className?: string;
}

export const INfo: FC<Props> = ({ className }) => {
    return (
        <div className={className}></div>
    );
};