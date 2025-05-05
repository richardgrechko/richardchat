var system = {
	username: "N/A",
	handle: "N/A"
}
var userMessages = [];
function addMessage(username,handle,message) {
	var msg = [username,handle,message];
	var chatbox = document.getElementById("chatbox"),
		paragraph = document.createElement("p"),
		user = document.createElement("user"),
		handleElement = document.createElement("handle"),
		msgElement = document.createElement("msg");
	user.innerText = username;
	handleElement.innerText = "(" + handle + ")";
	msgElement.innerText = message;
	paragraph.appendChild(handleElement);
	paragraph.appendChild(user);
	paragraph.appendChild(": ");
	paragraph.appendChild(msgElement);
	chatbox.appendChild(paragraph);
	console.log(user)
	console.log(handleElement)
	console.log(msgElement)
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
