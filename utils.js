String.prototype.trimAll = function () {
	return this.replace(/\s/gm, "");
};
if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function (str) {
		return this.slice(0, str.length) === str;
	};
}
if (typeof String.prototype.endsWith != 'function') {
	String.prototype.endsWith = function (str) {
		return this.slice(-str.length) === str;
	};
}
if (typeof String.prototype.contains != 'function') {
	String.prototype.contains = function (str) {
		return this.indexOf(str) !== -1;
	};
}
String.prototype.capitalizeWords = function (splitterParam, replacerParam) {
	var newVal = this.toLowerCase();
	var replacer = [];
	var splitter = [' ', '.', '-', '/', '\\', '"', "'", ',', ";", ":", "?", '(', ')', "[", "]", "{", "}", "<", ">", "!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "_", "|"];
	if (splitterParam instanceof Array) {
		splitter = splitterParam;
	} else if (typeof splitterParam === "string") {
		splitter = [splitterParam];
	} else if (splitterParam instanceof RegExp) {
		splitter = [splitterParam];
	}
	if (replacerParam instanceof Array) {
		replacer = replacerParam;
	} else if (typeof replacerParam === "string") {
		replacer = [replacerParam];
	} else if (replacerParam instanceof RegExp) {
		replacer = [replacerParam];
	}

	for (var i = 0; i < replacer.length; i++) {
		newVal = newVal.replace(replacer[i], " ");
	}
	for (i = 0; i < splitter.length; i++) {
		var val = newVal;
		newVal = '';
		val = val.split(splitter[i]);
		for (var c = 0; c < val.length; c++) {
			newVal += val[c].substring(0, 1).toUpperCase() + (val[c].substring(1, val[c].length));
			if (c !== val.length - 1) {
				newVal += splitter[i];
			}
		}
	}
	return newVal;
};
