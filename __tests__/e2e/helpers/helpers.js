const components = {
  // Components i.e. test IDs
  welcome: 'Welcome',
  welcomeTitle: 'WelcomeTitle',
  WelcomeInstruction: 'WelcomeInstruction',
  instructions: 'Instructions',
  textInput: 'TextInput',
  child: 'Child',
  childTitle: 'ChildTitle',
  childOutput: 'ChildOutput',
  clearText: 'ClearText',
};

function reloadApp() {
  return device.reloadReactNative();
}

function multiTap(elementId, type = 'id') {
  switch (type) {
    case 'id': return element(by.id(elementId)).multiTap(2);
    case 'text': return element(by.text(elementId)).multiTap(2);
    default: return null;
  }
}

function asserElementIsVisible(elementId, type = 'id') {
  switch (type) {
    case 'id': return expect(element(by.id(elementId))).toBeVisible();
    case 'text': return expect(element(by.text(elementId))).toBeVisible();
    default: return null;
  }
}

function assertElementIsNotVisible(labelElementName) {
  return expect(element(by.id(labelElementName))).toBeNotVisible();
}

function textIsVisible(label) {
  return expect(element(by.label(label))).toBeVisible();
}

function typeText(elementId, text) {
  return element(by.id(elementId)).typeText(text);
}

module.exports = {
  components,
  multiTap,
  typeText,
  reloadApp,
  asserElementIsVisible,
  assertElementIsNotVisible,
  textIsVisible,
};
