import fetch from 'isomorphic-fetch';

const fetchDataUrl = async (url: string): Promise<string> => {
  const res = await fetch(url);
  const blob = await res.blob();
  const dataUrl = await new Promise(res => {
    const rdr = new FileReader();
    rdr.onload = () => res(rdr.result);
    rdr.readAsDataURL(blob);
  });
  return dataUrl as string;
};

export default fetchDataUrl;
