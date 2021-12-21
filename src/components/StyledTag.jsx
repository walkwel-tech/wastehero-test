import { Tag } from 'antd';
import styled from 'styled-components';

import propTypes from 'prop-types';

const StyledTag = ({variant, bold, ...restProps}) => {
    const styledComp = function () {
        switch (variant) {
            case 'bordered':
                return styled(Tag)`
                    border: 3px solid;
                    font-weight: ${(bold) ? 'bold': 'normal'};
                    `;

            default:
                return styled(Tag)`
                    border: 1px solid;
                    font-weight: ${(bold) ? 'bold': 'normal'};
                    `
        }
    }

    const Component = styledComp(variant);
    return <Component {...restProps}/>
};

StyledTag.defaultProps = {
    variant: 'default',
    bold: false
}

StyledTag.propTypes = {
    variant: propTypes.oneOf(['default', 'bordered']),
    bold: propTypes.bool
}

export default StyledTag;
