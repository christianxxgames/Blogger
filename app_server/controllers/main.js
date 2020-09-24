/* GET homepage */
const index = (req, res) => {
	res.render('index', { title: 'Christian Liberatore Blog Site' });
};

module.exports = {
	index
};
