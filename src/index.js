import { StyleSheet, Dimensions } from 'react-native';
import { EventEmitter } from 'events';

import { getScreens } from './mixins/helpers';
import getConstants from './constants';

import getClassesText from './utilities/text';
import getClassesBackground from './utilities/background';
import getClassesFlex from './utilities/flex';
import getClassesSizing from './utilities/sizing';
import getClassesSpacing from './utilities/spacing';
import getClassesBorder from './utilities/border';

import getClassesType from './type';
import getClassesGrid from './grid';
import getClassesButtons from './buttons';
import getClassesForms from './forms';
import getClassesCard from './card';
import getClassesModal from './modal';
import getClassesProgress from './progress';
import getClassesReboot from './reboot';

class BootstrapStyleSheet {

  static DIMENSIONS_WIDTH;
  static DIMENSIONS_HEIGHT;
  static DIMENSIONS_MAX;
  static ORIENTATION_PORTRAIT;
  static ORIENTATION_LANDSCAPE;

  constants;
  classes;
  styles;

  _modules = [
    getClassesText,
    getClassesBackground,
    getClassesFlex,
    getClassesSizing,
    getClassesSpacing,
    getClassesBorder,

    getClassesType,
    getClassesGrid,
    getClassesButtons,
    getClassesForms,
    getClassesCard,
    getClassesModal,
    getClassesProgress,
    getClassesReboot,
  ]

  // TODO:
  // orientation
  // dimensions
  // mode (light/dark)
  constructor(constants, classes) {
    this._dimensions(Dimensions.get('window'));
    this._constructorConstants(constants);
    this._constructorClasses(classes);

    // experimental
    this._dimensionsEventEmitter = new EventEmitter();
    this._orientationEventEmitter = new EventEmitter();
    // this._modeEventEmitter = new EventEmitter();

    // update dimensions on change
    Dimensions.addEventListener('change', (allDimensions) => {
      this._dimensions(allDimensions.window);
      this._createConstants();
      this._createClasses();

      this._dimensionsEventEmitter.emit('change', allDimensions.window);
      this._orientationEventEmitter.emit('change', allDimensions.window); // or what?
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

  // addModeEventListener()

  dimensionsWidth = () => this.DIMENSIONS_WIDTH
  dimensionsHeight = () => this.DIMENSIONS_HEIGHT
  dimensionsMax = () => this.DIMENSIONS_MAX
  orientationPortrait = () => this.ORIENTATION_PORTRAIT
  orientationLandscape = () => this.ORIENTATION_LANDSCAPE

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

    // preserve initially created object
    this.constants = Object.assign(this.constants || {}, _constants, {
      DIMENSIONS_WIDTH,
      DIMENSIONS_HEIGHT,
      DIMENSIONS_MAX,
      ORIENTATION_PORTRAIT,
      ORIENTATION_LANDSCAPE,
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
}

// set dimensions for the class on changes
Dimensions.addEventListener('change', allDimensions => {
  BootstrapStyleSheet._dimensions(allDimensions.window);
});

// set dimensions for the class
BootstrapStyleSheet._dimensions(Dimensions.get('window'));

export default BootstrapStyleSheet;

