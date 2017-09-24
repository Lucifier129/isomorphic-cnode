/**
 * share methods
 */

export function openMenu() {
	let { UPDATE_FIELD } = this.store.actions

	this.scrollY = window.scrollY
	UPDATE_FIELD({
		key: 'showMenu',
		value: true,
	})
}

export function closeMenu() {
	let { UPDATE_FIELD } = this.store.actions

	UPDATE_FIELD({
		key: 'showMenu',
		value: false,
	})

	setTimeout(() => {
		window.scrollTo(0, this.scrollY)
		this.scrollY = null
	}, 0)
}