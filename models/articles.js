function modelArticles(data = []) {
	const article =
		(data && data.length && data.map((item) => modelArticle(item))) || [];

	return article;
}

function modelArticle(item = {}) {
	const {
		id = 0,
		title = '',
		slug = '',
		categories = [],
		image = '',
		content = '',
	} = item;

	return {
		articleId: id,
		title,
		slug,
		categories,
		image,
		content,
	};
}

export { modelArticles, modelArticle };
