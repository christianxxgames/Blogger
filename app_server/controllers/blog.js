/* GET list page */
module.exports.list = function(req, res) {
	res.render ('list_blogs', {title: 'Blog List',
		blogPosts: [{
			title: 'hello?',
			text: 'what is a blog?'
		}, {
			title: 'blog?',
			text: 'who keeps writing blog?'
		}, {
			title: 'Marco',
			text: 'Polo'
		}]
	});
};

/* GET add page */
module.exports.add = function (req, res) {
	res.render('add_blog', {title: 'Add Blog' });
};

/* GET delete page */
module.exports.del = function (req, res) {
	res.render('delete_blog', {title: 'Delete Blog' });
}

/* GET edit page */
module.exports.edit = function (req,res) {
	res.render('edit_blog', {title: 'Edit Blog' });
}

