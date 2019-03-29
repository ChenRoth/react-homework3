class BankManager extends React.Component {
    render() {
        const {
            onSetAmounts
        } = this.props;
        return e('div', null,
            e('form', {
                    onSubmit: event => {
                        event.preventDefault();
                        const form = event.target;
                        const withdrawAmount = parseInt(form.withdraw.value);
                        const depositAmount = parseInt(form.deposit.value);
                        onSetAmounts({
                            withdrawAmount: withdrawAmount,
                            depositAmount: depositAmount
                        });
                    }
                },
                e('input', {
                    name: 'withdraw',
                    placeholder: 'withdraw',
                    type: 'number'
                }),
                e('input', {
                    name: 'deposit',
                    placeholder: 'deposit',
                    type: 'number'
                }),
                e('button', {
                    type: 'submit'
                }, 'SET AMOUNTS')
            )
        );
    }
}