
/**
 * Execute a jQuery Ajax Get
 * @param {String} url - URL to execute against
 * @param {function} success - Function callback on success
 * @param {function} error - Function callback on error
 */
function executeGet(url, success, error) {
	$.ajax({
		url: url,
		type: 'GET',
		success: success,
		error: error
	});	
}

/**
 * Execute a jQuery Ajax POST
 * @param {String} url - URL to execute against
 * @param {Object} data - Data to send 
 * @param {String} contentType - Content type string  
 * @param {function} success - Function callback on success
 * @param {function} error - Function callback on error
 */
function executePost(url, data, contentType, success, error) {
	$.ajax({
		url: url,
		type: 'POST',
		data: data,
		contentType: contentType,
		success: success,
		error: error
	});	
}

/**
 * Execute a jQuery Ajax PUT
 * @param {String} url - URL to execute against
 * @param {Object} data - Data to send 
 * @param {String} contentType - Content type string  
 * @param {function} success - Function callback on success
 * @param {function} error - Function callback on error
 */
function executePut(url, data, contentType, success, error) {
	$.ajax({
		url: url,
		type: 'PUT',
		data: data,
		contentType: contentType,
		success: success,
		error: error
	});
}

/**
 * Execute a jQuery Ajax DELETE
 * @param {String} url - URL to execute against
 * @param {Object} data - Data to send 
 * @param {String} contentType - Content type string  
 * @param {function} success - Function callback on success
 * @param {function} error - Function callback on error
 */
function executeDelete(url, success, error) {
	$.ajax({
		url: url,
		type: 'DELETE',
		success: success,
		error: error
	});	
}