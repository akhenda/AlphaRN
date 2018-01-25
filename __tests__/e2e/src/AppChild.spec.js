describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // Integration Tests
  it('should show the welcome screen, instructions and the text input', async () => {
    await expect(element(by.id('Welcome'))).toBeVisible();
    await waitFor(element(by.id('Instructions'))).toBeVisible().withTimeout(500);

    await expect(element(by.id('WelcomeTitle'))).toHaveText('Welcome to React Native!');
    await expect(element(by.id('WelcomeInstruction'))).toHaveText('To get started, edit App.js');
  });
  
  it('should show the child component', async () => {
    await waitFor(element(by.id('Child'))).toBeVisible().withTimeout(500);
    await expect(element(by.id('ChildTitle'))).toHaveText('Capitalized Text:');
    await expect(element(by.id('ChildOutput'))).toHaveText('You have not written anything!');
  });

  // E2E Tests
  it('should show capitalized text on input of text', async () => {
    await element(by.id('TextInput')).tap();
    await element(by.id('TextInput')).typeText('startgatE SG1 was awESOme!');
    // await expect(element(by.id('ChildOutput'))).toHaveText('Stargate Sg1 Was Awesome!');
  });
  
  it('should clear capitalized text after tap', async () => {
    await element(by.id('ClearText')).tap();

    // await expect(element(by.id('TextInput'))).toHaveText('Write something...');
    await expect(element(by.id('ChildOutput'))).toHaveText('You have not written anything!');
  });
});
