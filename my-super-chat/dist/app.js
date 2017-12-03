/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
__webpack_require__(15);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(3);
var Auth_1 = __webpack_require__(4);
var Login_1 = __webpack_require__(7);
var socket = io('/', {
    reconnection: true,
    reconnectionAttempts: 500,
    reconnectionDelay: 500,
    reconnectionDelayMax: 500
});
var root = document.querySelector('.root-app');
socket.on('auth', function (data) {
    document.title = 'Авторизация';
    ReactDOM.render(React.createElement(Auth_1.default, _extends({ socket: socket }, data)), root);
});
socket.on('login', function (data) {
    document.title = 'WSV-Chat';
    ReactDOM.render(React.createElement(Login_1.default, _extends({ socket: socket }, data)), root);
});
socket.on('auth-load', function () {
    document.title = 'Отправка...';
    ReactDOM.render(React.createElement(
        "div",
        { className: "loader" },
        "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430..."
    ), root);
});
socket.on('connect', function () {
    document.title = 'Загрузка...';
    ReactDOM.render(React.createElement(
        "div",
        { className: "loader" },
        "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
    ), root);
});
socket.on('disconnect', function (reason) {
    if (reason === 'io server disconnect') socket['connect']();
    document.title = 'Подключение';
    ReactDOM.render(React.createElement(
        "div",
        { className: "loader" },
        "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435..."
    ), root);
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(0);
var check = __webpack_require__(5);
__webpack_require__(6);

var Auth = function (_react_1$Component) {
    _inherits(Auth, _react_1$Component);

    function Auth(props) {
        _classCallCheck(this, Auth);

        var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this, props));

        _this.fork = true;
        _this.state = {
            type: props.type || 0,
            error: props.error
        };
        return _this;
    }

    _createClass(Auth, [{
        key: "changeType",
        value: function changeType() {
            if (!this.fork) return;
            this.setState({ type: this.state.type ? 0 : 1 });
            this.clearError();
        }
    }, {
        key: "sendData",
        value: function sendData() {
            if (!this.fork) return;
            var data = { type: this.state.type };
            for (var key in this.refs) {
                var a = this.refs[key];
                data[key] = a.value;
            }
            var loginData = data;
            var error = null;
            if (error = check.loginData(loginData)) return this.setState(error);
            this.props.socket.emit('login', loginData);
        }
    }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
            if (!this.fork) return;
            if (e.keyCode === 13) this.sendData();
        }
    }, {
        key: "onFocus",
        value: function onFocus(e) {
            var _this2 = this;

            if (!this.fork) return;
            var t = e.target;
            var input = t;
            window.addEventListener('keydown', this.onKeyDown.bind(this));
            input.onblur = function () {
                input.onblur = null;
                window.removeEventListener('keydown', _this2.onKeyDown.bind(_this2));
            };
        }
    }, {
        key: "clearError",
        value: function clearError() {
            if (!this.fork) return;
            if (this.state.error) this.setState({ error: '' });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.fork = false;
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                type = _state.type,
                error = _state.error;

            return React.createElement(
                "div",
                { className: "login-form" },
                React.createElement(
                    "div",
                    { className: "header" },
                    React.createElement(
                        "p",
                        { className: "title" },
                        type === 0 ? 'Авторизация' : 'Регистрация'
                    ),
                    error.length ? React.createElement(
                        "p",
                        { className: "error" },
                        error
                    ) : ''
                ),
                React.createElement(
                    "div",
                    { className: "form-input" },
                    React.createElement(
                        "span",
                        null,
                        "\u041B\u043E\u0433\u0438\u043D:"
                    ),
                    React.createElement("input", { ref: "login", name: "login", onFocus: this.onFocus.bind(this), onInput: this.clearError.bind(this), autoComplete: "off", type: "text" })
                ),
                React.createElement(
                    "div",
                    { className: "form-input" },
                    React.createElement(
                        "span",
                        null,
                        "\u041F\u0430\u0440\u043E\u043B\u044C:"
                    ),
                    React.createElement("input", { ref: "password", name: "password", onFocus: this.onFocus.bind(this), onInput: this.clearError.bind(this), autoComplete: "off", type: "password" })
                ),
                type === 1 ? React.createElement(
                    "div",
                    { className: "form-input" },
                    React.createElement(
                        "span",
                        null,
                        "\u041F\u0430\u0440\u043E\u043B\u044C \u0435\u0449\u0435 \u0440\u0430\u0437:"
                    ),
                    React.createElement("input", { ref: "password2", name: "password2", onFocus: this.onFocus.bind(this), onInput: this.clearError.bind(this), autoComplete: "off", type: "password" })
                ) : '',
                React.createElement(
                    "div",
                    { className: "form-input" },
                    React.createElement(
                        "button",
                        { onClick: this.sendData.bind(this), style: { backgroundColor: "#3a85ff" } },
                        type === 0 ? 'Войти' : 'Зарегистрироваться'
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.changeType.bind(this), style: { backgroundColor: "#888" } },
                        type === 0 ? 'Регистрация' : 'Авторизация'
                    )
                )
            );
        }
    }]);

    return Auth;
}(react_1.Component);

