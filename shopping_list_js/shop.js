$(document).ready(function(){
	//Alphabetical Sort
	$("button#alpha").click(function(event){
		event.preventDefault();
		$("ul#sorted_list li").sort(function(a,b){
			return ($(b).text().toLowerCase())<($(a).text().toLowerCase());
		})
		.appendTo("ul#sorted_list");
	});
	//Checkbox Strikethrough Item Text
	$("input.check").change(function(){
		$(this).siblings(".items").toggleClass("strike");
	});
	//Removing Checked Items
	$("button#delete").click(function(event){
		event.preventDefault();
		$("ul#sorted_list").each(function(){
			if($(this).find(".items").hasClass("strike")){
				$(this).remove();
			}
		});
	});
	//Text Edit with Double Click
	$("p.items").dblclick(function(){
		$(this).hide().after("<textarea class=\"edit\" maxlength=\"140\"></textarea>");
		$("textarea.edit").focus();
	//Handles Pressing Enter in Text Area
		$("textarea.edit").keypress(function(event){
			if(event.which == 13){
				event.preventDefault();
				$("p.items").show();
	//This tests if no text or whitespace was entered
				if(!$.trim($(this).val())){
					$("textarea.edit").remove();
				}
				else {
					$(this).siblings("p").html($(this).val());
					$("textarea.edit").remove();
				}
			}
		});
	//Handles Clicking Outside Text Area
		$(document).click(function(event){
			$("p.items").show();
	//This tests if no text or whitespace was entered
			if(!$.trim($("textarea.edit").val())){
				$("textarea.edit").remove();
			}
			else {
				$("textarea.edit").siblings("p").html($("textarea.edit").val());
				$("textarea.edit").remove();
			}
		});
	//Handles vertical resizing and escaping out of text area
		$("textarea.edit").keyup(function(event){
			$(this).height($(this).prop("scrollHeight"));
			if(event.which == 27){
				event.preventDefault();
				$("p.items").show();
				$("textarea.edit").remove();
			}
		});	
	});
	//Adding Items
	$("input#new_item").keypress(function(event){
		if(event.which == 13){
			event.preventDefault();
	//Checks if no text or whitespace was entered
			if(!$.trim($(this).val())){
				$("input#new_item").val("Items");
			}
			console.log($("input#new_item").val());
			$("li#base").clone(true).attr("class","").attr("id","").appendTo("#sorted_list");
			$("#sorted_list>li:last>span>input.items").text($("input#new_item").val());
			$("input#new_item").val("");

			var doc_height = $(document).height();
			var win_height = $(window).height();

			if(doc_height > win_height){
				$("center#wrapper").css("height","auto");
			}
		}
	});
});