export interface fileInterface extends Object {
  type: "file";
  link: string;
}

export interface folderInterface {
  [index: string]: folderInterface | fileInterface;
}

export interface directoryInterface {
  [index: string]: folderInterface | fileInterface;
}

