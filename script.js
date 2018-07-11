var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    director: 'reżyser: Chris Columbus',
    budget: 'budżet: 130 million USD',
    image: 'images/potter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    director: 'reżyser: Rob Minkoff',
    budget: 'budżet: 45 million USD',
    image: 'images/lew.jpg'
  },
  {
    id: 3,
    title: 'Titanic',
    desc: 'film o katastrofie',
    director: 'reżyser: James Cameron',
    budget: 'budżet: 200 million USD',
    image: 'images/titanic.jpg'
  },
];

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function () {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  },
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

  render: function () {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  },
});

var MovieDirector = React.createClass({
  propTypes: {
    director: React.PropTypes.string.isRequired,
  },

  render: function () {
    return (
      React.createElement('p', {}, this.props.director)
    )
  },
});

var MovieBudget = React.createClass({
  propTypes: {
    budget: React.PropTypes.string.isRequired,
  },

  render: function () {
    return (
      React.createElement('p', {}, this.props.budget)
    )
  },
});

var MovieImage = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired,
  },

  render: function () {
    return (
      React.createElement('img', {src: this.props.image})
    )
  },
});

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement(MovieTitle, {title: movie.title}),
      React.createElement(MovieDescription, {desc: movie.desc}),
      React.createElement(MovieDirector, {director: movie.director}),
      React.createElement(MovieBudget, {budget: movie.budget}),
      React.createElement(MovieImage, {image: movie.image})
      )
});

var element =
    React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmów'),
      React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'));