const home = async (req, res) => {
	res.render('layout', { title: 'HOLA :)' });
};

module.exports = {
	home,
};
