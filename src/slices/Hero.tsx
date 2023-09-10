import { FunctionComponent, memo } from "react";
import Input from "../components/input/Input";
import {
  HeroData,
  SliceComponentProps
} from "../utils/helpers/model.interface";
import styles from "./slice.module.scss";
import { RenderCounter } from "../prismicLib/RenderCounter";
import Button from "../components/button/Button";

const Hero: FunctionComponent<SliceComponentProps> = memo(
  ({ onChange, onRemove, className, sliceID, sliceData }) => {
    const handleChange = (key: keyof HeroData, value: unknown) => {
      const newFormData = { ...sliceData, [key]: value as string };
      onChange(sliceID, newFormData);
    };

    return (
      <div
        className={[styles["slice-wrapper"], className].join(" ")}
        data-testid="slice"
      >
        <div className={styles["slice-header"]}>
          <strong data-testid="sliceTitle">
            Hero slice • <RenderCounter />
          </strong>
          <Button
            type="danger"
            onClick={() => onRemove(sliceID)}
            dataTestId="remove-slice"
          >
            Remove slice
          </Button>
        </div>
        <div className={styles["slice-form-wrapper"]}>
          <Input
            value={sliceData.input1}
            onChange={value => handleChange("input1", value)}
            placeholder="Text Input"
            className={styles["slice-input"]}
            type="text"
          />
        </div>
      </div>
    );
  }
);

export default Hero;
