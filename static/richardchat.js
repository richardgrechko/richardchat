var system = {
	username: "N/A",
	handle: "N/A"
}
var userMessages = [];
function addMessage(username,handle,message) {
	var msg = [username,handle,message];
	var chatbox = document.getElementById("chatbox"),
		paragraph = document.createElement("p"),
		user = document.getElementById("user"),
		handle = document.getElementById("handle"),
		msgElement = document.getElementById("msg");
	user.innerText = username;
	handle.innerText = "(" + handle + ")";
	msgElement.innerText = message;
	paragraph.appendChild(document.createTextNode(handle));
	paragraph.appendChild(document.createTextNode(user));
	paragraph.appendChild(document.createTextNode(": "));
	paragraph.appendChild(document.createTextNode(msgElement));
	chatbox.appendChild(paragraph);
	return msg
}
function send(msg) {
	addMessage(system.username,system.handle,msg)
}
document.getElementById("sendmsg").addEventListener("click", function (e) {
	var rateLimit = performance.now()
	var chatMessage = document.getElementById("chatmsg");
	rateLimit + 300 > performance.now() ? (chatMessage.value = "") : send(chatMessage.value.substr(0, 400)),
	rateLimit = performance.now();
	chatMessage.value = "";
	chatMessage.focus();
})
