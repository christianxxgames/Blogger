var express = require('express');
var router = express.Router();
var ctrlBlog = require('../controllers/blog');
const ctrlMain = require('../controllers/main');

/*List Blog Page */
router.get('/list-blogs', ctrlBlog.list );

/*Add Blog Page */
router.get('/add-blog', ctrlBlog.add );

/*Delete Blog Page */
router.get('/delete-blog', ctrlBlog.del );

/*Edit Blog Page */
router.get('/edit-blog', ctrlBlog.edit );

const homepageCtrl = (req, res) => {
	res.render('index', { title: 'Christian Liberatore Blog Site' });
};
/* GET home page */
router.get('/', ctrlMain.index);

module.exports = router;
