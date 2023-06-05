import { api } from "@/constants/api";
import request from "@/utils/axios/axios";
import localforage from "localforage";
import { ChangeEventHandler, useEffect, useState } from "react";

const useUploader = () => {
  const [links, setLinks] = useState<Array<string>>([]);
  const [linksLoading, setLinksLoading] = useState(true);
  const [copiedLink, setCopiedLink] = useState("");
  const [uploadCount, setUploadCount] = useState(-1);
  useEffect(() => {
    localforage.config({
      driver: localforage.INDEXEDDB,
      name: "uploader",
      storeName: "uploader",
    });

    localforage.getItem("links").then((data) => {
      setLinksLoading(false);
      if (Array.isArray(data)) {
        setLinks(data);
      } else {
        localforage.setItem("links", []);
      }
    });
  }, []);

  const copyToClipboard = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(link);
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const {
        data: { image },
      } = await request<{ image: string }>({
        url: api.uploader,
        method: "POST",
        data: formData,
        onUploadProgress(progressEvent) {
          const percentage =
            (progressEvent.loaded * 100) / (progressEvent.total ?? 0);
          setUploadCount(+percentage.toFixed(2));
        },
      });
      setUploadCount(-1);
      localforage.getItem("links").then((data) => {
        const linksStorage = data as Array<string>;
        linksStorage.unshift(image);
        localforage.setItem("links", linksStorage);
        setLinks(linksStorage);
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

  return {
    links,
    copyToClipboard,
    uploadCount,
    changeInputFile,
    copiedLink,
    linksLoading,
  };
};
export default useUploader;
