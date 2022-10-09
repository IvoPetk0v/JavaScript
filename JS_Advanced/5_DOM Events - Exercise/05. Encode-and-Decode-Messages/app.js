function encodeAndDecodeMessages() {
    let textAreaInput = document.getElementsByTagName("textarea")[0];
    let textAreaOutput = document.getElementsByTagName("textarea")[1];
    let buttonEncode = document.getElementsByTagName("button")[0].addEventListener("click", Encode);
    let buttonDecode = document.getElementsByTagName("button")[1].addEventListener("click", Decode);
    function Encode(e) {
        let text = textAreaInput.value;
        let encodedTxt = (Array.from(text).map(ch => String.fromCharCode(ch.charCodeAt() + 1))).join("");
        textAreaOutput.value = encodedTxt;
        textAreaInput.value = "";
    }
    function Decode(e) {
        let text = textAreaOutput.value;
        let decodedText = (Array.from(text).map(ch => String.fromCharCode(ch.charCodeAt() - 1))).join("");
        textAreaOutput.value = decodedText;
    }
}