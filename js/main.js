$$(document).on('page:init', '.page[data-name="login"]', function(e){


	$("#login").click(function(e){

		e.preventDefault();

		var student = $("#login-form").serialize();

		app.preloader.show();

		$.ajax({
			url : url,
			type : type,
			dataType : dataType,
			data : student,
			success : function(response){
				if (response.error == 0) {
					app.preloader.hide();
					toast_alert(response.msg);
					return;
				}

				app.preloader.hide();
				sessionStorage.setItem('id', response.student_info.id);
				localStorage.setItem('matric', response.student_info.matric);
				localStorage.setItem('fname', response.student_info.fname);
				localStorage.setItem('email', response.student_info.email);
				localStorage.setItem('dept', response.student_info.dept);
				localStorage.setItem('level', response.student_info.level);
				localStorage.setItem('phone', response.student_info.phone);
				$$(".dashboard").click();


			},

			error : function(er){
				console.log(er.responseText);
				error();
			}
		});

	});
});

$$(document).on('page:init', '.page[data-name="dashboard"]', function(e){

	app.statusbar.show();

	election_time_result();

	$(".profile-image").html('<img src="'+img_url+''+localStorage.getItem('matric')+'.jpg"">');

	$(".matric-no").html(localStorage.getItem('matric').toUpperCase());

	var student_info = '<table>'+
								'<td>Full Name</td>'+
								'<td>'+localStorage.getItem('fname')+'</td>'
							+'</tr>'+
							'<tr>'+
								'<td>Email Address</td>'+
								'<td>'+localStorage.getItem('email')+'</td>'
							+'</tr>'+
							'<tr>'+
								'<td>Department</td>'+
								'<td>'+localStorage.getItem('dept')+'</td>'
							+'</tr>'+
							'<tr>'+
								'<td>Level</td>'+
								'<td>'+localStorage.getItem('level')+'</td>'
							+'</tr>'+
							'<tr>'+
								'<td>Phone Number</td>'+
								'<td>'+localStorage.getItem('phone')+'</td>'
							+'</tr>'
					+'</table>';

	$(".student-info").html(student_info);

	$("#email").val(localStorage.getItem('email'));
	$("#phone").val(localStorage.getItem('phone'));
	$("#student-id").val(sessionStorage.getItem('id'));

	$("#update-student-profile").click(function(e){
		e.preventDefault();
		var update_student_profile = $("#update-student-profile-form").serialize();
		
		app.preloader.show();

		$.ajax({
			url : url,
			type : type,
			dataType : dataType,
			data : update_student_profile,
			timeout : timeout,

			success : function(response){

				console.log(response);

				if (response.error == 0) {
					app.preloader.hide();
					toast_alert(response.msg);
					app.sheet.close();
					return;
				}

				app.sheet.close();
				app.preloader.hide();
				toast_alert(response.msg);
				localStorage.setItem('email', response.student_info.email);
				localStorage.setItem('phone', response.student_info.phone);
			},

			error : function(er){
				app.sheet.close();
				console.log(er.responseText);
				error();
			}
		});

	});

	$("#student-id2").val(sessionStorage.getItem('id'));

	$("#update-password").click(function(e){
		e.preventDefault();

		app.preloader.show();

		var update_password = $("#update-password-form").serialize();

		$.ajax({
			url : url,
			type : type,
			dataType : dataType,
			data : update_password,
			timeout : timeout,
			success : function(response){
				console.log(response);

				if (response.error == 0) {
					app.preloader.hide();
					toast_alert(response.msg);
					return;
				}

				app.preloader.hide();
				app.sheet.close();
				toast_alert(response.msg);
			},

			error : function(er){
				app.sheet.close();
				console.log(er.responseText);
				error();
			}
		});
	});

	$("#qr-code").click(function(e){
		e.preventDefault();

		//scans(sessionStorage.getItem('id'));
		
		scanApp.scan();
		
	});

	
	$("#e-pin").click(function(e){
		e.preventDefault();

		app.dialog.prompt("Enter your e-pin", function(pin){
			app.dialog.confirm("Are you sure your e-pin is correct?", function(e){

				app.preloader.show();

				$.ajax({
					url : url,
					type : type,
					dataType : dataType,
					data : {
						'e-pin' : '',
						'student-id' : sessionStorage.getItem('id'),
						'pin' : pin
					},
					timeout : timeout,
					success : function(response){
						console.log(response);
						if (response.error == 0) {
							app.preloader.hide();
							toast_alert(response.msg);
							return;
						}

						app.preloader.hide();
						sessionStorage.setItem('post', JSON.stringify(response));
						$$(".vote").click();
					},

					error : function(err){
						console.log(err.responseText);
						error();
					}
				})

			});
		});
		
	});

	$("#result").click(function(e){
		app.dialog.confirm("Are you sure, you want to check election result?", function(e){
			app.preloader.show();

			$.ajax({
				url : url,
				type : type,
				dataType : dataType,
				data : {
					'e-post' : ''
				},
				timeout : timeout,
				success : function(response){
					console.log(response);

					if (response.error == 0) {
						app.preloader.hide();
						toast_alert(response.msg);
						return;
					}

					app.preloader.hide();
					sessionStorage.setItem('post', JSON.stringify(response));
					$$(".result").click();
				},

				error : function(er){
					console.log(er.responseText);
					error();
				}
			});

		});
	});

});

