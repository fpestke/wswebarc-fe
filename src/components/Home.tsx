import * as React from 'react';
import * as CSS from 'csstype';
import ChargeToggle from './ChargerToggle';
import { withTranslation } from'react-i18next';

class HomeInner extends React.Component<any, {}> {
    render() {

        const logoStyle: CSS.Properties<string | number> = {
            verticalAlign: 'super',
            marginLeft: '1rem'
        };

        const { t } = this.props;

        return (

            <div className="jumbotron">
                <h1>
                    {t('Welcome')}<span style={logoStyle} className="badge badge-primary"><i className="fas fa-car-battery"/></span>
                </h1>
                <hr/>
                <ChargeToggle chargerId={1}/>
            </div>);
    };
};

export default withTranslation()(HomeInner);
