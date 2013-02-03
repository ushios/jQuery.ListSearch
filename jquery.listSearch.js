(function($){
	var ListSearch = function() {};
	
	ListSearch.prototype = {
		/**
		 * start list search
		 */
		start: function(input, target, tagName){
			var _this = this;
			input.on('keyup', function(e){
				switch(tagName){
				case 'TABLE':
					_this.listSearchTable();
					break;
				case 'UL':
					_this.listSearchListUl();
					break;
				case 'OL':
					_this.listSearchListOl();
					break;
				case 'DL':
					_this.listSearchListDl();
					break;
				default:
					throw new Exception('Illegal tag name ' + targetObject.targetTagName);
				}
			});
		},
		
		/**
		 * tag table
		 */
		listSearchTable: function(){
			
		},
		
		/**
		 * tag ul
		 */
		listSearchListUl: function(){
			
		},
		
		/**
		 * tag ol
		 */
		listSearchListOl: function(){
			return this.listSearchListUl();
		},
		
		/**
		 * tag dl
		 */
		listSearchListDl: function(){
			
		}
	}
	
	/**
	 * Main stream
	 */
	$.fn.listSearch = function(config, options){
		var options = $.extend($.fn.listSearch.defaults, options);
		
		// config 
		var configLength = config.length;
		for (var configCnt = 0; configCnt < configLength; configCnt ++){
			// chack target tag type
			var target = $(config[configCnt]['target']);
			var targetTagName = target.get(0).tagName;
			
			// get input jquery object;
			var input = $(config[configCnt]['input']);
			
			// Event start
			listSearch = new ListSearch();
			listSearch.start(input, target, targetTagName);
			
			// create new Object.
			var targets = {
				'input': input,
				'target': target,
				'targetTagName': targetTagName,
				'listSearchObject': listSearch
			}
			
			config[configCnt] = targets;
		}
		
		console.log(config);
		
		return $(this);
	};
	
	/**
	 * default settings.
	 */
	$.fn.listSearch.defaults = {
		
	};
})(jQuery);