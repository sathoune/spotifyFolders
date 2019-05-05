export const ajax = ({url, method, headers, callback}) => {
	console.log();
	const xhr = new XMLHttpRequest();
	xhr.onload = function () {
		callback(JSON.parse(xhr.response));
	};
	xhr.open(method, url);
	for(let key in headers){
		if(headers.hasOwnProperty(key)) xhr.setRequestHeader(key, headers[key])
	}
	xhr.send();
};