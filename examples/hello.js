import BootstrapStyleSheet from '../index'; // 'react-native-bootstrap-styles'

const
  REM = BootstrapStyleSheet.DIMENSIONS_WIDTH < 360 ? 14 : 16,
  BODY_COLOR = '#000022',
  TEXT_MUTED = '#888888';

// custom contants
const constants = {
  REM,
  BODY_COLOR, TEXT_MUTED,
};

// custom classes
const classes = {
  title: {
    color: 'red',
  }
};

const bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes);

let styles = bootstrapStyleSheet.create();

