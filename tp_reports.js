if (Meteor.isClient) {
  Template.reportInputs.events({
    "submit form": function (event, template) {
      event.preventDefault();
      var name = template.find('#tested-party-name').value;
      var year = template.find('#tested-party-year').value;
      alert(name + ' ' + year);
    }
  })
}

if (Meteor.isServer) {

}