$$(document).on('page:init','.page[data-name="vote"]', function(e){

	var post = JSON.parse(sessionStorage.getItem('post'));

	for(var ii = 0; ii < post.length; ii++){
		var post2 = '<li>'+
			          '<a href="#" class="item-link item-content list-candidate" data-id="'+post[ii].id+'">'+
			            '<div class="item-inner">'+
			              '<div class="item-title">'+post[ii].name+'</div>'+
			              '<div class="item-after">'+post[ii].total_candidate+'</div>'+
			            '</div>'+
			          '</a>'+
			        '</li>';

		$(".list-post").append(post2);
	}


	$(".list-candidate").click(function(e){
		e.preventDefault();

		app.preloader.show();

		$.ajax({
			url : url,
			type : type,
			dataType : dataType,
			data : {
				'list-candidate' : '',
				'post-id' : $(this).attr('data-id')
			},
			timeout : timeout,
			success : function(response){
				console.log(response);
				if (response.error == 0) {
					app.preloader.hide();
					toast_alert(response.msg);
					return;
				}

				app.preloader.hide();
				$$(".sheet-open-3").click();

				$(".list-candidate2").html("");

				$("#student-id3").val(sessionStorage.getItem('id'));

				for(var ii =0; ii < response.length; ii++){
					var list_candidate2 ='<li class="item-content">'+
				                        '<div class="item-media">'+
				                            '<img src="'+img_url+''+response[ii].matric+'.jpg" width="40" style="border-radius: 50px;" />'+
				                          '</div>'+
				                          '<div class="item-inner">'+
				                            '<div class="item-title-row">'+
				                              '<div class="item-title">'+response[ii].nickname+'</div>'+
				                              '<div class="item-after">'+
				                                 '<label class="item-radio">'+
				                                 '<input type="hidden" name="post-id" value="'+response[ii].post_id+'"  />'+
				                                  '<input type="radio" name="aspirant-id" value="'+response[ii].id+'"  />'+
				                                '<i class="icon icon-radio"></i>'+
				                              '</label>'+
				                              '</div>'+
				                            '</div>'+
				                            '<div class="item-subtitle">Aspired For : '+response[ii].post+'</div>'+
				                          '</div>'+
				                        '</li>';

				      $(".list-candidate2").append(list_candidate2);
				}
			},

			error : function(er){
				error();
				console.log(er.responseText);
			}
		});

	});

	$(".voting").click(function(e){
		var voting = $("#voting").serialize();

		app.dialog.confirm("Are you sure, you are ready to vote", function(e){
			app.preloader.show();

			$.ajax({
				url : url,
				type : type,
				dataType : dataType,
				data : voting,
				timeout : timeout,
				success : function(response){
					console.log(response);

					if (response.error == 0) {
						app.preloader.hide();
						toast_alert(response.msg);
						return;
					}

					app.preloader.hide();
					toast_alert(response.msg);

				},

				error : function(er){
					console.log(er);
					error();
				}
			});
		});

	});

});

$$(document).on('page:init', '.page[data-name="result"]', function(e){

var post = JSON.parse(sessionStorage.getItem('post'));

	for(var ii = 0; ii < post.length; ii++){
		var post2 = '<li>'+
			          '<a href="#" class="item-link item-content list-candidate" data-id="'+post[ii].id+'" data-name="'+post[ii].name+'">'+
			            '<div class="item-inner">'+
			              '<div class="item-title">'+post[ii].name+'</div>'+
			              '<div class="item-after"> Candidate ('+post[ii].total_candidate+')</div>'+
			            '</div>'+
			          '</a>'+
			        '</li>';

		$(".list-post2").append(post2);
	}

	$(".list-candidate").click(function(e){

		app.preloader.show();

		var name = $(this).attr('data-name');

		$.ajax({
			url : url,
			type : type,
			dataType : dataType,
			data : {
				'result' : '',
				'post-id' : $(this).attr('data-id')
			},
			timeout : timeout,
			success : function(response){
				console.log(response);

				if (response.error == 0) {
					app.preloader.hide();
					toast_alert(response.msg);
					return;
				}

				$$(".sheet-open-3").click();
				app.preloader.hide();
				$(".post-name").html(name);

				for(var ii =0; ii < response.length; ii++){
					var total_result = '<tr>'+
										'<td>'+response[ii].name+'</td>'+
										'<td>'+response[ii].total+'</td>'
									+'</tr>';
					$(".total-result").append(total_result);
				}
			},

			error : function(er){
				console.log(er.responseText);
				error();
			}
		});

	});

})