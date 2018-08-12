# react-native-bootstrap-styles
Bootstrap style library for React Native  

Original class names are transformed from "dashed" to "camelcase" style, for example: `text-center` to `textCenter` and `my-sm-4` to 'mySm4'. Also all the constants (variables in terms of Bootstrap) could be accessible in templates. It helps to make custom tweaks preserving styling guidelines, for example: {fontSize: 10 * FONT_SIZE_BASE}.


```
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const
  BODY_COLOR = '#000022',
  TEXT_MUTED = '#888888';

// custom constants
const constants = {
  BODY_COLOR, TEXT_MUTED,
};

// custom classes
const classes = {
  title: {
    color: 'red',
  }
};

const bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes);
const s = styles = bootstrapStyleSheet.create();
const c = constants = bootstrapStyleSheet.constants;

class Hello extends Component {

  render() {
    return (
      <View style={[s.body]}>
        <View style={[s.container, s.h100, s.justifyContentCenter]}>
          <Text style={[s.text, s.h3, s.textPrimary, s.myXs1, s.myMd3]}>Hello world!</Text>
          <Text style={[s.text, s.py3, {fontSize: 5 * c.REM}]}>🤓🚀🚀🚀</Text>
        </View>
      </View>
    );
  }
}
```

Check the full list of constants in the source code:  
[./src/constants.js](./src/constants.js)



## Buttons


TouchableHighlight as button:
```
<TouchableHighlight onPress={this.onPress} style=[{s.btnTouchable}]>
  <View style={[s.btn, s.btnPrimary]}>
    <Text style={[s.btnText, s.btnTextPrimary]}>Signup</Text>
  </View>
</TouchableHighlight>
```

Links as default and outline buttons with some optional tweaks (see "underlayColor"):
```
// import { Link } from 'react-router-native';
<Link to="/submit" component={TouchableHighlight} underlayColor={c.PRIMARY} style={[s.btnTouchable]}>
  <View style={[s.btn, s.btnPrimary]}>
    <Text style={[s.btnText, s.btnTextPrimary]}>Submit</Text>
  </View>
</Link>

<Link to="/cancel" component={TouchableHighlight} underlayColor={c.PRIMARY} style={[s.btnTouchable, s.mt3]}>
  <View style={[s.btn, s.btnOutlinePrimary]}>
    <Text style={[s.btnText, s.textPrimary]}>Cancel</Text>
  </View>
</Link>
```



## Card

Basic card:
```
<View style={[s.card]}>
  <View style={[s.cardBody]}>
    <Text style={[s.text]}>Hello Card!</Text>
  </View>
</View>
```



## Modal

Basic modal (temporal approach, till higher level component added to the lib):
```
<Modal
  animationType={animationType}
  transparent={transparent}
  visible={this.state.modal}
  onRequestClose={this.hide}
  onShow={this.onShown}
  onDismiss={this.onHidden}
>
  <View style={[s.modal]}>
    <View style={[s.modalDialog]}>
      <View style={[s.modalContent]}>
        <Text style={[s.text]>Hello Modal!</Text>
      </View>
    </View>
  </View>
</Modal>
```



## Progress bar

Basic progress bar
```
<View style={[s.progress]}>
  <View style={[s.progressBar, {width: `${progress * 100}%`}]} />
</View>
```



## Custom

flex{screen} aka flex{screen}1  

