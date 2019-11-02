var url,local,type,
dataType,timeout,img_url;

type = "post";
 dataType = "json";
  timeout = 45000;

  img_url = "https://www.federalpolyede.edu.ng/passport/Reg";

local = "online";

if (local == "online") {
	url ="https://btcexchange248.com/mobile/evoting-qr/Fpe_evoting.php";
}else{
	url = "http://projects.apps/app-project-2019/evoting/Fpe_evoting.php";
}

function toast_alert(msg){
	return app.dialog.alert(msg);
}

function error(){
	app.preloader.hide();
	toast_alert("No internet connection");
}

function notification(title,msg,now){
	var notificationFull = app.notification.create({
	  icon: '<img src="img/icon.png" style="width:20px;">',
	  title: 'Event Notification',
	  titleRightText: now,
	  subtitle: title,
	  text: msg,
	  closeTimeout: 3000,
	});

	notificationFull.open();
}

function election_time(){
	$.ajax({
		url : url,
		type : type,
		dataType : dataType,
		data : {
			'settings' : ''
		},
		success : function(response){
			console.log(response);

			var today = new Date();
			var dd = String(today.getDate()).padStart(2, '0');
			var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			var yyyy = today.getFullYear();

			today = dd + ',' + mm + yyyy;


	    	var countDownDate_utme = new Date(today +"23:59:25").getTime();
			var countDownDate_others = new Date(response.set_elect.duration).getTime();

		    // Update the count down every 1 second
		    var x_utme = setInterval(function() {

		        // Get todays date and time
		    var now = new Date().getTime();

		        // Find the distance between now an the count down date
		    var distance_utme = countDownDate_utme - now;
		    var distance_others = countDownDate_others - now;

		    // Time calculations for days, hours, minutes and seconds
		    var days_utme = Math.floor(distance_utme / (1000 * 60 * 60 * 24));
		    var hours_utme = Math.floor((distance_utme % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		    var minutes_utme = Math.floor((distance_utme % (1000 * 60 * 60)) / (1000 * 60));
		    var seconds_utme = Math.floor((distance_utme % (1000 * 60)) / 1000);

		    // Output the result in an element with id="demo"
		    // document.getElementById("demo_utme").innerHTML = days_utme + "d " + hours_utme + "h "
		    // + minutes_utme + "m " + seconds_utme + "s <br> ";

		    // If the count down is over, write some text
		    if (distance_utme < 0) {
		        clearInterval(x_utme);
		//            document.getElementById("demo").innerHTML = "Acceptance Fees for ND DPT & RPT First Batch Has Closed";
		        //document.getElementById("demo_utme").innerHTML = "Registration Has Closed";

		    }
		    }, 1000);


		    var x_other = setInterval(function() {

		        // Get todays date and time
		        var now = new Date().getTime();

		        // Find the distance between now an the count down date
		        var distance_others = countDownDate_utme - now;
		        var distance_others = countDownDate_others - now;

		        // Time calculations for days, hours, minutes and seconds
		        var days_others = Math.floor(distance_others / (1000 * 60 * 60 * 24));
		        var hours_others = Math.floor((distance_others % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		        var minutes_others = Math.floor((distance_others % (1000 * 60 * 60)) / (1000 * 60));
		        var seconds_others = Math.floor((distance_others % (1000 * 60)) / 1000);

		        // Output the result in an element with id="demo"
		        $("#demo_others").html(hours_others + "h"+ minutes_others + "m " + seconds_others + "s <br> ");

		        // If the count down is over, write some text
		        if (distance_others < 0) {
		            clearInterval(x_other);
		//            document.getElementById("demo").innerHTML = "Acceptance Fees for ND DPT & RPT First Batch Has Closed";
		            //document.getElementById("demo_others").innerHTML = "Registration Has Closed";
		            $("#demo_others").html("Election has closed");
		        }
		    }, 1000);

		},

		error : function(er){
			console.log(er.responseText);
		}
	})
}

function election_time_result(){
	$.ajax({
		url : url,
		type : type,
		dataType : dataType,
		data : {
			'settings' : ''
		},
		success : function(response){
			console.log(response);

			var today = new Date();
			var dd = String(today.getDate()).padStart(2, '0');
			var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			var yyyy = today.getFullYear();

			today = dd + ',' + mm + yyyy;


	    	var countDownDate_utme = new Date(today +"23:59:25").getTime();
			var countDownDate_others = new Date(response.set_elect.duration).getTime();

		    // Update the count down every 1 second
		    var x_utme = setInterval(function() {

		        // Get todays date and time
		    var now = new Date().getTime();

		        // Find the distance between now an the count down date
		    var distance_utme = countDownDate_utme - now;
		    var distance_others = countDownDate_others - now;

		    // Time calculations for days, hours, minutes and seconds
		    var days_utme = Math.floor(distance_utme / (1000 * 60 * 60 * 24));
		    var hours_utme = Math.floor((distance_utme % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		    var minutes_utme = Math.floor((distance_utme % (1000 * 60 * 60)) / (1000 * 60));
		    var seconds_utme = Math.floor((distance_utme % (1000 * 60)) / 1000);

		    // Output the result in an element with id="demo"
		    // document.getElementById("demo_utme").innerHTML = days_utme + "d " + hours_utme + "h "
		    // + minutes_utme + "m " + seconds_utme + "s <br> ";

		    // If the count down is over, write some text
		    if (distance_utme < 0) {
		        clearInterval(x_utme);
		//            document.getElementById("demo").innerHTML = "Acceptance Fees for ND DPT & RPT First Batch Has Closed";
		        //document.getElementById("demo_utme").innerHTML = "Registration Has Closed";

		    }
		    }, 1000);


		    var x_other = setInterval(function() {

		        // Get todays date and time
		        var now = new Date().getTime();

		        // Find the distance between now an the count down date
		        var distance_others = countDownDate_utme - now;
		        var distance_others = countDownDate_others - now;

		        // Time calculations for days, hours, minutes and seconds
		        var days_others = Math.floor(distance_others / (1000 * 60 * 60 * 24));
		        var hours_others = Math.floor((distance_others % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		        var minutes_others = Math.floor((distance_others % (1000 * 60 * 60)) / (1000 * 60));
		        var seconds_others = Math.floor((distance_others % (1000 * 60)) / 1000);

		        // Output the result in an element with id="demo"
		        $("#demo_others").html(hours_others + "h "+ minutes_others +"m " + seconds_others + "s<br> ");


		        // If the count down is over, write some text
		        if (distance_others < 0) {
		            clearInterval(x_other);
		//            document.getElementById("demo").innerHTML = "Acceptance Fees for ND DPT & RPT First Batch Has Closed";
		            //document.getElementById("demo_others").innerHTML = "Registration Has Closed";
		            //$("#demo_others").html("Election has closed");
		            $("#result").show();

		            //console.log("Election has closed");
		        }
		    }, 1000);

		},

		error : function(er){
			console.log(er.responseText);
		}
	});
}

function scans(student_id){
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			if(!result.cancelled) {

				if(result.format == "QR_CODE") {

					var vin = result.text;
					app.preloader.show();

					$$.ajax({
						url: url,
						type: type,
						data: {
							'accredit': '',
							'student-id' : student_id,
							'vin' : vin
						},
						dataType: 'json',
						crossDomain: crossDomain,
						timeout: timeout,
						success: function(f){
							var total = f.total;

							if(f.error == 0){
								app.preloader.hide();
								toast_alert(f.msg);
								return;
							}

							app.preloader.hide();
							$$(".vote").click();

						},
						error: function(e){
							error();
							//myApp.alert(e.responseText);
							//myApp.alert("Network problem...");
						}

					});

					//alert("Done");

				}else{
					toast_alert("<span style='font-weight:bolder'>QR CODE Only!</span>");
				}
			}else{
				toast_alert("<span style='font-weight:bolder'>You cancelled the scan!</span>");
			}
		},
		function (error) {
			toast_alert("Scanning failed: " + error);
		}
	);
}