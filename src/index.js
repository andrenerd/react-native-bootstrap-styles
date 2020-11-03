import { StyleSheet, Dimensions } from 'react-native';
import { EventEmitter } from 'events';

// experimental
let Appearance;

// TODO: make it work for Expo, etc
try {
  ReactNativeAppearance = require.call(null, 'react-native-appearance');
  Appearance = ReactNativeAppearance.Appearance;
} catch (e) {
  // no dark/light mode listener
}

import { getScreens } from './mixins/helpers';
import { getSelectors } from './mixins/selectors';
import getConstants from './constants';

import getClassesText from './utilities/text';
import getClassesBackground from './utilities/background';
import getClassesFlex from './utilities/flex';
import getClassesShadow from './utilities/shadow';
import getClassesSizing from './utilities/sizing';
import getClassesSpacing from './utilities/spacing';
import getClassesBorders from './utilities/borders';
import getClassesDisplay from './utilities/display';
import getClassesOverflow from './utilities/overflow';

import getClassesType from './type';
import getClassesGrid from './grid';
import getClassesAlerts from './alerts';
import getClassesButtonGroup from './button-group';
import getClassesButtons from './buttons';
import getClassesForms from './forms';
import getClassesCard from './card';
import getClassesListGroup from './list-group';
import getClassesToasts from './toasts';
import getClassesModal from './modal';
import getClassesProgress from './progress';
import getClassesReboot from './reboot';
import getClassesTables from './tables';
import getClassesCode from './code';

class BootstrapStyleSheet {

  static DIMENSIONS_WIDTH;
  static DIMENSIONS_HEIGHT;
  static DIMENSIONS_MAX;
  static ORIENTATION_PORTRAIT;
  static ORIENTATION_LANDSCAPE;
  static MODE_LIGHT;
  static MODE_DARK;

  constants;
  classes;
  styles;

  _modules = [
    getSelectors,

    getClassesText,
    getClassesBackground,
    getClassesFlex,
    getClassesShadow,
    getClassesSizing,
    getClassesSpacing,
    getClassesBorders,
    getClassesDisplay,
    getClassesOverflow,

    getClassesType,
    getClassesGrid,
    getClassesAlerts,
    getClassesButtonGroup,
    getClassesButtons,
    getClassesForms,
    getClassesCard,
    getClassesListGroup,
    getClassesToasts,
    getClassesModal,
    getClassesProgress,
    getClassesReboot,
    getClassesTables,
    getClassesCode,
  ]

  // TODO: test "mode" (light/dark)
  constructor(constants = {}, classes = {}) {
    this._dimensions(Dimensions.get('window'));
    this._constructorConstants(constants);
    this._constructorClasses(classes);

    // experimental
    this._dimensionsEventEmitter = new EventEmitter();
    this._orientationEventEmitter = new EventEmitter();
    // this._modeEventEmitter = new EventEmitter();

    // update dimensions on change
    Dimensions.addEventListener('change', (allDimensions) => {
      const orientationLandscapeOld = this.ORIENTATION_LANDSCAPE;

      this._dimensions(allDimensions.window);
      this._createConstants();
      this._createClasses();

      this._dimensionsEventEmitter.emit('change', allDimensions.window);
      orientationLandscapeOld != this.ORIENTATION_LANDSCAPE &&
        this._orientationEventEmitter.emit('change', allDimensions.window); // or what?
    });

    // update mode on change
    Appearance && Appearance.addChangeListener(({colorScheme: mode}) => {
      this._appearance(mode);
    });
  }

  // DEPRECATED
  create() {
    return this.styles;
  }

  addDimensionsListener(handler) {
    this._dimensionsEventEmitter.addListener('change', handler);
  }

  removeDimensionsListener(handler) {
    this._dimensionsEventEmitter.removeListener('change', handler);
  }

  addOrientationListener(handler) {
    this._orientationEventEmitter.addListener('change', handler);
  }

  removeOrientationListener(handler) {
    this._orientationEventEmitter.removeListener('change', handler);
  }

  addModeListener(handler) {
    // TODO
    // this._modeEventEmitter.addListener('change', handler);
  }

  removeModeListener(handler) {
    // TODO
    // this._modeEventEmitter.removeListener('change', handler);
  }

  dimensionsWidth = () => this.DIMENSIONS_WIDTH
  dimensionsHeight = () => this.DIMENSIONS_HEIGHT
  dimensionsMax = () => this.DIMENSIONS_MAX
  orientationPortrait = () => !!this.ORIENTATION_PORTRAIT
  orientationLandscape = () => !!this.ORIENTATION_LANDSCAPE
  modeLight = () => !!this.MODE_LIGHT
  modeDark = () => !!this.MODE_DARK

  _constructorConstants(constants) {
    this._constants = getConstants(constants);
    this._createConstants();
  }

  _constructorClasses(classes) {
    const customModule = typeof classes == 'function' ? classes : () => classes;
    this._modules.push(customModule);
    this._createClasses();
  }

