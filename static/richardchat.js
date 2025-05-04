var system = {
	username: "N/A",
	handle: "N/A"
}
var userMessages = [];
function addMessage(username,handle,message,registered) {
	var chatbox = document.getElementById("chatbox"),
		paragraph = document.createElement("p"),
		user = document.createElement("user"),
		handle = document.createElement("handle"),
		msgElement = document.createElement("msg");
	user.innerText = username;
	handle.innerText = "(" + handle + ")";
	msgElement.innerText = message;
	paragraph.appendChild(handle);
	paragraph.appendChild(user);
	paragraph.appendChild(document.createTextNode(": "));
	paragraph.appendChild(message);
}
document.getElementById("sendmsg").addEventListener("click", function (e) {
	var rateLimit = performance.now()
	var chatMessage = document.getElementById("chatmsg");
	rateLimit + 300 > performance.now() ? (chatMessage.value = "") : send(chatMessage.value.substr(0, 400)),
	rateLimit = performance.now();
	chatMessage.value = "";
	chatMessage.focus();
})
