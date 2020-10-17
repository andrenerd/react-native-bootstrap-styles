export default function getClasses(constants, classes) {
  const {
    OVERFLOWS,
  } = constants;

  const _classes = {
    // pass
  }

  OVERFLOWS.forEach((item) => {
    const classItem = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    _classes['overflow' + classItem] = {overflow: item};
  });

  return _classes;
};
