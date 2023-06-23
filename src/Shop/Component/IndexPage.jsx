import React from 'react';

function IndexPage(props) {
	const { indexPage, handlerChangePage, pagination } = props;

	const { page } = pagination;

	const onIndexPage = (value) => {
		if (!handlerChangePage) {
			return;
		}

		handlerChangePage(value);
	};

	console.log(indexPage);

	return (
		<div className='d-flex'>
			{indexPage &&
				indexPage.map((value) => (
					<li
						className={
							value === parseInt(page) ? 'page-item active' : 'page-item'
						}
						key={value}
						onClick={() => onIndexPage(value)}>
						<a className='page-link'>{value}</a>
					</li>
				))}
		</div>
	);
}

export default IndexPage;
