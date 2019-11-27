import * as React from 'react';
import * as CSS from 'csstype';
import VehicleList from './VehicleList';
import { withTranslation } from'react-i18next';

class HomeInner extends React.Component<any, {}> {
    render() {

        const logoStyle: CSS.Properties<string | number> = {
            verticalAlign: 'super',
            marginRight: '1rem'
        };

        const { t } = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="navbar-brand">
                                <span style={logoStyle} className="badge badge-primary"><i className="fas fa-car-battery"/></span>{t('Welcome')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-9  mt-5">
                        <h4>{t('carList')}</h4>
                        <VehicleList/>
                    </div>
                </div>
            </div>);
    };
};

export default withTranslation()(HomeInner);
