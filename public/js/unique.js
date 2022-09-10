//Inititalize ClipboardJS
new ClipboardJS(".btnClipboardJS");

// SET data-clipboard-text TO CURRENT URL ON PAGE LOAD
window.onload = function currentURL() {
  const URL = window.location.href;
  document.getElementById("copy-button").innerHTML =
    '<a onClick="copiedToClipboard()" class="btn btn-outline-secondary btn-lg btnClipboardJS" data-clipboard-text="' +
    URL +
    '" id="alertCard"><i class="fa fa-link" aria-hidden="true"></i> Copy URL</a>';
};

// If you only want the functionality, but not the visual effect, ignore the following function.

// AESTHETIC: CHANGE INNER HTML
function copiedToClipboard() {
  document.getElementById("alertCard").innerHTML =
    '<i class="fa fa-check" aria-hidden="true"></i> URL Copied!';
  setTimeout(function () {
    document.getElementById("alertCard").innerHTML =
      '<i class="fa fa-link" aria-hidden="true"></i> Copy URL Again';
  }, 3000);
}
