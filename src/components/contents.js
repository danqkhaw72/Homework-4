import React, { Component } from 'react'

function searchingFor(term) {
	return function(x) {
		return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
	}
}
export class contents extends Component {

	constructor(props) {
		super(props);
		this.state = {
			people : [
				{
					id: 1,
					name : 'Job',
					email : '',
					phone : '0123456789',
					job : '',
					labels : '',
					status : true
				},
				{
					id: 2,
					name : 'Anna',
					email : '',
					phone : '01486842578',
					job : '',
					labels : '',
					status : true
				},
				{
					id: 3,
					name : 'Zoe',
					email : 'fgh@email.com',
					phone : '01653075698',
					job : 'Dev',
					labels : 'DTDT',
					status : true
				},
				{
					id: 4,
					name : 'Marry',
					email : '',
					phone : '06842586942',
					job : '',
					labels : 'DTDT',
					status : true
				},
				{
					id: 5,
					name : 'Henry',
					email : 'abc@gmail.com',
					phone : '01659257454',
					job : '',
					labels : 'DTDT,DT',
					status : true
				},
				{
					id: 6,
					name : 'Julia',
					email : '',
					phone : '05692482542',
					job : '',
					labels : '',
					status : true
				},
				{
					id: 7,
					name : "Maria",
					email : '',
					phone : '0358625926',
					job : '',
					labels : '',
					status : true
				}
			],
			term: '',
			isActive : true
		};

		this.searchHandler = this.searchHandler.bind(this);
	}

	searchHandler(event) {
		this.setState({term: event.target.value})
	}

    render() {

		const {term, people} = this.state;
		let elements = people.filter(searchingFor(this.state.term)).map((product, index) => {
			let result = '';
			if(product.status) {
				result = <tr>
							<th><a href="#" className="user-profile"><img src="img/user.jpg" alt=""/></a>{ product.name }</th>
							<td>{ product.email }</td>
							<td>{ product.phone }</td>
							<td>{ product.job }</td>
							<td>{ product.labels }</td> 
						</tr>
			}
			return result;
		});

        return (
            <section>
    	<div className="container-fluid">
    		<div className="row mb-5">
    			<div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
    				<div className="row align-items-center pt-5 mt-3">
    					<div className="col-12 mb-4 mb-xl-0 x-content">
						<form>
                        <div className="input-group">
                          <input type="text" className="form-control search-input" onChange={this.searchHandler} value={term} placeholder="Search..."/>
                          <button type="button" className="btn btn-light search-button"><i className="fas fa-search text-danger"></i></button>    									
                        </div>
                      </form>
    						<table className="table table-hover bg-light table-responsive-sm">
    							<thead>
    								<tr className="text-muted">
    									<th>Name</th>
    									<th>Email</th>
    									<th>Phone number</th>
                                        <th>Job title & company</th>
                                        <th>Labels</th>
    								</tr>
    							</thead>
    							<tbody>
                                    <tr>
                                        <td>Contacts(7)</td>
                                    </tr>
    								{ elements }
    							</tbody>
    						</table>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>
        )
    }
}

export default contents
