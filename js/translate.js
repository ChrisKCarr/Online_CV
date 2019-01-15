function TransMod(){
	this.translate = function(lang, token) {
		return library[lang][token];
	}

	var library = new Array();

	library["en"] = new Array();
	library["en"]["translatable.title"] = "I'm Christopher Carr.";
	library["en"]["translatable.job"] = "Software Developer";
	library["en"]["translatable.more"] = "More About Me";
	library["en"]["translatable.about"] = "About";
	library["en"]["translatable.profile"] = "Profile";
	library["en"]["translatable.profile-info"] = "Highly efficient, result driven Software Developer with proven track record of designing and developing high quality Python modules, application development, and data analysis. Leverage expertise in troubleshooting, debugging, and implementing software code with existing or developed systems. Actively participate in all phases of the lifecycle of software application development. Thrive in a multi-disciplinary, diverse, and dynamic team environment. Proactive, self-motivated with strong sense of ownership and business-facing communication skills.";
	library["en"]["translatable.skills"] = "Skills";
	library["en"]["translatable.gis"] = "Geographic Information Systems (GIS)";
	library["en"]["translatable.ml"] = "Python";
	library["en"]["translatable.lib"] = "Numpy, Pandas and Arcpy";
	library["en"]["translatable.sql"] = "Basic SQL";
	library["en"]["translatable.fullname"] = "Full Name";
	library["en"]["translatable.fname"] = "Christopher Carr";
	library["en"]["translatable.jobx"] = "Job";
	library["en"]["translatable.hire"] = "Hire Me";
	library["en"]["translatable.download"] = "Download CV";
	library["en"]["translatable.resume"] = "Résumé";
	library["en"]["translatable.cred"] = "More of my credentials.";
	library["en"]["translatable.edu"] = "Education";
	library["en"]["translatable.time0"] = "June 2012 - May 2016";
	library["en"]["translatable.study"] = "Bachelor of Science in Geography";
	library["en"]["translatable.minor"] = "Minor: Climatology (GPA: 3.6)";
	library["en"]["translatable.work"] = "Work Experience";
	library["en"]["translatable.python1"] = "Optimized ArcGIS workﬂows using python models and built various starter projects, including text-based applications, webpages, and a fully functional web scrapper.";
	library["en"]["translatable.python2"] = "Demonstrate strong Python coding experience with solid understanding of Python internals and code optimization.";
	library["en"]["translatable.python3"] = "Effectively implement Pandas library in combination with ArcGIS extension for use with data analytics.";
	library["en"]["translatable.pythondev"] = "Python Developer";
	library["en"]["translatable.time1"] = "July 2018 - Present";
	library["en"]["translatable.job1"] = "Freelance, Warrenton, Virginia";
	library["en"]["translatable.gist"] = "GIS Technician";
	library["en"]["translatable.time2"] = "Nov 2017 - Present";
	library["en"]["translatable.job2"] = "Fauquier County Government, Warrenton, Virginia";
	library["en"]["translatable.gis1"] = "Created cartographically pleasing maps and provided technical GIS assistance for government departments, corporate clients, and county citizens.";
	library["en"]["translatable.gis2"] = "Complete GIS specialized project requests for map creation and GPS data collection using GNSS receiver tablets.";
	library["en"]["translatable.gis3"] = "Design GIS applications and tools for government departments, accurately delivering project within scheduled timeline.";
	library["en"]["translatable.geo"] = "Geospatial Analyst";
	library["en"]["translatable.time3"] = "Oct 2016 - Nov 2017";
	library["en"]["translatable.geo1"] = "Utilized highly complicated industry-speciﬁc technical skills, analytical techniques and methodologies, software tools, and industry best-practices to deliver client solution projects.";
	library["en"]["translatable.geo2"] = "Analyzed parameters of problem and contracted deliverables prior to setting-up projects, delivering quality projects according to clients' requirements.";
	library["en"]["translatable.geo3"] = "Employed quality check methodologies and conﬁrmed accuracy and readiness for client delivery.";
	library["en"]["translatable.serv"] = "Services";
	library["en"]["translatable.what"] = "What Can I Do For You?";
	library["en"]["translatable.se"] = "Software Engineering";
	library["en"]["translatable.proj"] = "Project Management";
	library["en"]["translatable.data"] = "Data Collection";
	library["en"]["translatable.ms"] = "MS Office Suite";
	library["en"]["translatable.con"] = "Contact";
	library["en"]["translatable.hear"] = "I'd Love To Hear From You.";
	library["en"]["translatable.where"] = "Where to find me";
	library["en"]["translatable.emailat"] = "Email Me At";
	library["en"]["translatable.call"] = "Call Me At";

	library["pl"] = new Array();
	library["pl"]["translatable.title"] = "Jestem Krzysztof Jacyk.";
	library["pl"]["translatable.job"] = "Programista";
	library["pl"]["translatable.more"] = "Więcej o mnie";
	library["pl"]["translatable.about"] = "O mnie";
	library["pl"]["translatable.profile"] = "Profil";
	library["pl"]["translatable.profile-info"] = "Wysoce produktywny, nastawiony na wyniki Programista z popartymi dowodami osiągnięciami w projektowaniu i rozwijaniu wysokiej jakości modułów Pythona, rozwoju aplikacji oraz analizie danych. Wiedza fachowa w rozwiązywaniu problemów, debugowaniu oraz implementacji kodu programowego w istniejących bądź rozwijanych systemach. Aktywny udział we wszystkich fazach cyklu życia rozwoju aplikacji oprogramowania. Praca w wielodyscyplinarnym, różnorodnym oraz dynamicznym zespole to jego żywioł. Aktywny, zmotywowany, o silnym poczuciu odpowiedzialności oraz zdolnościach komunikacyjnych w środowisku biznesowym.";
	library["pl"]["translatable.skills"] = "Umiejętności";
	library["pl"]["translatable.gis"] = "Systemy Informacji Geograficznej (GIS)";
	library["pl"]["translatable.ml"] = "Python";
	library["pl"]["translatable.lib"] = "Biblioteki Numpy, Pandas i Arcpy";
	library["pl"]["translatable.sql"] = "Podstawy SQL";
	library["pl"]["translatable.fullname"] = "Pełne imię i nazwisko";
	library["pl"]["translatable.fname"] = "Krzysztof Jacyk";
	library["pl"]["translatable.jobx"] = "Praca";
	library["pl"]["translatable.hire"] = "Zatrudnij mnie";
	library["pl"]["translatable.download"] = "Ściągnij CV";
	library["pl"]["translatable.resume"] = "Wznawianie";
	library["pl"]["translatable.cred"] = "Więcej moich referencji.";
	library["pl"]["translatable.edu"] = "Wykształcenie";
	library["pl"]["translatable.time0"] = "Czerwiec 2012 - Maj 2016";
	library["pl"]["translatable.study"] = "Studia Licencjackie z Geografii";
	library["pl"]["translatable.minor"] = "Specjalizacja:  Klimatologia (średnia: 3.6)";
	library["pl"]["translatable.work"] = "Doświadczenie";
	library["pl"]["translatable.python1"] = "Optymalizował przepływy pracy ArcGIS przy pomocy modeli Pythona oraz budował różne projekty startowe, w tym aplikacje tekstowe, strony web oraz w pełni funkcjonalny web scrapper.";
	library["pl"]["translatable.python2"] = "Wykazywał spore doświadczenie w programowaniu w Pythonie wraz z solidnym zrozumieniu tajników Pythona oraz optymalizacji kodu.";
	library["pl"]["translatable.python3"] = "Skutecznie zaimplementował bibliotekę Pandas w połączeniu z rozszerzeniem ArcGIS na potrzeby analizy danych.";
	library["pl"]["translatable.pythondev"] = "Programista Python";
	library["pl"]["translatable.time1"] = "Lip. 2018 - Nadal";
	library["pl"]["translatable.job1"] = "Samozatrudniony, Warrenton, Wirginia";
	library["pl"]["translatable.gist"] = "Technik GIS";
	library["pl"]["translatable.time2"] = "Lis. 2017 - Nadal";
	library["pl"]["translatable.job2"] = "Urząd Hrabstwa Fauquier, Warrenton, Wirginia";
	library["pl"]["translatable.gis1"] = "Tworzył kartograficznie satysfakcjonujące mapy oraz oferował wsparcie techniczne w GIS dla administracji rządowej, klientów firmowych oraz mieszkańców hrabstwa.";
	library["pl"]["translatable.gis2"] = "Wykonywał zlecenia specjalistycznych projektów GIS w zakresie tworzenia map oraz zbierania danych GPS przy użyciu odbiorników GNSS.";
	library["pl"]["translatable.gis3"] = "Projektował aplikacje i narzędzia GIS na potrzeby administracji rządowej, dostarczając na czas prawidłowo wykonane projekty.";
	library["pl"]["translatable.geo"] = "Analityk Geoprzestrzenny";
	library["pl"]["translatable.time3"] = "Paź. 2016 - Lis. 2017";
	library["pl"]["translatable.geo1"] = "Wykorzystywał wysoce zaawansowane branżowe umiejętności techniczne, metodologie i techniki analityczne, oprogramowanie narzędziowe oraz najlepsze praktyki w branży, aby dostarczyć klientom potrzebne im rozwiązania.";
	library["pl"]["translatable.geo2"] = "Analizował parametry problemu oraz wymogi u   mowne przed opracowaniem projektu, dostarczając wysokiej jakości projekty odpowiadające wymogom klientów.";
	library["pl"]["translatable.geo3"] = "Wdrażał metodologie kontroli jakości oraz sprawdzoną dokładność i gotowość w odpowiedzi na potrzeby klienta.";
	library["pl"]["translatable.serv"] = "Usługi";
	library["pl"]["translatable.what"] = "Co mogę dla ciebie zrobić?";
	library["pl"]["translatable.se"] = "Inżynieria oprogramowania";
	library["pl"]["translatable.proj"] = "Zarządzanie projektem";
	library["pl"]["translatable.data"] = "Gromadzenie danych";
	library["pl"]["translatable.ms"] = "Pakiet MS Office";
	library["pl"]["translatable.con"] = "Kontakt";
	library["pl"]["translatable.hear"] = "Chciałbym usłyszeć od ciebie.";
	library["pl"]["translatable.where"] = "Gdzie mnie znaleźć";
	library["pl"]["translatable.emailat"] = "Wyślij mi e-mail na adres";
	library["pl"]["translatable.call"] = "Zadzwoń do mnie";

}

