SIMPLE REACT-BOOTSTRAP
======================
Menggunakan **react** dan **bootstrap** dengan **hot-reload** untuk mempermudah saat development.

---

### Instalasi semua dependency dari file konfigurasi npm (`package.json`) :
```
$ npm install
```
atau inisialisasi file `package.json` yang baru dengan perintah :
```
$ npm init
```

### Tambahkan konfigurasi `webpack` untuk `scripts` di file `package.json` :
```
  "scripts": {
    "start": "webpack-dev-server"
  }
```

### Buat file konfigurasi `.babelrc` dan tuliskan kode dibawah :
```
{
	"presets" : ["es2015", "react"]
}
```

### Buat file konfigurasi `webpack.config.js` dan tuliskan kode dibawah :
```
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './app/index.js',
		vendor: ['react', 'react-dom']
	},
	output: {
		path: path.join(__dirname,'build'),
		publicPath: '/js',
		filename: '[name].js'
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: "style!css"
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url'
			},
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js'
		})
	],
	devServer: {
		historyApiFallback:true,
		inline:true,
		hot:true,
		stats: 'error-only',
		contentBase: './app',
		colors: true
	}
}
```

### Buat file `index.js` di folder `app/` dan tuliskan kode dibawah :
```
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';

ReactDOM.render(
	<div>
		<NavBar />
	</div>,
	document.getElementById('root')
);
```

### Buat file `index.html` di folder `app/` dan tuliskan kode dibawah :
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Simple react-bootstrap</title>
</head>
<body>
	<div id="root"></div>
	<script type="text/javascript" src="/js/vendor.js"></script>
	<script type="text/javascript" src="/js/app.js"></script>
</body>
</html>
```

### Buat file `app.css` di folder `app/css/` dan tuliskan kode dibawah :
```
body {
	margin: 0px;
	padding: 0px;
}
```

### Buat file `NavBar.js` di folder `app/components/` dan tuliskan kode dibawah :
```
import React from 'react';

class NavBar extends React.Component {
	render() {
		return <div>
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">react-bootstrap</a>
					</div>
					<ul className="nav navbar-nav">
						<li className="active"><a href="#">Home</a></li>
						<li><a href="#">Page 1</a></li>
						<li><a href="#">Page 2</a></li>
						<li><a href="#">Page 3</a></li>
					</ul>
				</div>
			</nav>
		</div>;
	}
}

export default NavBar;
```

### Coba jalankan perintah berikut di terminal :
```
$ npm start
```
lalu buka web browser dengan alamat `localhost:8080`. Jika anda melihat navbar di web browser, berarti anda sudah sukses menggunakan `react` dan `bootstrap`. Anda tinggal membuat komponen lainnya, untuk nanti digabungkan kedalam `index.js`.

### Import beberapa komponen yang telah anda buat sebelumnya kedalam file `index.js` :
```
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Content from './components/Content';

ReactDOM.render(
	<div>
		<NavBar />
		<Header />
		<Content />
	</div>,
	document.getElementById('root')
);```

# Done!