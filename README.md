jQuery.ListSearch
=================

Incremental search for table, ul, and ol tags.


Usage
--------------
javascript

    <script>
    $(function(){
     objects = [
    		{'input':'#tableText', 'target':'#searchTable' }
    	]
    	
    	$().listSearch(objects);
    });
    </script>

html

    <div>
      <h2>Table test.</h2>
    	<label>search:<input id="tableText" type="text" /></label>
    	<table id="searchTable">
    		<tr>
    			<th>name</th><th>value</th>
    		</tr>
    		<tr>
    			<td>Sato</td><td>Taro</td>
    		</tr>
    		<tr>
    			<td>Sato</td><td>Hanako</td>
    		</tr>
    		<tr>
    			<td>Suzuki</td><td>Jiro</td>
    		</tr>
    		<tr>
    			<td>田中</td><td>半兵衛</td>
    		</tr>
    	</table>
    </div>


License
---------------
Copyright &copy; 2013 UshioShugo
Dual licensed under the [MIT license][MIT] and [GPL license][GPL].

[MIT]: http://www.opensource.org/licenses/mit-license.php
[GPL]: http://www.gnu.org/licenses/gpl.html

Contact
----------------
UshioShugo <ushio.s+github@gmail.com>
