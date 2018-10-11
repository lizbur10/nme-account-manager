class WorkplaceAccountListContainer extends React.Component {
    constructor() {
      super()
   
      this.state = {
        workplaceAccounts: []
      };
    }
   
    componentDidMount() {
      fetch('')
        .then(response => response.json())
        .then(workplaceAccounts => this.setState({ workplaceAccounts }))
    }
   
    render() {
      return <WorkplaceAccountList workplaceAccounts={this.state.workplaceAccounts} />
    }
  }