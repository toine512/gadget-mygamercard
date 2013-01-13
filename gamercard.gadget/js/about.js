//AFFICHAGE
function Load()
{
	var gamertag = System.Gadget.Settings.readString("gamertag");
	if(gamertag)
	{
		document.getElementById("button_avatar").style.display = "inline";
		document.getElementById("div_avatar").style.display = "block";
		document.getElementById("name").innerHTML = "Avatar de <strong>" + gamertag + "</strong>";
		document.getElementById("avatar").src = "http://avatar.xboxlive.com/avatar/" + gamertag + "/avatar-body.png";
		document.getElementById("friend").href = "http://live.xbox.com/profile/FriendsMgmt.aspx?gt=" + gamertag + "&amp;act=Add";
		document.getElementById("message").href = "http://live.xbox.com/profile/MessageCenter/SendMessage.aspx?gt=" + gamertag;
		document.getElementById("profile").href = "http://live.xbox.com/member/" + gamertag;
		document.getElementById("check_options").elements["gamertag"].value = gamertag;
	}
	else
	{
		document.getElementById("options").style.display = "block";
	}
	if(System.Gadget.Settings.read("flash"))
	{
		document.getElementById("check_options").flash.checked = true;
	}
	if(System.Gadget.Settings.read("silverlight"))
	{
		document.getElementById("check_options").silverlight.checked = true;
	}
}

function Avatar()
{
	document.getElementById("div_avatar").style.display = "block";
	document.getElementById("options").style.display = "none";
	document.getElementById("a_propos").style.display = "none";
}

function Options()
{
	document.getElementById("div_avatar").style.display = "none";
	document.getElementById("options").style.display = "block";
	document.getElementById("a_propos").style.display = "none";
}

function aPropos()
{
	document.getElementById("div_avatar").style.display = "none";
	document.getElementById("options").style.display = "none";
	document.getElementById("a_propos").style.display = "block";
}
//************
//TRAITEMENT
System.Gadget.onSettingsClosing = SettingsClosing;
function SettingsClosing(event)
{
	// Save the settings if the user clicked OK.
	if(event.closeAction == event.Action.commit)
	{
		var gamertag = document.getElementById("check_options").elements["gamertag"].value;
		if(gamertag)
		{
			System.Gadget.Settings.writeString("gamertag", gamertag);
		}
		System.Gadget.Settings.write("flash", document.getElementById("check_options").flash.checked);
		System.Gadget.Settings.write("silverlight", document.getElementById("check_options").silverlight.checked);
	}
	// Allow the Settings dialog to close.
	event.cancel = false;
}
