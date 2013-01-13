function init()
{
	//settings
	System.Gadget.settingsUI = "about.html";
	System.Gadget.onSettingsClosed = window.location.reload;
	var gamertag = System.Gadget.Settings.readString("gamertag");
	if(gamertag)
	{
		document.getElementById("gTagPrompt").style.display = "none";
		//on initialise le flyout
		System.Gadget.Flyout.file = "avatar.html";
		//on associe les événements d’ancrage à des fonction
		System.Gadget.onDock = genDocked;
		System.Gadget.onUndock = genUndocked;
		//on détecte le mode d’affichage du gadget pour appeller la bonne fonction
		if(System.Gadget.docked)
		{
			genDocked();
		}
		else
		{
			genUndocked();
		}
		//on insert du contenu dans les div
		//si flash est désactivé
		if(System.Gadget.Settings.read("flash"))
		{
			document.getElementById("divDocked").innerHTML = "\t\t\t<p>\n\t\t\t\t<a href=\"http://profile.mygamercard.net/" + gamertag + "\">\n\t\t\t\t\t<img onmouseover=\"System.Gadget.Flyout.show = true;\" src=\"http://card.mygamercard.net/FR/" + gamertag + ".png\" alt=\"GamerCard basique\" title=\"" + gamertag + " est un PGM !\" width=\"198\" height=\"135\" />\n\t\t\t\t</a>\n\t\t\t</p>";
		}
		else
		{
			document.getElementById("divDocked").innerHTML = "\t\t\t<object data=\"http://card.mygamercard.net/FR/" + gamertag + ".swf\" type=\"application/x-shockwave-flash\" width=\"198\" height=\"135\">\n\t\t\t\t<param name=\"movie\" value=\"http://card.mygamercard.net/FR/" + gamertag + ".swf\" />\n\t\t\t\t<p>\n\t\t\t\t\t<a href=\"http://profile.mygamercard.net/" + gamertag + "\">\n\t\t\t\t\t\t<img onmouseover=\"System.Gadget.Flyout.show = true;\" src=\"http://card.mygamercard.net/FR/" + gamertag + ".png\" alt=\"GamerCard basique\" title=\"" + gamertag + " est un PGM !\" width=\"198\" height=\"135\" />\n\t\t\t\t\t</a>\n\t\t\t\t</p>\n\t\t\t</object>";
		}
		//si silverlight est désactivé
		if(System.Gadget.Settings.read("silverlight"))
		{
			document.getElementById("divUndocked").innerHTML = "\t\t\t<p>\n\t\t\t\t<a href=\"http://profile.mygamercard.net/" + gamertag + "\">\n\t\t\t\t\t<img onmouseover=\"System.Gadget.Flyout.show = true;\" src=\"http://card.mygamercard.net/FR/nxe/" + gamertag + ".png\" alt=\"GamerCard NXE\" title=\"" + gamertag + " est un PGM !\" width=\"300\" height=\"135\" />\n\t\t\t\t</a>\n\t\t\t</p>";
		}
		else
		{
			document.getElementById("divUndocked").innerHTML = "\t\t\t<object data=\"data:application/x-silverlight-2,\" type=\"application/x-silverlight-2\" width=\"300\" height=\"135\">\n\t\t\t\t<param name=\"source\" value=\"http://card.mygamercard.net/default.xap\" />\n\t\t\t\t<param name=\"enableHtmlAccess\" value=\"true\" />\n\t\t\t\t<param name=\"enableGPUAcceleration\" value=\"true\" />\n\t\t\t\t<param name=\"minRuntimeVersion\" value=\"3.0.40624.0\" />\n\t\t\t\t<param name=\"autoUpgrade\" value=\"true\" />\n\t\t\t\t<param name=\"initParams\" value=\"gamertag=" + gamertag + ",language=FR\" />\n\t\t\t\t<p>\n\t\t\t\t\t<a href=\"http://profile.mygamercard.net/" + gamertag + "\">\n\t\t\t\t\t\t<img onmouseover=\"System.Gadget.Flyout.show = true;\" src=\"http://card.mygamercard.net/FR/nxe/" + gamertag + ".png\" alt=\"GamerCard NXE\" title=\"" + gamertag + " est un PGM !\" width=\"300\" height=\"135\" />\n\t\t\t\t\t</a>\n\t\t\t\t</p>\n\t\t\t</object>";
		}
		//on définit le délais de rafraichissement
		setTimeout("window.location.reload()", 1800000);
	}
	else
	{
		document.getElementsByTagName("body")[0].style.width = "130px";
		document.getElementsByTagName("body")[0].style.height = "80px";
		document.getElementById("gTagPrompt").style.display = "block";
	}
}
function Save()
{
	var gamertag = document.getElementById("form").elements["gamertag"].value;
	if(gamertag)
	{
		System.Gadget.Settings.writeString("gamertag", gamertag);
		init();
	}
	//pour que le formulaire ne nous emmerde pas :
	return false;
}
function genDocked()
{
	// génère le contenu docké
	document.getElementsByTagName("body")[0].style.width = "200px";
	document.getElementsByTagName("body")[0].style.height = "137px";
	// gère la visibilité des div
	document.getElementById("divDocked").style.display = "block";
	document.getElementById("divUndocked").style.display = "none";    
}
function genUndocked()
{
	// génère le contenu dédocké 
	document.getElementsByTagName("body")[0].style.width = "302px";
	document.getElementsByTagName("body")[0].style.height = "137px";
	// gère la visibilité des div
	document.getElementById("divDocked").style.display = "none";
	document.getElementById("divUndocked").style.display = "block";
}