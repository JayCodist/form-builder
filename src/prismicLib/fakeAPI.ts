/**
 * DO NOT EDIT THIS FILE.
 * This is a fake API to simulate the behavior of a real API.
 */

export async function fetchJSON({ key }: { key: string }) {
  await sleep();
  const storedData = localStorage.getItem(key);
  const parsedData = storedData ? JSON.parse(storedData) : undefined;
  return parsedData;
}

export async function storeJSON({ key, data }: { key: string; data: unknown }) {
  await sleep();
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
}

function sleep() {
  const s = Math.random() * 3000;
  return new Promise((resolve) => setTimeout(resolve, s));
}