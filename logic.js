searchBugzilla = function(bzid) {
  var query = bzid.selectionText;
  var url = "";
  var re = new RegExp("^([0-9]{5,9})$");
  if (re.test(query)) {
    chrome.storage.sync.get({
      bzServerValue: "https://bugzilla.redhat.com/show_bug.cgi?id="
    }, function(items) {
      url = items.bzServerValue;
      chrome.tabs.create({ 'url': url + query });
    });
  } else {
    console.log("Invalid Bugzilla Id");
  }
};

chrome.contextMenus.create({
  title: 'Bugzilla Search',
  contexts: ["selection"],
  onclick: searchBugzilla,
});
