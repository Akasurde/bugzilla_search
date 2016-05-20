var defaultBzServer = "https://bugzilla.redhat.com/show_bug.cgi?id=";

document.getElementById("save").addEventListener("click", saveOptions);
document.getElementById("restore").addEventListener("click", eraseOptions);
document.addEventListener('DOMContentLoaded', loadOptions);

function loadOptions() {
  chrome.storage.sync.get({
      bzServerValue: defaultBzServer
  }, function(items) {
    document.getElementById('bzservername').value = items.bzServerValue;
  });
}

function saveOptions() {
	var BzServer = document.getElementById("bzservername").value;
  chrome.storage.sync.set({
      bzServerValue: BzServer
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 1750);
    });
}

function eraseOptions() {
  chrome.storage.sync.get({
      bzServerValue: defaultBzServer
  }, function(items) {
    document.getElementById('bzservername').value = items.bzServerValue;
    // Update status to let user know options were restored.
    var status = document.getElementById('status');
    status.textContent = 'Options restored.';
    setTimeout(function() {
      status.textContent = '';
    }, 1750);
  });
	location.reload();
}
