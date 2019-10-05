import React from 'react';

export default function BrandDisplayer(props) {
	return (
		<div className='brands'>
			{props.data.map((e) => {
				return (
					<div key={e._id} className='brand'>
						<div className='brand__img'>
							<img src={e.image} width='100%;' alt='' />
						</div>
						<h3 className='brand__title'>{e.title}</h3>
					</div>
				);
			})}
			<style jsx>
				{`
					.brands {
						display: grid;
						gap: .7em;
						margin: 0 auto;
						padding: .4em;
						max-width: 550px;
						grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
					}
					.brand {
						margin: 0 auto;
						margin-top: 2rem;
						width: 100%;
						display: flex;
						background: white;
						flex-direction: column;
						align-items: center;
					}
					.brand__img {
						position: relative;
						padding: 0 .9rem;
						box-sizing: border-box;
						height: 76px;
						display: flex;
						align-items: center;
						justify-content: center;
						text-align: center;
						border-bottom: 1px solid #ababab;
					}
					.brand__img img {
						width: 70%;
						max-width: 120px;
					}

					.brand__title {
						margin: .7rem 0;
						font-size: .9em;
						font-weight: 400;
					}
					@media (min-width: 660px) {
						.brand {
							border: 1px solid #d5d5d5;
						}
					}
				`}
			</style>
		</div>
	);
}
