export const ajax = ({url, method, headers, callback}) => {
	const xhr = new XMLHttpRequest();
	xhr.onload = function () { callback(JSON.parse(xhr.response)) };
	xhr.open(method, url);
	for(let key in headers){
		if(headers.hasOwnProperty(key)) xhr.setRequestHeader(key, headers[key])
	}
	xhr.send();
};

export const getFoldersFromLocalStorage = () => {
	return (localStorage.hasOwnProperty("folders")) ? (
		JSON.parse(localStorage.getItem("folders"))
	) : ( null )
};

export const setFoldersToLocalStorage = (foldersArray) => {
	localStorage.setItem("folders", JSON.stringify(foldersArray));
};