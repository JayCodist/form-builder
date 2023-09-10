/**
 *
 * @param string string to check
 * @returns boolean: true for valid number strings
 */
export const isValidNumberString: (value: string) => boolean = value => {
  // To ensure numbers like ".34" is valid
  if (/^\d*\.\d+/.test(value)) {
    return true;
  }
  // Remove leading zeros: so "000045" is valid
  const withTrimmedLeadingZeros = value.replace(/^0+/g, "");
  // Remove trailing zeros after decimal: so "3.42000" is valid
  const withTrimmedTrailingDecZeroes = withTrimmedLeadingZeros.replace(
    /(?<=\.\d+)0+$/g,
    ""
  );

  if (!withTrimmedTrailingDecZeroes) {
    return true;
  }

  return (
    String(Number(withTrimmedTrailingDecZeroes)) ===
    withTrimmedTrailingDecZeroes
  );
};

export const isValidHexColorString: (value: string) => boolean = value =>
  /^#[a-f0-9]{6}([a-f0-9]{2})?$/.test(value);