  _createConstants() {
    const _constants = this._constants;
    const { GRID_BREAKPOINTS_HORIZONTAL, GRID_BREAKPOINTS_VERTICAL } = _constants;

    const DIMENSIONS_WIDTH = _constants._DIMENSIONS_WIDTH || this.DIMENSIONS_WIDTH;
    const DIMENSIONS_HEIGHT = _constants._DIMENSIONS_HEIGHT || this.DIMENSIONS_HEIGHT;
    const DIMENSIONS_MAX = _constants._DIMENSIONS_MAX || this.DIMENSIONS_MAX;
    const ORIENTATION_PORTRAIT = _constants._ORIENTATION_PORTRAIT || this.ORIENTATION_PORTRAIT;
    const ORIENTATION_LANDSCAPE = _constants._ORIENTATION_LANDSCAPE || this.ORIENTATION_LANDSCAPE;

    const SCREENS_HORIZONTAL = _constants.SCREENS_HORIZONTAL || getScreens(GRID_BREAKPOINTS_HORIZONTAL, this.DIMENSIONS_WIDTH);
    const SCREEN_HORIZONTAL = _constants.SCREEN_HORIZONTAL || SCREENS_HORIZONTAL.slice(-1).pop();
    // const SCREENS_HORIZONTAL_INFIXES = [''].concat(SCREENS_HORIZONTAL), // infixes
    const SCREENS_VERTICAL = _constants.SCREENS_VERTICAL || getScreens(GRID_BREAKPOINTS_VERTICAL, this.DIMENSIONS_HEIGHT);
    const SCREEN_VERTICAL = _constants.SCREEN_VERTICAL || SCREENS_VERTICAL.slice(-1).pop();
    // const SCREENS_VERTICAL_INFIXES = [''].concat(SCREENS_VERTICAL), // infixes
    const SCREENS = SCREENS_HORIZONTAL;
    const SCREENS_INFIXES = [''].concat(SCREENS);
    const SCREEN = SCREEN_HORIZONTAL;

    const MODE_LIGHT = this.MODE_LIGHT;
    const MODE_DARK = this.MODE_DARK;

    // preserve initially created object
    this.constants = Object.assign(this.constants || {}, _constants, {
      DIMENSIONS_WIDTH,
      DIMENSIONS_HEIGHT,
      DIMENSIONS_MAX,
      ORIENTATION_PORTRAIT,
      ORIENTATION_LANDSCAPE,
      MODE_LIGHT,
      MODE_DARK,
      SCREENS_HORIZONTAL,
      SCREEN_HORIZONTAL,
      SCREENS_VERTICAL,
      SCREEN_VERTICAL,
      SCREENS,
      SCREENS_INFIXES,
      SCREEN,
   });

    // experimental
    Object.keys(this.constants.GRID_BREAKPOINTS).forEach(item => {
      const itemIndex = SCREENS.indexOf(item);
      this.constants['SCREEN_UP_' + item.toUpperCase()] = itemIndex > -1;
      this.constants['SCREEN_DOWN_' + item.toUpperCase()] = itemIndex == -1 || itemIndex == SCREENS.length - 1;
      this.c = this.constants;
    });
  }

  _createClasses() {
    this._classes = {};

    this._modules.forEach(itemGetClasses => {
      this._classes = Object.assign(
        this._classes,
        itemGetClasses(this.constants, this._classes),
      );
    });

    // preserve initially created object
    this.styles = Object.assign(this.styles || {},
      StyleSheet.create(this._classes),
    );
    this.s = this.styles;
  }

  _dimensions(dimensions) {
    this.DIMENSIONS_WIDTH = dimensions.width;
    this.DIMENSIONS_HEIGHT = dimensions.height;
    this.DIMENSIONS_MAX = Math.max(dimensions.width, dimensions.height);

    this.ORIENTATION_PORTRAIT = dimensions.height > dimensions.width;
    this.ORIENTATION_LANDSCAPE = dimensions.width > dimensions.height;
  }

  // experimental
  static _dimensions(dimensions) {
    this.DIMENSIONS_WIDTH = dimensions.width;
    this.DIMENSIONS_HEIGHT = dimensions.height;
    this.DIMENSIONS_MAX = Math.max(dimensions.width, dimensions.height);

    this.ORIENTATION_PORTRAIT = dimensions.height > dimensions.width;
    this.ORIENTATION_LANDSCAPE = dimensions.width > dimensions.height;
  }

  _appearance(mode) {
    this.MODE_LIGHT = mode == 'light';
    this.MODE_DARK = mode == 'dark';
  }

  // experimental
  static _appearance(mode) {
    this.MODE_LIGHT = mode == 'light';
    this.MODE_DARK = mode == 'dark';
  }
}

// set dimensions for the class on changes
Dimensions.addEventListener('change', allDimensions => {
 BootstrapStyleSheet._dimensions(allDimensions.window);
});

// set dimensions for the class
BootstrapStyleSheet._dimensions(Dimensions.get('window'));

// set mode for the class on changes
Appearance && Appearance.addChangeListener(({colorScheme: mode}) => {
  this._appearance(mode);
});

// set mode for the class
Appearance && BootstrapStyleSheet._appearance(Appearance.getColorScheme());

export default BootstrapStyleSheet;
