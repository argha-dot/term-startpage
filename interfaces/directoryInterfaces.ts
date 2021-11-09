export interface fileInterface {
  type: "file";
  link: string;
}

export interface folderInterface {
  [index: string]: fileInterface | folderInterface;
}

export interface directoryInterface {
  [index: string]: fileInterface | folderInterface;
}

