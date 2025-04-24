const form = document.getElementById("mainForm")
form.addEventListener("submit", handleFormSubmit)


function handleFormSubmit (e) {
	e.preventDefault();
	const formData = new FormData(e.target);
	const baseURL = "https://www.waecdirect.org/DisplayResult.aspx"
	const params = new URLSearchParams();
	params.set("ExamNumber", formData.get("examNumber"))
	params.set("ExamYear", formData.get("examYear"))
	params.set("pin", formData.get("pin"))
	params.set("serial", formData.get("serialNumber"))
	params.set("ExamType", "MAY/JUN")
	const url = baseURL + "?" + params.toString();
	form.reset();
	window.open(url, "_blank");
}