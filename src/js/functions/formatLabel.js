const formatLabel = (label) => {
	let temp = label
		.replace('(', '')
		.replace(')', '')
		.replace('- ', '-')
		.replace(',', '-')
		.replace(/\s/g, '-')
		.replace('--', '-');

	const format_label = temp.toLowerCase();
	
	return format_label;
};

export default formatLabel;