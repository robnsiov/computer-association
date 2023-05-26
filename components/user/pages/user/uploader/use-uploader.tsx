import axios from "axios";
import localforage from "localforage";
import { ChangeEventHandler, useEffect, useState } from "react";

const useUploader = () => {
  const [links, setLinks] = useState<Array<string>>([]);
  const [uploadCount, setUploadCount] = useState(-1);
  useEffect(() => {
    localforage.getItem("links").then((data) => {
      if (Array.isArray(data)) {
        setLinks(data);
      }
    });
  }, []);

  const copyToClipboard = (link: string) => {
    navigator.clipboard.writeText(link);
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const {
        data: {
          data: { image },
        },
      } = await axios<{ data: { image: string } }>({
        url: "https://qut-association.iran.liara.run/post/image/upload/",
        method: "POST",
        data: formData,
        onUploadProgress(progressEvent) {
          setUploadCount(
            () =>
              Math.round(progressEvent.loaded * 100) /
              (progressEvent.total ?? 0)
          );
        },
      });
      setUploadCount(0);
      console.log(image);
      localforage.getItem("links").then((data) => {
        const links = Array.isArray(data) ? [...data] : [];
        links.push(image);
        localforage.setItem("links", links);
        setLinks(links);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const changeInputFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.item(0) as File;
    uploadFile(file);
  };

  return { links, copyToClipboard, uploadCount, changeInputFile };
};
export default useUploader;
