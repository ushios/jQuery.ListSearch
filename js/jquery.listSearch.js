(function(jQuery){
	var ListSearch = function() {};
	ListSearch.prototype = {
		/**
		 * start list search
		 */
		start: function(input, target){
			var _this = this;
			var tagName = target.get(0).tagName;
			
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
	jQuery.fn.listSearch = function(input, options){
		var options = jQuery.extend(jQuery.fn.listSearch.defaults, options);
		
		// set using objects.
		var target = jQuery(this);
		switch (jQuery.type(input)){
			case 'string':
				input = $(input);
				break;
			case 'object':
				input = input;
				break;
			default:
				throw 'input object is invalid.';
		}
		
		// Event start
		listSearch = new ListSearch();
		listSearch.start(input, target);
		
		return target;
	};
	
	/**
	 * default settings.
	 */
	jQuery.fn.listSearch.defaults = {
		
	};
})(jQuery);
