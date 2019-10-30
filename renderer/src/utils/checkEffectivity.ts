const determineEffectivity = (userType: string, targetType: string) => {
  let effectivity;
  switch (userType) {
    case "dwarf":
      effectivity = 0.5;
      break;
    case "human":
      effectivity = 1.25;
      break;
    case "mage":
      effectivity = 1;
      break;
    default:
      throw Error("This usertype has not been registered yet.");
  }
  return effectivity;
};

export default determineEffectivity;