exports.default = Auth;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRegExp = /^[a-z0-9\-_]{3,30}$/;
exports.passwordRegExp = /^[\w\W]+$/;
exports.login = (v) => {
    if (v.length < 3)
        return { error: 'Не верная длина логина' };
    if (v.length > 30)
        return { error: 'Не верная длина логина' };
    if (!exports.loginRegExp.test(v))
        return { error: 'Логин содержит не верные символы' };
    return null;
};
exports.password = (v) => {
    if (v.length < 6)
        return { error: 'Не верная длина пароля' };
    if (v.length > 50)
        return { error: 'Не верная длина пароля' };
    if (!exports.passwordRegExp.test(v))
        return { error: 'Пароль содержит не верные символы' };
    return null;
};
exports.passwords = (v1, v2) => {
    if (v2 && v1 !== v2)
        return { error: 'Введенные пароли не совпадают' };
    return null;
};
exports.loginData = (data) => {
    if (data && typeof data.login === 'string')
        data.login = data.login.toLocaleLowerCase();
    return exports.login(data.login) || exports.password(data.password) || exports.passwords(data.password, data.password2);
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(8);
var react_1 = __webpack_require__(0);
var MessageInput_1 = __webpack_require__(18);
var SmilesList_1 = __webpack_require__(19);

var Login = function (_react_1$Component) {
    _inherits(Login, _react_1$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.fork = true;
        _this.state = { login: props.login, nickName: props.nickName, smiles: false };
        return _this;
    }

    _createClass(Login, [{
        key: "logout",
        value: function logout() {
            if (!this.fork) return;
            this.props.socket.emit('logout');
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.fork = false;
        }
    }, {
        key: "showSmiles",
        value: function showSmiles(e) {
            e.preventDefault();
            this.setState({ smiles: !this.state.smiles });
        }
    }, {
        key: "sendMessage",
        value: function sendMessage() {}
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _addSmile = void 0;
            return React.createElement(
                "div",
                { className: "chat-app" },
                React.createElement(
                    "div",
                    { className: "header" },
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            { className: "info" },
                            React.createElement(
                                "div",
                                null,
                                this.state.login
                            ),
                            React.createElement(
                                "div",
                                null,
                                this.state.nickName
                            )
                        ),
                        React.createElement(
                            "li",
                            { onClick: this.logout.bind(this), className: "close btn" },
                            "\u0412\u044B\u0445\u043E\u0434"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement("div", { className: "list-container" }),
                    React.createElement(
                        "div",
                        { className: "messages-container" },
                        React.createElement(
                            "div",
                            { className: "messages-back" },
                            React.createElement(
                                "div",
                                { className: "message" },
                                React.createElement(
                                    "div",
                                    { className: "message-object" },
                                    React.createElement(
                                        "p",
                                        { className: "name" },
                                        "vic",
                                        React.createElement(
                                            "small",
                                            null,
                                            "vic"
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "mess" },
                                        React.createElement(
                                            "p",
                                            null,
                                            "\u042F \u0443\u0437\u043D\u0430\u043B, \u0447\u0442\u043E \u0443 \u043C\u0435\u043D\u044F"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "\u0415\u0441\u0442\u044C \u043E\u0433\u0440\u043E\u043C\u043D\u0430\u044F \u0441\u0435\u043C\u044C\u044F:"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "\u041C\u0430\u043A \u0438 \u0431\u0435\u043B\u044B\u0439 \u043F\u043E\u0440\u043E\u0448\u0435\u043A"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "\u041A\u043E\u043D\u043E\u043F\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043C\u0435\u0448\u0435\u043A"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "\u0412\u043E\u0434\u043A\u0430, \u043F\u0438\u0432\u043E \u0440\u043E\u0437\u043B\u0438\u0432\u043D\u043E\u0435"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "\u042D\u0442\u043E \u0432\u0441\u0435, \u043C\u043E\u0435, \u0440\u043E\u0434\u043D\u043E\u0435"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "\u0412\u0441\u0435 \u043D\u0430 \u0441\u0432\u0435\u0442\u0435 \u043F\u0440\u0435\u0442 \u043C\u0435\u043D\u044F"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "\u041D\u0430\u0440\u043A\u043E\u043C\u0430\u043D \u043D\u0430\u0432\u0435\u0440\u043D\u043E \u044F!!!"
                                        )
                                    ),
                                    React.createElement(
                                        "p",
                                        { className: "date" },
                                        "17:09"
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "footer" },
                    React.createElement(SmilesList_1.default, { show: this.state.smiles, addSmile: function addSmile(e) {
                            return _addSmile = _this2['refs']['mess']['addSmile'](e);
                        } }),
                    React.createElement(MessageInput_1.default, { ref: "mess", active: this.state.smiles, onClickSend: this.sendMessage.bind(this), onClickSmile: this.showSmiles.bind(this) })
                )
            );
        }
    }]);

    return Login;
}(react_1.Component);

exports.default = Login;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var smiles = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
exports.default = smiles;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(20);
var react_1 = __webpack_require__(0);

var MessageInput = function (_react_1$Component) {
    _inherits(MessageInput, _react_1$Component);

    function MessageInput() {
        _classCallCheck(this, MessageInput);

        return _possibleConstructorReturn(this, (MessageInput.__proto__ || Object.getPrototypeOf(MessageInput)).apply(this, arguments));
    }

    _createClass(MessageInput, [{
        key: "addSmile",
        value: function addSmile(e) {
            var f = this['refs']['mess'];
            var inp = f;
            inp.value += e;
        }
    }, {
        key: "render",
        value: function render() {
            var className = this.props.active ? 'active' : '';
            return React.createElement(
                "div",
                { className: "message-input" },
                React.createElement("textarea", { ref: "mess" }),
                React.createElement(
                    "div",
                    { className: "btns" },
                    React.createElement(
                        "button",
                        { className: className, onClick: this.props.onClickSmile },
                        "\uE9E1"
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.props.onClickSend },
                        "\uE945"
                    )
                )
            );
        }
    }]);

    return MessageInput;
}(react_1.Component);

exports.default = MessageInput;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(22);
var react_1 = __webpack_require__(0);
var smiles_1 = __webpack_require__(17);

var SmilesList = function (_react_1$Component) {
    _inherits(SmilesList, _react_1$Component);

    function SmilesList() {
        _classCallCheck(this, SmilesList);

        return _possibleConstructorReturn(this, (SmilesList.__proto__ || Object.getPrototypeOf(SmilesList)).apply(this, arguments));
    }

    _createClass(SmilesList, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { style: { display: this.props.show ? 'block' : 'none' }, className: "smiles" },
                React.createElement(
                    "ul",
                    null,
                    smiles_1.default.map(function (e, i) {
                        return React.createElement(
                            "li",
                            { onClick: function onClick() {
                                    return _this2.props.addSmile(e);
                                }, key: "s" + i },
                            e
                        );
                    })
                )
            );
        }
    }]);

    return SmilesList;
}(react_1.Component);

exports.default = SmilesList;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);