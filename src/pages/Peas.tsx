import styled from 'styled-components'
import { Pea } from '../components';
import { PeaProps } from '../utils';

export const PeasLayout = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    z-index: 0;
`;

export const Peas = () => {
    let count = 20;
    var peas: JSX.Element[] = [], i = 0;
    while (++i <= count) {
        let key: PeaProps = { key: i };
        peas.push(Pea(key));
    }

    return (
        <PeasLayout>
            {peas.map(pea => { return pea;})}
        </PeasLayout>
    );
};


export default Peas;