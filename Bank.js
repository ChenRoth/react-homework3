class Bank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            withdrawAmount: 0,
            depositAmount: 0,
            balance: 1000
        };
    }

    render() {
        const {balance} = this.state;
        return e('div', null,
            'Bank',
            e('p', null, balance),
            e(ATM, {
                depositAmount: 1,
                withdrawAmount: 1,
                onWithdraw: (amount) => {
                    this.setState({balance: balance - amount})
                },
                onDeposit:  (amount) => {
                    this.setState({balance: balance + amount})
                },
            }),
            e(BankManager)
        );
    }
}