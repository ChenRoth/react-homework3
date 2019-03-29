class ATM extends React.Component {
    render() {
        const {
            withdrawAmount,
            depositAmount,
            onWithdraw,
            onDeposit
        } = this.props;
        return e('div', null,
            'ATM',
            e('button', {
                onClick: () => onWithdraw(withdrawAmount),
            }, 'WITHDRAW'),
            e('button', {
                onClick: () => onDeposit(depositAmount),
            }, 'DEPOSIT')
        );
    }
}