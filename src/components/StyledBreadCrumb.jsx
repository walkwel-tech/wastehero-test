import propTypes from "prop-types";
import { Breadcrumb, Button, Space } from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';

const StyledBreadCrumb = ({showArrow, onBack, breadCrumbs}) => {
    const tryAndGoBack = () => {
        return (typeof onBack === 'function') ? onBack() : '';
    }
    const BackButton = () => <Button icon={<ArrowLeftOutlined />}  onClick={tryAndGoBack}/>

    return (
        <div className="custom-styled-breadcrumbs">
            <Breadcrumb>
                <Space>
                    {(showArrow || breadCrumbs.length > 2) && <BackButton/>}

                    {breadCrumbs.map((crumb, index) => {
                        return (typeof crumb === 'function') ? crumb(index) : (
                            <Breadcrumb.Item key={index}>
                                <a href="">{crumb}</a>
                            </Breadcrumb.Item>
                        )
                    })}
                </Space>
            </Breadcrumb>
        </div>
    );
}

StyledBreadCrumb.defaultProps = {
    showArrow: false,
    breadCrumbs: [],
}

StyledBreadCrumb.propTypes = {
    showArrow: propTypes.bool,
    breadCrumbs: propTypes.arrayOf(propTypes.object),
    onBack: propTypes.func
}

export default StyledBreadCrumb;
