export default function ConvertBlob(picture) {
    var jpegFile64 = picture.replace(/^data:image\/(png|jpeg);base64,/, "");
    var jpegBlob = base64ToBlob(jpegFile64, 'image/jpeg');


    function base64ToBlob(base64, mime) {
        mime = mime || '';
        var sliceSize = 1024;
        var byteChars = window.atob(base64);
        var byteArrays = [];

        for (var offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
            var slice = byteChars.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            };

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        };

        return new Blob(byteArrays, { type: mime });
    };

    return jpegBlob;
};