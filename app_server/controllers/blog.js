/* GET list page */
const list = (req, res) => {
	res.render ('list_blogs', { title: 'Blog List' });
};

/* GET add page */
const add = (req, res) => {
	res.render ('add_blog', { title: 'Add Blog' });
};

module.exports = {
	list,
	add
};
