import React from 'react';
import { withTranslation, WithTranslation } from'react-i18next';
import { VehiclesApiFp, Vehicle } from '../ev-client';
import VehicleRowFrank from './VehicleRow';
import { Spinner } from 'reactstrap';

interface Props extends WithTranslation {
}

class VehicleListInner extends React.Component<Props, {}> {

    constructor(props: Props, context: any) {
        super(props, context);
    }

    vehicleArr: Vehicle[] = undefined;
    state = { vehicles: this.vehicleArr };

    componentDidMount(): void {
        this.loadVehicles();
    }

    private loadVehicles() {
        VehiclesApiFp(null)
            .vehicles({
                headers: {
                    Accept: 'application/json'
                }
            })()
            .then(vehicleResp => this.setState({ vehicles: vehicleResp.response }))
            .catch(err => {
                console.log(`error:${err}`);
                this.setState({ vehicles: [] });
            });
    }

    render() {
        const { t } = this.props;
        if (this.state.vehicles === undefined) {
            return <div className="text-info">{t('carsLoading')}<Spinner/></div>;
        }
        if (this.state.vehicles.length === 0) {
            return <div className="text-info">{t('carsEmpty')}</div>;
        }
        const rows = this.state.vehicles.map(car => <VehicleRowFrank cars={car}/>);
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">{t('carId')}</th>
                        <th scope="col">{t('carName')}</th>
                        <th scope="col">{t('carVin')}</th>
                        <th scope="col">{t('chargeAction')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>);
    }
}

export default withTranslation()(VehicleListInner);
