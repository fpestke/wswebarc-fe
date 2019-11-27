import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { plainToClass } from 'class-transformer';
import ChargerState from '../model/ChargerState';
import { withTranslation, WithTranslation } from'react-i18next';

interface Props extends WithTranslation {
    chargerId: string
}

class ChargerToggleInner extends React.Component<Props, {}> {

    private chargerStateUrl  = `http://192.168.168.206:3000/chargers/${this.props.chargerId}`;
    private chargerToggleUrl = `${this.chargerStateUrl}/toggle`;

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
        this.isActive().then(isActive => this.setState({ active: isActive }));
    }

    async isActive(): Promise<boolean> {
        return fetch(this.chargerStateUrl)
            .then(response => response.json())
            .then(state => {
                const result = plainToClass(ChargerState, state).active;
                return result;
            })
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    toggleGpio() : void {
        fetch(this.chargerToggleUrl, {
            method: 'POST'
        })
            .then(response => response.json())
            .then(state => {
                const newState = plainToClass(ChargerState, state).active;
                this.setState({
                    active: newState
                });
            })
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
