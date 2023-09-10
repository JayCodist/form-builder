import { ComponentType } from "react";
import Hero from "../slices/Hero";
import Article from "../slices/Article";
import Temperature from "../slices/Temperature";
import {
  ArticleData,
  HeroData,
  SliceComponentProps,
  SliceDataType,
  SliceName,
  SliceOption,
  TemperatureData
} from "./helpers/model.interface";

/**
 * Available slice options. Can be extended to include more slice options by simply
 * adding more items to the array, that follow the interface
 */
export const availableSliceOptions: SliceOption[] = [
  { title: "Hero", color: "#6E56CF" },
  { title: "Article", color: "#30A46C" },
  { title: "Temperature", color: "#FFB224" }
];

export const blankHero: HeroData = {
  input1: ""
};

export const blankArticle: ArticleData = {
  input1: "",
  input2: "",
  colorInput1: "#000000"
};

export const blankTemperature: TemperatureData = {
  input1: "",
  numberInput1: ""
};

/**
 * Provides a means of converting a slice title string to a corresponding initial data value
 */
export const titleBlankDataMap: Record<SliceName, SliceDataType> = {
  Hero: blankHero,
  Article: blankArticle,
  Temperature: blankTemperature
};

/**
 * Provides a means of converting a slice title string to a corresponding slice React component
 */
export const titleComponentMap: Record<
  SliceName,
  ComponentType<SliceComponentProps>
> = {
  Hero,
  Article,
  Temperature
};
