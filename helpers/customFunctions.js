/* eslint-disable no-prototype-builtins */
/** format price */
export function formatNum(number = 0) {
	if (number) {
		const newNumber = number
			.toString()
			.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
		return ` ${newNumber}`;
	}

	return ` ${number || 0}`;
}
/** Animate Scroll */
export function animateScrollTo({ top = 0, left = 0, behavior = 'smooth' }) {
	window.scrollTo({
		top,
		left,
		...((behavior && { behavior }) || {}),
	});
}

/** testing class */
export function testElementSelector(key = '') {
	let testElementSelector = '';

	if (key) {
		const newKey = key
			.replace(/[^\w\s]/gi, '')
			.split(' ')
			.join('-');
		testElementSelector = `js-test-${newKey}`;
	}

	return testElementSelector;
}

/** format date */
// month = short,long,numeric

export function formatDate(
	payloadDate = null,
	monthType = 'short',
	isDisplay = false,
) {
	if (payloadDate) {
		const date = new Date(payloadDate);
		const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
			date,
		);
		const month = new Intl.DateTimeFormat('en', {
			month: monthType,
		}).format(date);
		const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

		return isDisplay ? `${day}-${month}-${year}` : `${year}-${month}-${day}`;
	}

	return '';
}

/** get date range display */
export function getDateRangeDisplay({
	startDate = null,
	endDate = null,
	monthType = 'short',
	isDisplay = true,
}) {
	let dateDisplay = '';
	const f = (date) => formatDate(new Date(date), monthType, isDisplay);

	if (startDate && endDate) {
		dateDisplay = `${f(startDate)} - ${f(endDate)}`;
	}

	return dateDisplay;
}
