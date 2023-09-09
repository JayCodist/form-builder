import { FunctionComponent, memo } from "react";
import Input from "../components/input/Input";
import { RenderCounter } from "../prismicLib/RenderCounter";
import styles from "./slice.module.scss";
import Button from "../components/button/Button";
import {
  ArticleData,
  SliceComponentProps
} from "../utils/helpers/model.interface";
import { isValidHexColorString } from "../utils/helpers/validators";

const Article: FunctionComponent<SliceComponentProps> = memo(
  ({ onChange, onRemove, className, sliceID, sliceData }) => {
    const handleChange = (key: keyof ArticleData, value: unknown) => {
      const newFormData = { ...sliceData, [key]: value as unknown };
      let shouldSync = true;
      if (key === "colorInput1" && value) {
        shouldSync = isValidHexColorString(value as string);
      }
      onChange(sliceID, newFormData, shouldSync);
    };

    return (
      <div className={[styles["slice-wrapper"], className].join(" ")}>
        <div className={styles["slice-header"]}>
          <strong>
            Article slice • <RenderCounter />
          </strong>
          <Button type="danger" onClick={() => onRemove(sliceID)}>
            Remove slice
          </Button>
        </div>
        <div className={styles["slice-form-wrapper"]}>
          <Input
            value={sliceData.input1}
            onChange={value => handleChange("input1", value)}
            placeholder="Text Input"
            type="text"
            className={styles["slice-input"]}
          />
          <Input
            value={(sliceData as ArticleData).input2}
            onChange={value => handleChange("input2", value)}
            placeholder="Text Input"
            type="text"
            className={styles["slice-input"]}
          />
          <Input
            value={(sliceData as ArticleData).colorInput1}
            onChange={value => handleChange("colorInput1", value)}
            placeholder="Enter Color Hex"
            type="color"
            className={styles["slice-input"]}
          />
        </div>
      </div>
    );
  }
);

export default Article;
