[[$header]]
<body>
[[$top-menu-main]]
[[$main-menu-main? &className=`otherwise-menu-b`]]

<div class="blog-main">
	<div class="blog-content">
		[[!getResources:default=``? 
			&parents=`[[*id]]` 
			&includeTVs=`1` 
			&limit = `1` 
			&processTVs=`1` 
			&tpl = `blog-item-first` &depth=`1` &sortby=`menuindex` &sortdir=`asc`]]
		<span class="recently">недавнее</span>
		<div class="recently">
				[[!getPage? &element=`getResources` &parents=`[[*id]]` &offset= `1` &tpl=`blog-items-all` &pageLimit=`4` 	&limit=`9999`]]
    		    <div class="pageNav">[[!+page.nav]]</div>
		</div>
	</div>

	<div class="blog-side-bar">
		<span class="sidebar-new-feature">популярное</span>
		[[$blog-sidebar-new]]
		[[$blog-sidebar-tags]]
	</div>
</div>

[[$footer]]
[[$script-block-end]]
</body>
</html>
