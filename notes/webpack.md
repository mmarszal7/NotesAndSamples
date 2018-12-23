## 1. Introduction to JS files management:

---

**Epoch I** - only 2 ways to serve JS files in browser:

- hunderts of small files
- one file with thousands lines of code

Dveloping in one file is imposible, so actually there was only one solution.

**Problems:**

- not scalable
- hard to develop
- hard to send to browser

---

**Epoch II** - Developing in one file is imposible, so we need some kind of bundler to merge small files - **Grunt/Gulp epoch**

**Problems:**

- full rebuild every time
- injecting whole libraries (100% of its code)
- no lazy loading

---

**Epoch III** - let's split code by modules, not by files - CommonJS & ESM - **modules** (Webpack) **epoch**

**Problems:**

- no browser support
- hard to manage dependencies (solved by linkers and bundlers)

---

## 2. Core concepts of Webpack:

- entry
- output
- loaders + rules - loaders = apply this node module to files that match this **rule**.
  Loaders can be chained into sequence from right to left ["style", "css", "less"]
- plugins - js classes which instances you pass into bundling pipe - they are event driven

---

## 3. Popular plugins:

**Devtool** - generating source maps for debug perpose

- devtool: "source-map"

**WebpackDevServer** - development web server (serving bundle files from a memory)

- devServer: { contentBase: path.resolve(\_\_dirname, './dist'), index: 'index.html', port: 9000 },

**Loaders:**

- { test: /\.(png|jpe?g)\$/, use: [ 'file-loader' ] } - loads files
- { test: /\.(png|jpe?g)\$/, use: [ 'url-loader' ] } - encode files and loads them as base64
- { test: /\.scss\$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] }
- { test: /\.js\$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: [ 'stage-0' ] } } }
- { test: /\.ts\$/, loaders: [ 'ts-loader' ], exclude: /node_modules/, },

**Plugins:**

- HtmlWebpackPlugin - creates and outputs index.html
- ProgressPlugin - showing bundling progress
- MiniCssExtractPlugin - css file in separate file - just for performance and lazy loading

---

## 4. General notes:

- when running npm scripts (those in package.json) you are running terminal in /node_modules/bin scope
- if you are using pure JS with modules you don't even need webpack.config file
- loaders work at file level - before or during bundling; plugins work at system level - on bundle or its chunk

---

## 5. Resources:

- Udemy - https://github.com/vp-online-courses/webpack-tutorial
- Pluralsight - https://github.com/TheLarkInn/webpack-workshop-2018
