import { useState, useCallback, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Slice,
  SliceDataType,
  SliceOption
} from "./utils/helpers/model.interface";
import {
  availableSliceOptions,
  titleBlankDataMap,
  titleComponentMap
} from "./utils/constants";
import Button from "./components/button/Button";
import { ReactComponent as AddIcon } from "./assets/add.svg";
import styles from "./App.module.scss";
import { fetchJSON, storeJSON } from "./prismicLib/fakeAPI";
import { getAppKey } from "./utils/helpers/data-helpers";

function App() {
  const [activeSlices, setActiveSlices] = useState<Slice[]>([]);

  const fetchSavedSlices = async () => {
    const savedSlices = await fetchJSON({ key: getAppKey("slices") });
    setActiveSlices(savedSlices || []);
  };

  useEffect(() => {
    fetchSavedSlices();
  }, []);

  const slicesRef = useRef(activeSlices);

  useEffect(() => {
    slicesRef.current = activeSlices;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlices]);

  const handleSliceChange = useCallback(
    (sliceID: string, newData: SliceDataType, shouldSync = true) => {
      const newSlices = slicesRef.current.map(slice =>
        slice.id === sliceID ? { ...slice, data: newData } : slice
      );
      setActiveSlices(newSlices);

      if (shouldSync) {
        storeJSON({ key: getAppKey("slices"), data: newSlices });
      }
    },
    []
  );

  const handleSliceRemoval = useCallback((sliceID: string) => {
    const newSlices = slicesRef.current.filter(slice => slice.id !== sliceID);
    setActiveSlices(newSlices);

    storeJSON({ key: getAppKey("slices"), data: newSlices });
  }, []);

  const addNewSlice = (sliceOption: SliceOption) => {
    const newSlice: Slice = {
      title: sliceOption.title,
      id: uuidv4(),
      data: titleBlankDataMap[sliceOption.title]
    };
    const newSlices = [...activeSlices, newSlice];
    setActiveSlices(newSlices);
    storeJSON({ key: getAppKey("slices"), data: newSlices });
  };

  return (
    <main className={styles.main}>
      <section className={styles.slices}>
        {activeSlices.map(({ title, id, data }) => {
          const SliceComponent = titleComponentMap[title];
          return (
            <SliceComponent
              key={id}
              onChange={handleSliceChange}
              onRemove={handleSliceRemoval}
              className={styles.slice}
              sliceID={id}
              sliceData={data}
            />
          );
        })}
      </section>
      <strong className={styles["available-title"]}>Available Slices</strong>
      <section className={styles.available}>
        {availableSliceOptions.map((sliceOption, i) => (
          <Button
            onClick={() => addNewSlice(sliceOption)}
            key={i}
            className={styles["slice-option"]}
            dataTestId="slice-option"
          >
            <div
              style={{
                color: sliceOption.color,
                backgroundColor: `${sliceOption.color}22`
              }}
              className={styles["icon-wrapper"]}
            >
              <AddIcon />
            </div>
            <strong>{sliceOption.title}</strong>
          </Button>
        ))}
      </section>
    </main>
  );
}

export default App;
