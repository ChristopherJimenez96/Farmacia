module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{php,css,js,eot,svg,ttf,woff,otf,html,less,jpg,png,swf,json,md,sh,template,gif,sql,txt,xml,skel,afm,ufm,htm,ser,LGPL,pdf}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};