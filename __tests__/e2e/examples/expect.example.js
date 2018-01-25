expect(element(by.id('UniqueId204'))).toBeVisible();
expect(element(by.id('UniqueId205'))).toBeNotVisible();
expect(element(by.id('UniqueId205'))).toExist();
expect(element(by.id('RandomJunk959'))).toNotExist();
expect(element(by.id('UniqueId204'))).toHaveText('I contain some text');
expect(element(by.id('UniqueId204'))).toHaveLabel('I contain some text');
expect(element(by.label('I contain some text'))).toHaveId('UniqueId204');
expect(element(by.id('UniqueId146'))).toHaveValue('0');
