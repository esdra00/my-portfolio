export default function FilterButton({array, onclick, classname}) {
	return (
		<ul>
			{array &&
				array.map((filter) => {
					return (
						<li key={filter}>
							<button
								value={filter}
								key={filter}
								className={classname}
								onClick={onclick}
							>
								{filter}
							</button>
						</li>
					);
				})}
		</ul>
	);
}