( function(){

	function InitStaticText(lang){
		var langModule = new TransMod();

		$("#name").html(langModule.translate(lang, $("#name").attr("data-token")));
		$("#job").html(langModule.translate(lang, $("#job").attr("data-token")));
		$("#more").html(langModule.translate(lang, $("#more").attr("data-token")));
		$("#about-t").html(langModule.translate(lang, $("#about-t").attr("data-token")));
		$("#profile").html(langModule.translate(lang, $("#profile").attr("data-token")));
		$("#profile-info").html(langModule.translate(lang, $("#profile-info").attr("data-token")));
		$("#skills").html(langModule.translate(lang, $("#skills").attr("data-token")));
		$("#gis").html(langModule.translate(lang, $("#gis").attr("data-token")));
		$("#ml").html(langModule.translate(lang, $("#ml").attr("data-token")));
		$("#lib").html(langModule.translate(lang, $("#lib").attr("data-token")));
		$("#sql").html(langModule.translate(lang, $("#sql").attr("data-token")));
		$("#fullname").html(langModule.translate(lang, $("#fullname").attr("data-token")));
		$("#fname").html(langModule.translate(lang, $("#fname").attr("data-token")));
		$("#jobx").html(langModule.translate(lang, $("#jobx").attr("data-token")));
		$("#hire").html(langModule.translate(lang, $("#hire").attr("data-token")));
		$("#sd").html(langModule.translate(lang, $("#sd").attr("data-token")));
		$("#download").html(langModule.translate(lang, $("#download").attr("data-token")));
		$("#resumex").html(langModule.translate(lang, $("#resumex").attr("data-token")));
		$("#cred").html(langModule.translate(lang, $("#cred").attr("data-token")));
		$("#edu").html(langModule.translate(lang, $("#edu").attr("data-token")));
		$("#time0").html(langModule.translate(lang, $("#time0").attr("data-token")));
		$("#study").html(langModule.translate(lang, $("#study").attr("data-token")));
		$("#minor").html(langModule.translate(lang, $("#minor").attr("data-token")));
		$("#work").html(langModule.translate(lang, $("#work").attr("data-token")));
		$("#python1").html(langModule.translate(lang, $("#python1").attr("data-token")));
		$("#python2").html(langModule.translate(lang, $("#python2").attr("data-token")));
		$("#python3").html(langModule.translate(lang, $("#python3").attr("data-token")));
		$("#pythondev").html(langModule.translate(lang, $("#pythondev").attr("data-token")));
		$("#time1").html(langModule.translate(lang, $("#time1").attr("data-token")));
		$("#job1").html(langModule.translate(lang, $("#job1").attr("data-token")));
		$("#gist").html(langModule.translate(lang, $("#gist").attr("data-token")));
		$("#time2").html(langModule.translate(lang, $("#time2").attr("data-token")));
		$("#job2").html(langModule.translate(lang, $("#job2").attr("data-token")));
		$("#gis1").html(langModule.translate(lang, $("#gis1").attr("data-token")));
		$("#gis2").html(langModule.translate(lang, $("#gis2").attr("data-token")));
		$("#gis3").html(langModule.translate(lang, $("#gis3").attr("data-token")));
		$("#geo").html(langModule.translate(lang, $("#geo").attr("data-token")));
		$("#time3").html(langModule.translate(lang, $("#time3").attr("data-token")));
		$("#geo1").html(langModule.translate(lang, $("#geo1").attr("data-token")));
		$("#geo2").html(langModule.translate(lang, $("#geo2").attr("data-token")));
		$("#geo3").html(langModule.translate(lang, $("#geo3").attr("data-token")));
		$("#serv").html(langModule.translate(lang, $("#serv").attr("data-token")));
		$("#what").html(langModule.translate(lang, $("#what").attr("data-token")));
		$("#se").html(langModule.translate(lang, $("#se").attr("data-token")));
		$("#proj").html(langModule.translate(lang, $("#proj").attr("data-token")));
		$("#data").html(langModule.translate(lang, $("#data").attr("data-token")));
		$("#ms").html(langModule.translate(lang, $("#ms").attr("data-token")));
		$("#con").html(langModule.translate(lang, $("#con").attr("data-token")));
		$("#hear").html(langModule.translate(lang, $("#hear").attr("data-token")));
		$("#where").html(langModule.translate(lang, $("#where").attr("data-token")));
		$("#emailat").html(langModule.translate(lang, $("#emailat").attr("data-token")));
		$("#call").html(langModule.translate(lang, $("#call").attr("data-token")));
	}

	InitStaticText("en");
	$("#en").click(function(){
		InitStaticText("en");
	});
	$("#pl").click(function(){
		InitStaticText("pl");
	});

})();
