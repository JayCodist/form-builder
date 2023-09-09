export interface HeroData {
  input1: string;
}

export interface ArticleData {
  input1: string;
  input2: string;
  colorInput1: string;
}

export interface TemperatureData {
  input1: string;
  numberInput1: string;
}

export type SliceDataType = HeroData | ArticleData | TemperatureData;

export interface SliceComponentProps {
  sliceID: string;
  sliceData: SliceDataType;
  onChange: (
    sliceID: string,
    sliceData: SliceDataType,
    skipSync?: boolean
  ) => void;
  onRemove: (sliceID: string) => void;
  className?: string;
}

export type SliceName = "Hero" | "Article" | "Temperature";

export interface SliceOption {
  title: SliceName;
  color: string;
}

export interface Slice {
  title: SliceName;
  id: string;
  data: SliceDataType;
}
