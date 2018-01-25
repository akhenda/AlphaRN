// Basic press
element(by.id('tappable')).tap();
element(by.id('tappable')).longPress();
element(by.id('tappable')).multiTap(3);

// Fill in inputs 
element(by.id('textField')).typeText('passcode');
element(by.id('textField')).replaceText('passcode again');
element(by.id('textField')).clearText();


// More customs actions
element(by.id('tappable')).tapAtPoint({ x: 5, y: 10 });
element(by.id('scrollView')).scroll(100, 'down');
element(by.id('scrollView')).scroll(100, 'up');
element(by.id('scrollView')).scrollTo('bottom');
element(by.id('scrollView')).swipe('down', 'fast');
