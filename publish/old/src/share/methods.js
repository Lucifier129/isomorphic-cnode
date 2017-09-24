'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.openMenu = openMenu;
exports.closeMenu = closeMenu;
/**
 * share methods
 */

function openMenu() {
	var UPDATE_FIELD = this.store.actions.UPDATE_FIELD;


	this.scrollY = window.scrollY;
	UPDATE_FIELD({
		key: 'showMenu',
		value: true
	});
}

function closeMenu() {
	var _this = this;

	var UPDATE_FIELD = this.store.actions.UPDATE_FIELD;


	UPDATE_FIELD({
		key: 'showMenu',
		value: false
	});

	setTimeout(function () {
		window.scrollTo(0, _this.scrollY);
		_this.scrollY = null;
	}, 0);
}