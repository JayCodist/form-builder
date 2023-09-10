import { FunctionComponent, memo } from "react";
import Input from "../components/input/Input";
import {
  SliceComponentProps,
  TemperatureData
} from "../utils/helpers/model.interface";
import styles from "./slice.module.scss";
import { RenderCounter } from "../prismicLib/RenderCounter";
import Button from "../components/button/Button";
import { isValidNumberString } from "../utils/helpers/validators";

const Temperature: FunctionComponent<SliceComponentProps> = memo(
  ({ onChange, onRemove, className, sliceID, sliceData }) => {
    const handleChange = (key: keyof TemperatureData, value: unknown) => {
      const newFormData = { ...sliceData, [key]: value };
      let shouldSync = true;
      if (key === "numberInput1") {
        shouldSync = isValidNumberString(value as string);
      }
      onChange(sliceID, newFormData, shouldSync);
    };

    return (
      <div
        className={[styles["slice-wrapper"], className].join(" ")}
        data-testid="slice"
      >
        <div className={styles["slice-header"]}>
          <strong data-testid="sliceTitle">
            Temperature slice • <RenderCounter />
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
            type="text"
            className={styles["slice-input"]}
          />
          <Input
            value={(sliceData as TemperatureData).numberInput1}
            onChange={value => handleChange("numberInput1", value)}
            placeholder="Number Input"
            type="number"
            className={styles["slice-input"]}
          />
        </div>
      </div>
    );
  }
);

export default Temperature;
