import { StyleSheet, Dimensions } from 'react-native';

import { getScreens } from './mixins/functions';
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

  constructor(constants, classes) {
    this._constructorConstants(constants);
    this._constructorClasses(classes);

    // update dimensions on change
    Dimensions.addEventListener('change', () => {
      this._dimensions(Dimensions.get('window'));
    });
  }

  create() {
    return StyleSheet.create(this._classes);
  }

  _constructorConstants(constants) {
    this.constants = getConstants(constants);

    // save "forced" initial values
    this.constants.DIMENSIONS_WIDTH && (this._DIMENSIONS_WIDTH = this.constants.DIMENSIONS_WIDTH);
    this.constants.DIMENSIONS_HEIGHT && (this._DIMENSIONS_HEIGHT = this.constants.DIMENSIONS_HEIGHT);
    this.constants.DIMENSIONS_MAX && (this._DIMENSIONS_MAX = this.constants.DIMENSIONS_MAX);

    // TODO: move all the rest code into _dimensions method too
    this._dimensions(Dimensions.get('window'));

    // experimental
    this.constants.SCREENS_HORIZONTAL = this.constants.SCREENS_HORIZONTAL || getScreens(this.constants.GRID_BREAKPOINTS_HORIZONTAL, this.constants.DIMENSIONS_WIDTH);
    this.constants.SCREEN_HORIZONTAL = this.constants.SCREEN_HORIZONTAL || this.constants.SCREENS_HORIZONTAL.slice(-1).pop();
    // this.constants.SCREENS_HORIZONTAL_INFIXES = [''].concat(this.constants.SCREENS_HORIZONTAL); // infixes

    // experimental
    this.constants.SCREENS_VERTICAL = this.constants.SCREENS_VERTICAL || getScreens(this.constants.GRID_BREAKPOINTS_VERTICAL, this.constants.DIMENSIONS_HEIGHT);
    this.constants.SCREEN_VERTICAL = this.constants.SCREEN_VERTICAL || this.constants.SCREENS_VERTICAL.slice(-1).pop();
    // this.constants.SCREENS_VERTICAL_INFIXES = [''].concat(this.constants.SCREENS_VERTICAL); // infixes

    // experimental
    this.constants.SCREENS = this.constants.SCREENS_HORIZONTAL;
    this.constants.SCREENS_INFIXES = [''].concat(this.constants.SCREENS);
    this.constants.SCREEN = this.constants.SCREEN_HORIZONTAL;

    // temporal / highly experimental
    // TODO: move somewhere
    const
      screens = this.constants.SCREENS,
      lastIndex = screens.length - 1;

    Object.keys(this.constants.GRID_BREAKPOINTS).forEach((item) => {
      const itemIndex = screens.indexOf(item);
      this.constants['SCREEN_UP_' + item.toUpperCase()] = itemIndex > -1;
      this.constants['SCREEN_DOWN_' + item.toUpperCase()] = itemIndex == -1 || itemIndex == lastIndex;
    });
  }

  _constructorClasses(classes) {
    this._classes = {};

    this._modules.forEach((itemGetClasses) => {
      this._classes = Object.assign(
        this._classes,
        itemGetClasses(this.constants, this._classes),
      );
    });

    this.classes = Object.assign(this._classes, classes);
  }

  _dimensions(dimensions) {
    this.DIMENSIONS_WIDTH = dimensions.width;
    this.DIMENSIONS_HEIGHT = dimensions.height;
    this.DIMENSIONS_MAX = Math.max(dimensions.width, dimensions.height);

    // set "dynamic" constants
    if (this.constants) {
      this.constants.DIMENSIONS_WIDTH = this._DIMENSIONS_WIDTH || this.DIMENSIONS_WIDTH;
      this.constants.DIMENSIONS_HEIGHT = this._DIMENSIONS_HEIGHT || this.DIMENSIONS_HEIGHT;
      this.constants.DIMENSIONS_MAX = this._DIMENSIONS_MAX || this.DIMENSIONS_MAX;
    }
  }

  static _dimensions(dimensions) {
    this.DIMENSIONS_WIDTH = dimensions.width;
    this.DIMENSIONS_HEIGHT = dimensions.height;
    this.DIMENSIONS_MAX = Math.max(dimensions.width, dimensions.height);
  }
}

// set dimensions on init and on view port change
Dimensions.addEventListener('change', () => {
  BootstrapStyleSheet._dimensions(Dimensions.get('window'));
});

BootstrapStyleSheet._dimensions(Dimensions.get('window'));

export default BootstrapStyleSheet;
