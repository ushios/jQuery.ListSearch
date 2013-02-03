(function($){
	var ListSearch = function() {};
	
	ListSearch.prototype = {
		/**
		 * start list search
		 */
		start: function(input, target, tagName){
			var _this = this;
			
			input.on('keyup', function(e){
				text = _this.getInputText(input);
				
				switch(tagName){
				case 'TABLE':
					_this.listSearchTable(target, text);
					break;
				case 'UL':
					_this.listSearchListUl(target, text);
					break;
				case 'OL':
					_this.listSearchListOl(target, text);
					break;
				case 'DL':
					_this.listSearchListDl(target, text);
					break;
				default:
					throw new Error('Illegal tag name ' + targetObject.targetTagName);
				}
			});
		},
		
		getInputText: function(input){
			return input.val();
		},
		
		/**
		 * tag table
		 */
		listSearchTable: function(target, text){
			this.listSearchCommon('tr', target, text);
		},
		
		/**
		 * tag ul
		 */
		listSearchListUl: function(target, text){
			this.listSearchCommon('li', target, text);
		},
		
		/**
		 * tag ol
		 */
		listSearchListOl: function(target, text){
			return this.listSearchListUl(target, text);
		},
		
		/**
		 * tag dl
		 */
		listSearchListDl: function(target, text){
			this.listSearchCommon('dd dt', target, text);
		},
		
		/**
		 * commondSearchList
		 */
		listSearchCommon: function(tagName ,target, text){
			var _this = this;
			target.find(tagName).each(function(){
				var displayFlag = $(this).text().match(text);
				$(this).css('display', _this.getDisplayProperty(tagName, displayFlag));
			})
		},
		
		getDisplayProperty: function(tagName, flag){
			switch(tagName){
			case 'tr':
				return flag?'table-row':'none';
			case 'li':
				return flag?'list-item':'none';
			case 'dd dt':
				return flag?'list-item':'none';
			default:
				throw new Error('Illegal tag name ' + targetObject.targetTagName);
			}
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