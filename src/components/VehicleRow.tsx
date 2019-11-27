import React from 'react';
import { withTranslation, WithTranslation } from'react-i18next';
import { Vehicle } from '../ev-client';
import ChargerToggle from './ChargerToggle';

interface Props extends WithTranslation {
    vehicle: Vehicle;
}

class VehicleRowInner extends React.Component<Props, {}> {

    constructor(props: Props, context: any) {
        super(props, context);
    }

    render() {
        const { vehicle_id, display_name, vin } = this.props.vehicle;
        return (
                    <tr>
                        <td>{ vehicle_id }</td>
                        <td>{ display_name }</td>
                        <td>{ vin }</td>
                        <td><ChargerToggle chargerId={ vehicle_id  }/></td>
                    </tr>
        );
    }

}

export default withTranslation()(VehicleRowInner);
