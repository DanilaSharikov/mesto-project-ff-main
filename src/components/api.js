const config = {
	baseUrl: 'https://nomoreparties.co/v1/apf-cohort-202',
	headers: {
		authorization: '00a61a5e-a43c-4c9e-9139-6de4b3c4af88',
		'Content-Type': 'application/json',
	},
}

function getResponseData(res) {
	if (!res.ok) {
		return Promise.reject(`Ошибка: ${res.status}`)
	}
	return res.json()
}

export function getUserInfo() {
	return fetch(`${config.baseUrl}/users/me`, { headers: config.headers }).then(
		res => getResponseData(res)
	)
}

export function getCards() {
	return fetch(`${config.baseUrl}/cards`, {
		headers: config.headers,
	}).then(res => getResponseData(res))
}

export function patchProfile(name, about) {
	return fetch(`${config.baseUrl}/users/me`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			name: name,
			about: about,
		}),
	}).then(res => getResponseData(res))
}

export function postCards(name, link) {
	return fetch(`${config.baseUrl}/cards`, {
		method: 'POST',
		headers: config.headers,
		body: JSON.stringify({
			name: name,
			link: link,
		}),
	}).then(res => getResponseData(res))
}

export function deleteCard(cardID) {
	return fetch(`${config.baseUrl}/cards/${cardID}`, {
		method: 'DELETE',
		headers: config.headers,
	}).then(res => getResponseData(res))
}

export function putLike(cardID) {
	return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
		method: 'PUT',
		headers: config.headers,
	}).then(res => getResponseData(res))
}

export function deleteLike(cardID) {
	return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
		method: 'DELETE',
		headers: config.headers,
	}).then(res => getResponseData(res))
}

export function patchAvatar(avatar) {
	return fetch(`${config.baseUrl}/users/me/avatar`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			avatar: avatar,
		}),
	}).then(res => getResponseData(res))
}
