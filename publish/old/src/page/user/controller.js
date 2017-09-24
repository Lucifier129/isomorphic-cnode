'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BaseController = require('../../share/BaseController');

var _BaseController2 = _interopRequireDefault(_BaseController);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

var _model = require('./model');

var actions = _interopRequireWildcard(_model);

var _methods = require('../../share/methods');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Controller) {
    _inherits(_class, _Controller);

    function _class() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.name = 'User', _this.View = _view2.default, _this.actions = actions, _this.initialState = {
            showMenu: false,
            user: {},
            selectItem: 'replies',
            currentData: []
        }, _this.methods = {
            openMenu: _methods.openMenu,
            closeMenu: _methods.closeMenu,

            changeItem: function changeItem(_ref2) {
                var currentTarget = _ref2.currentTarget;
                var UPDATE_FIELD = this.store.actions.UPDATE_FIELD;

                var selectItem = currentTarget.getAttribute('data-type');

                UPDATE_FIELD({
                    key: 'selectItem',
                    value: selectItem
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return _class;
}(_BaseController2.default);

exports.default = _class;