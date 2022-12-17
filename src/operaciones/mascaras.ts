export const masks = (value: number): (string | number)[] => {
  let position: number[] = [128, 64, 32, 16, 8, 4, 2, 1];
  let octeto: number = 0;
  let mask: string = '';
  let addPosition: number = 0;
  let addOcteto: string = '';

  if (value <= 8) {
    for (let i: number = 0; i < value; i++) {
      octeto += position[i];
      addPosition = position[i];
      addOcteto = 'En 1er octeto';
    }
    mask = `${octeto}.0.0.0`;
  } else if (value <= 16) {
    for (let i: number = 0; i < value - 8; i++) {
      octeto += position[i];
      addPosition = position[i];
      addOcteto = 'En 2do octeto';
    }
    mask = `255.${octeto}.0.0`;
  } else if (value <= 24) {
    for (let i: number = 0; i < value - 16; i++) {
      octeto += position[i];
      addPosition = position[i];
      addOcteto = 'En 3er octeto';
    }
    mask = `255.255.${octeto}.0`;
  } else if (value <= 32) {
    for (let i: number = 0; i < value - 24; i++) {
      octeto += position[i];
      addPosition = position[i];
      addOcteto = 'En 4to octeto';
    }
    mask = `255.255.255.${octeto}`;
  }
  return [mask, addPosition, addOcteto];
};
