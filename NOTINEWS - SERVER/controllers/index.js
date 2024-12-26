const home = async (req, res) => {
	res.render('index', { title: 'HOLA :)' });
};

module.exports = {
	home,
};
