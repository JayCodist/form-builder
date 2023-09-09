export const isValidNumberString: (value: string) => boolean = value => {
  if (/^\d*\.\d+/.test(value)) {
    return true;
  }
  const withTrimmedLeadingZeros = value.replace(/^0+/g, "");
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
