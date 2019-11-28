import React from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import {withTranslation, WithTranslation} from 'react-i18next';
import {OperationsApiFp, StateApiFp} from "../ev-client";

interface Props extends WithTranslation {
    vehicleId: string
}

class ChargerToggleInner extends React.Component<Props, {}> {

    constructor(props: Props, context: any) {
        super(props, context);
    }

    state = {
        active: false
    };

    componentDidMount(): void {
        this.init();
    }

    private init() {
        this.isActive(this.props.vehicleId);
    }

    isActive(vehicleId: string): Promise<boolean> {
        return StateApiFp(null).chargeState(vehicleId, {
                headers: {
                    Accept: 'application/json'
                }
            })()
            .then(response => this.setState({ state: response.response.chargingState!== 'Complete' }))
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    toggleGpio() : void {


        this.isActive(this.props.vehicleId)
        this.state.active ? this.stopCharging(this.props.vehicleId) : this.startCharging(this.props.vehicleId);
    }

    startCharging(vehicleId: string){
        OperationsApiFp(null).chargeStart(vehicleId, {
            headers: {
                Accept: 'application/json'
            }
        })()
            .then(() => this.isActive(vehicleId))
            .catch(err => console.log(err));
    }

    stopCharging(vehicleId: string){
        OperationsApiFp(null).chargeStop(vehicleId, {
            headers: {
                Accept: 'application/json'
            }
        })()
            .then(() => this.isActive(vehicleId))
            .catch(err => console.log(err));
    }

    render() {
        const { t } = this.props;
        console.log(`current state: ${this.state.active}`);
        return (
            <div>
                <ButtonGroup className="btn-group-lg">
                    <Button color="outline-primary" onClick={() => this.toggleGpio()} active={this.state.active}>
                        <i className="fas fa-charging-station"></i>&nbsp;{this.state.active ? t('stopCharging') : t('startCharging')}</Button>
                </ButtonGroup>
            </div>
        );
    }

}

export default withTranslation()(ChargerToggleInner);
