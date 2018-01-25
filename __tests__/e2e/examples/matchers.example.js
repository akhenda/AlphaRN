// Basic selectors example 
element(by.id('tap_me'));
element(by.text('Tap Me'));
element(by.type('RCTImageView'));
element(by.traits(['button']));

// Advanced selectors example
element(by.id('mother').withAncestor(by.id('daughter')));
element(by.id('daughter').withDescendant(by.id('mother')));

// Example 
<View testID='Grandfather883' style={{padding: 8, backgroundColor: 'red', marginBottom: 10}}>
 <View testID='Father883' style={{padding: 8, backgroundColor: 'green'}}>
   <View testID='Son883' style={{padding: 8, backgroundColor: 'blue'}}>
     <View testID='Grandson883' style={{padding: 8, backgroundColor: 'purple'}} />
   </View>
 </View>
</View>

await element(by.id('Son883'))
await element(by.id('Son883').withAncestor(by.id('Father883')))
await element(by.id('Son883').withDescendant(by.id('Grandson883')))

// Other advanced selectors
element(by.id('UniqueId345').and(by.text('some text')));
// Choose from multiple elements matching the same matcher using index
element(by.text('Product')).atIndex(2);
// To find the Back button on IOS 
element(by.traits(['button']).and(by.label('Back')));
