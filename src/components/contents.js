import React, { Component } from 'react'

export class contents extends Component {

	constructor(props) {
		super(props);
		this.state = {
			products : [
				{
					name : 'Job',
					email : '',
					phone : '0123456789',
					job : '',
					labels : '',
					status : true
				},
				{
					name : 'Anna',
					email : '',
					phone : '01486842578',
					job : '',
					labels : '',
					status : true
				},
				{
					name : 'Zoe',
					email : 'fgh@email.com',
					phone : '01653075698',
					job : 'Dev',
					labels : 'DTDT,DT',
					status : true
				},
				{
					name : 'Marry',
					email : '',
					phone : '06842586942',
					job : '',
					labels : 'DTDT,DT',
					status : true
				},
				{
					name : 'Henry',
					email : 'abc@gmail.com',
					phone : '01659257454',
					job : '',
					labels : 'DTDT,DT',
					status : true
				},
				{
					name : 'Julia',
					email : '',
					phone : '05692482542',
					job : '',
					labels : '',
					status : true
				},
				{
					name : "Maria",
					email : '',
					phone : '0358625926',
					job : '',
					labels : '',
					status : true
				}
			],
			isActive : true
		};
	}

    render() {
		
		let elements = this.state.products.map((product, index) => {
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
